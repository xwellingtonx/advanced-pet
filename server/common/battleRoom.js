
'use strict';

class BattleRoom {
    constructor(id, players) {
        this.id = id;
        this.turnStatus = "";
        this.turnCount = 0;
        this.turnBlockedItems = [],
        this.players = players;
    }
}

module.exports = BattleRoom;