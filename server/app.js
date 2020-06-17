const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);
var UUID = require('uuid-random');
const Helpers = require('./helpers');

var battleRooms = [];

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
                    var room = {
                        id: UUID(),
                        players: new Array()
                    };

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
            var room = {
                id: UUID(),
                players: new Array()
            };
            
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

            console.log(room.players);

            room.players.forEach(item => {
                if(item.socketId === socket.id) {
                    item.currentTurn = "attack";
                } else {
                    item.currentTurn = "defense";
                }

                Socketio.to(item.socketId)
                        .emit("turnRouletteResult", item.currentTurn);
            });
        } 
    });

    // Disconnect player
    socket.on("disconnectPlayer", function () {

    });
});
  
  
//   /**
//    * Handle the turn played by either player and notify the other. 
//    */
//   Socketio.on('playTurn', function(data){
//     Socketio.broadcast.to(data.room).emit('turnPlayed', {
//       tile: data.tile,
//       room: data.room
//     });
//   });
  
//   /**
//    * Notify the players about the victor.
//    */
//   Socketio.on('gameEnded', function(data){
//     Socketio.broadcast.to(data.room).emit('gameEnd', data);
//   });

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});