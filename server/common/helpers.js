
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
}

module.exports = Helpers;