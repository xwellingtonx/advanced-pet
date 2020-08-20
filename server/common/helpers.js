
'use strict';

class Helpers {
    static isPlayerInRoom(battleRooms, playerId) {
      
       var room = null;

       for (let i = 0; i < battleRooms.length; i++) {
            if(battleRooms[i].players.some(x => x.player.id === playerId)) {
                room = battleRooms[i];
            }
       }

       return room;
    }

    static getRoomById(battleRooms, roomId) {
        return battleRooms.find(room => room.id === roomId);
    }

    static removeRoomById(battleRooms, roomId) {
        var index = battleRooms.indexOf(battleRooms.find(room => room.id === roomId));
        if(index) {
            battleRooms.splice(index, 1);
        }
    }

    static removeRoomByPlayerId(battleRooms, playerId) {
        var index = -1;
        
        battleRooms.forEach(element => {
            var player = element.players.find(x => x.id === playerId);

            if(player) {
                index = battleRooms.indexOf(element);
            }
        });

        if(index) {
            battleRooms.splice(index, 1);
        }
    }
}

module.exports = Helpers;