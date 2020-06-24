const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);
var UUID = require('uuid-random');
const Helpers = require('./common/helpers');
const BattleRoom = require('./common/battleRoom');

var battleRooms = new Array();

Socketio.on("connection", socket => {
    // Connect the client to the battle room
    socket.on("connectPlayer", playerSession => {
        console.log("Connecting player: " + playerSession.id);
        
        if(battleRooms.length > 0) {
            //Check if the player is already in a room
            var room = Helpers.isPlayerInRoom(battleRooms, playerSession.id);

            if(room) {
                /*Join the current socket to the room where the player is added 
                because this event can be triggered by refresh/creating of browser tab
                */
                socket.join('room-' + room.id);
                console.log("Player: " + playerSession.id + " is already in a room!");
                return;
            }

            battleRooms.forEach(room => {
                //Add player to an existing room
                if (room.players.length < 2) {
                    room.players.push({
                        socketId: socket.id,
                        currentTurn: "",
                        player: playerSession
                    });
                    //Connect the second player to a socket.io room
                    socket.join('room-' + room.id);
                    
                    //Emit broadcast to all player in the room
                    if(room.players.length === 2) {
                        console.log("starting battle to room: " + room.id);

                        Socketio.to('room-' + room.id)
                        .emit("initializeBattle", room.id);
                    }
                } else {
                    //Add player to a new room
                    var room = new BattleRoom(
                        UUID(),
                        new Array()
                    );

                    socket.join('room-' + room.id);

                    room.players.push({
                        socketId: socket.id,
                        currentTurn: "",
                        player: playerSession
                    });

                    battleRooms.push(room);
                }
            });
        } else {
            var room = new BattleRoom(
                UUID(),
                new Array()
            );

            socket.join('room-' + room.id);

            room.players.push({
                socketId: socket.id,
                currentTurn: "",
                player: playerSession
            });

            battleRooms.push(room);
        }
    });

    socket.on("turnRoulette", function(roomId) {
        var room = Helpers.getRoomById(battleRooms, roomId);

        if(room) {
            console.log("Selecting player to start the turn as attack...");

            if(room.players.some(x => x.currentTurn === "attack")) {
                return;
            } 

            //console.log(room.players);

            room.players.forEach(item => {
                if(item.socketId === socket.id) {
                    item.currentTurn = "attack";
                } else {
                    item.currentTurn = "defense";
                }

                Socketio
                    .to(item.socketId)
                    .emit("turnRouletteResult", item.currentTurn);
            });
        } 
    });

    //Send socket notifying other player that the 
    socket.on("chipPlugged", function (roomId) {
        //Notify player is ready to battle.
        Socketio
            .to('room-' + roomId)
            .emit("playersReady");
    });

    //Start turn 
    socket.on("startTurn", function (roomId) {
        if(roomId === null || roomId === undefined) {
            return;
        }

        var room = Helpers.getRoomById(battleRooms, roomId);

        if(room.turnStatus === "" || room.turnStatus === "finished") {
            room.turnStatus = "started";
            room.turnCount += 1;

            console.log("Starting turn: " + room.turnCount);

            //generate blocked pieces random base on 3x3 matrix
            var list = [];
            do {
                var item = {
                    row: Math.floor(Math.random() * 3),
                    column: Math.floor(Math.random() * 3)
                }

                //Just add the item if is not going to be in the middle of the matrix and not exist already
                if(item.column !== 1 && 
                    !list.some(x => x.row === item.row && x.column === item.column)) {

                    list.push(item);
                }

            } while (list.length < 2);

            room.turnBlockedItems = list;
        }

        Socketio.to(socket.id)
        .emit("startTurnResult", room.turnBlockedItems);
    });

    //Defense Movement
    socket.on("defenseMove", function (roomId, defensePosition) {
        var room = Helpers.getRoomById(battleRooms, roomId);
        //Find the other player in the room 
        var player = room.players.find(item =>  item.socketId !== socket.id);

        Socketio.to(player.socketId)
        .emit("defensePosition", defensePosition);
    });

    //Attack Movement
    socket.on("attackMove", function (roomId, attackPosition) {
        var room = Helpers.getRoomById(battleRooms, roomId);
        //Find the other player in the room 
        var player = room.players.find(item =>  item.socketId !== socket.id);

        Socketio.to(player.socketId)
        .emit("attackPosition", attackPosition);
    });

    // Receive confirmation about fire the attack from the client
    socket.on("attackConfirmed", function (roomId, isAttackHit, attackPower) {
        console.log("attack confirmed to battle:" + roomId);
        //TODO: add here here the hit player light in the client

        //Send back a fire attack socket to all clients
        Socketio.to('room-' + roomId)
        .emit("fireAttack", isAttackHit, attackPower);
    });

    // Disconnect player
    socket.on("disconnectPlayer", function () {

    });
});
  
Http.listen(3000, () => {
    console.log("Listening at :3000...");
});