<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g id="Time">
                <rect class="primary-color" x="3" y="64.55" width="76.89" height="7.45" />
                <rect v-for="item in countDownBars" 
                    :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />                
            </g>

            <g class="board">
                <rect class="primary-color" x="2.95" y="2.98" width="24" height="18" />
                <rect class="primary-color" x="29.55" y="44.06" width="24" height="17.96" />
                <rect class="primary-color" x="56.14" y="44.02" width="24" height="18" />
                <rect class="primary-color" x="56.14" y="2.93" width="24" height="18" />
                <rect class="primary-color" x="56.14" y="23.56" width="24" height="18" />
                <rect class="primary-color" x="2.95" y="23.49" width="24" height="18" />
                <rect class="primary-color" x="2.96" y="44.01" width="24" height="18" />
                <rect class="primary-color" x="29.55" y="3.07" width="24" height="18" />
                <rect class="primary-color" x="29.5" y="23.49" width="24" height="18" />
            </g>

            <g class="board-item" v-for="item in this.boardItems" :key="item.id + '_' + item.type" 
                :style="{ transform: 'translate('+ item.posX+'px,'+ item.posY + 'px)'}">

                <path v-if="item.type === 'attack' && item.canShow" id="Selected" d="M27,8.05V5.48H24.29V8H21.62V5.48h2.67V3H21.61V5.47H18.94V3H16.31V5.51H19V8.07h2.65v2.56h2.67V13.2H21.62V10.63H19V8.07H16.31V5.54H13.64V3H11V5.54H8.29V3H5.62V5.54H3v7.82H5.62v2.56H3v2.46H5.62V21H8.29v-2.5H5.62V15.92H8.29v2.46H11V21h2.67V18.45H11V15.89h2.67v2.56h2.66V21H19V18.35h2.66V15.79H19v2.56H16.29V15.79H13.63V13.23H11V10.67h2.66V8.11H11V5.54h2.67V8.11h2.65v2.56H13.63v2.56h2.66V10.67H19v2.56H16.29v2.56H19V13.23h2.67v2.56h2.67v2.54H21.63V21h2.66V18.35H27V15.76H24.3V13.2H27V10.6H24.29V8.05ZM5.62,10.76H3V8.2H5.62Zm0-5.22H8.29V8.11H5.62Zm2.67,7.78H5.62V10.76H8.29Zm0-5.21H11v2.56H8.29ZM11,15.89H8.29V13.32H11Z" />
                <polygon v-if="item.type === 'blocked'" class="move-blocked" data-name="Blocked" points="21.78 10.63 21.78 8.09 24.36 8.09 24.36 5.55 26.95 5.55 26.95 2.98 21.78 2.98 21.78 5.55 16.43 5.55 16.43 8.09 13.75 8.09 13.75 5.55 11.09 5.55 11.09 8.09 8.29 8.09 8.29 5.55 5.58 5.55 5.58 2.98 2.95 2.98 2.95 8.12 5.58 8.12 5.58 10.63 8.29 10.63 8.29 15.46 5.58 15.46 5.58 18.44 3.04 18.44 3.04 18.45 2.95 18.45 2.95 20.98 3.04 20.98 3.11 20.98 8.29 20.98 8.29 18.44 11.09 18.44 11.09 20.98 13.75 20.98 13.75 18.37 11.09 18.37 11.09 15.46 13.75 15.46 13.75 13.16 16.43 13.16 16.43 15.71 19.05 15.71 19.05 18.44 21.78 18.44 21.78 20.98 24.36 20.98 24.36 18.44 24.36 15.77 26.95 15.77 26.95 13.16 24.36 13.16 24.36 15.71 21.78 15.71 21.78 13.16 19.05 13.16 19.05 10.63 21.78 10.63" />
               
                <g v-if="item.type === 'virus'">
                    <rect class="primary-color" x="10.87" y="11.91" width="2.35" height="2.35" />
                    <rect class="primary-color" x="17.87" y="11.89" width="2.35" height="2.35" />
                    <path d="M22.26,16.34V9.57h-2v-2H10.87v2h-2v6.77h2v2.31H8.76V21H13.2V18.65h4.38V21h4.66V18.65h-2V16.34Zm-9-2.11H10.87V11.91h2.35Zm4.65,0V11.91h2.35v2.32Z" />
                    <rect class="primary-color" x="13.2" y="18.65" width="4.37" height="2.31" />
                    <polygon class="primary-color" points="22.26 7.25 10.87 7.25 10.87 7.29 8.76 7.29 8.76 7.29 8.37 7.29 8.37 20.96 8.83 20.96 8.83 18.65 10.87 18.65 10.87 16.34 8.83 16.34 8.83 9.57 10.87 9.57 10.87 7.56 20.22 7.56 20.22 9.6 22.26 9.6 22.26 16.34 20.22 16.34 20.22 18.65 22.26 18.65 22.26 20.96 22.68 20.96 22.68 7.25 22.26 7.25" />
                </g>

                <g v-if="item.type === 'navi'">
                    <g >
                        <polygon points="17.94 19.66 17.94 15.33 16.57 15.33 16.57 12.52 19.28 12.52 19.28 11.12 19.28 9.72 17.91 9.72 17.91 11.12 16.57 11.12 16.57 8.34 17.94 8.34 17.94 6.96 17.94 4.05 15.13 4.05 15.13 6.96 13.8 6.96 13.8 8.34 10.95 8.34 10.95 9.73 10.95 11.13 9.39 11.13 9.39 12.59 10.95 12.59 12.37 12.59 12.37 9.73 13.8 9.73 13.8 13.8 12.37 13.8 12.37 19.57 12.37 19.57 12.37 19.66 11.07 19.66 11.07 20.99 13.8 20.99 13.8 19.66 13.8 19.57 13.8 16.84 16.57 16.84 16.57 19.66 16.57 20.99 19.31 20.99 19.31 19.66 17.94 19.66" />
                        <rect class="primary-color" x="13.8" y="16.79" width="2.77" height="4.2" />
                        <polygon class="primary-color" points="19.71 3 19.71 2.97 19.28 2.97 18.69 2.97 15.13 2.97 13.8 2.97 13.8 5.52 10.95 5.52 9.39 5.52 9.39 11.13 10.95 11.13 10.95 8.34 13.8 8.34 13.8 6.96 15.13 6.96 15.13 4.05 17.94 4.05 17.94 8.35 17.91 8.35 17.91 8.34 16.57 8.34 16.57 11.12 17.91 11.12 17.91 9.72 18.69 9.72 18.69 9.73 19.31 9.73 19.31 12.54 19.28 12.54 18.69 12.54 16.57 12.54 16.57 15.36 17.93 15.36 17.93 19.66 18.69 19.66 19.28 19.66 19.31 19.66 19.31 20.96 19.94 20.96 19.94 3 19.71 3" />
                        <polygon class="primary-color" points="12.37 9.73 12.37 12.56 9.39 12.56 9.39 13.79 9.39 15.29 9.39 16.84 9.39 19.66 9.39 20.96 11.07 20.96 11.07 19.66 12.37 19.66 12.37 13.79 13.8 13.79 13.8 9.73 12.37 9.73" />
                    </g>                   
                </g>

                <g class="player" v-if="item.type === 'player'">
                    <g v-if="item.turnType === 'defense'">
                        <polygon points="17.94 19.66 17.94 15.33 16.57 15.33 16.57 12.52 19.28 12.52 19.28 11.12 19.28 9.72 17.91 9.72 17.91 11.12 16.57 11.12 16.57 8.34 17.94 8.34 17.94 6.96 17.94 4.05 15.13 4.05 15.13 6.96 13.8 6.96 13.8 8.34 10.95 8.34 10.95 9.73 10.95 11.13 9.39 11.13 9.39 12.59 10.95 12.59 12.37 12.59 12.37 9.73 13.8 9.73 13.8 13.8 12.37 13.8 12.37 19.57 12.37 19.57 12.37 19.66 11.07 19.66 11.07 20.99 13.8 20.99 13.8 19.66 13.8 19.57 13.8 16.84 16.57 16.84 16.57 19.66 16.57 20.99 19.31 20.99 19.31 19.66 17.94 19.66" />
                        <rect class="primary-color" x="13.8" y="16.79" width="2.77" height="4.2" />
                        <polygon class="primary-color" points="19.71 3 19.71 2.97 19.28 2.97 18.69 2.97 15.13 2.97 13.8 2.97 13.8 5.52 10.95 5.52 9.39 5.52 9.39 11.13 10.95 11.13 10.95 8.34 13.8 8.34 13.8 6.96 15.13 6.96 15.13 4.05 17.94 4.05 17.94 8.35 17.91 8.35 17.91 8.34 16.57 8.34 16.57 11.12 17.91 11.12 17.91 9.72 18.69 9.72 18.69 9.73 19.31 9.73 19.31 12.54 19.28 12.54 18.69 12.54 16.57 12.54 16.57 15.36 17.93 15.36 17.93 19.66 18.69 19.66 19.28 19.66 19.31 19.66 19.31 20.96 19.94 20.96 19.94 3 19.71 3" />
                        <polygon class="primary-color" points="12.37 9.73 12.37 12.56 9.39 12.56 9.39 13.79 9.39 15.29 9.39 16.84 9.39 19.66 9.39 20.96 11.07 20.96 11.07 19.66 12.37 19.66 12.37 13.79 13.8 13.79 13.8 9.73 12.37 9.73" />
                    </g>
                    <g v-if="item.turnType === 'attack'">
                        <polygon points="11.39 19.66 11.39 15.33 12.76 15.33 12.76 12.52 10.04 12.52 10.04 11.12 10.04 9.72 11.41 9.72 11.41 11.12 12.76 11.12 12.76 8.34 11.39 8.34 11.39 6.96 11.39 4.05 14.2 4.05 14.2 6.96 15.53 6.96 15.53 8.34 18.38 8.34 18.38 9.73 18.38 11.13 19.94 11.13 19.94 12.59 18.38 12.59 16.95 12.59 16.95 9.73 15.53 9.73 15.53 13.8 16.95 13.8 16.95 19.57 16.95 19.57 16.95 19.66 18.26 19.66 18.26 20.99 15.53 20.99 15.53 19.66 15.53 19.57 15.53 16.84 12.76 16.84 12.76 19.66 12.76 20.99 10.02 20.99 10.02 19.66 11.39 19.66" />
                        <rect class="primary-color" x="12.76" y="16.79" width="2.77" height="4.2" transform="translate(28.29 37.78) rotate(-180)" />
                        <polygon class="primary-color" points="9.62 3 9.62 2.97 10.04 2.97 10.64 2.97 14.2 2.97 15.53 2.97 15.53 5.52 18.38 5.52 19.94 5.52 19.94 11.13 18.38 11.13 18.38 8.34 15.53 8.34 15.53 6.96 14.2 6.96 14.2 4.05 11.39 4.05 11.39 8.35 11.41 8.35 11.41 8.34 12.76 8.34 12.76 11.12 11.41 11.12 11.41 9.72 10.64 9.72 10.64 9.73 10.02 9.73 10.02 12.54 10.04 12.54 10.64 12.54 12.76 12.54 12.76 15.36 11.4 15.36 11.4 19.66 10.64 19.66 10.04 19.66 10.02 19.66 10.02 20.96 9.39 20.96 9.39 3 9.62 3" />
                        <polygon class="primary-color" points="16.95 9.73 16.95 12.56 19.94 12.56 19.94 13.79 19.94 15.29 19.94 16.84 19.94 19.66 19.94 20.96 18.26 20.96 18.26 19.66 16.95 19.66 16.95 13.79 15.53 13.79 15.53 9.73 16.95 9.73" />
                    </g>
                </g>
            </g>
            
        </svg>      
    </g>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { SceneNames, Events, BattleTypes, TurnTypes, EnemyTypes, BattleActionTypes, ElementTypes } from '../../../../global/constants.js';
import EventBus from '../../../../global/eventBus.js';
import { getChipAttackArea, getSupportChipEffectById } from '../../common/chipHelper';

export default {
    name: "BattleBoard",
    data() {
        return {
            boardItems: [],
            countDownBars: [
                { id: 1, x: "4.44"},
                { id: 2, x: "12.11"},  
                { id: 3, x: "19.78"},
                { id: 4, x: "27.44"},
                { id: 5, x: "35.11"},
                { id: 6, x: "42.77"},    
                { id: 7, x: "50.44"},
                { id: 8, x: "58.11"},
                { id: 9, x: "65.77"},
                { id: 10, x: "73.44"}                                                                                                                                      
            ],
            countDownInterval: null,
            enemyInterval: null       
        }
    },
    computed: {
        ...mapState({
            turnType: state => state.battle.turnType,
            battleType: state => state.battle.type,
            enemy: state => state.battle.enemy,
            player: state => state.battle.player
        }),        
        ...mapGetters({
            attackChip: 'battle/getAttackChip',
            supportChip: 'battle/getSupportChip'
        })       
    },
    mounted() {
        this.registerListeners();

        var blockedPanels = this.ramdomBlockedPanels();

        if(this.battleType === BattleTypes.AI) {
            this.startGame(blockedPanels);
        } else {
            if(this.turnType === TurnTypes.Attack) {
                //Start turn between players
                this.$socket.client.emit('startTurn', this.$store.state.battle.id, blockedPanels);
            }
        }
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    sockets: {
        startTurnResult(blockedItems) {
           this.startGame(blockedItems); 
        },
        defensePosition(defensePosition) {
            //Fix bug of defense been added after all the other items
            setTimeout(() => {
                defensePosition.turnType = this.$store.state.battle.turnType;

                var currentDefenseIndex = this.boardItems.findIndex(x => x.type === "player");
                
                if(currentDefenseIndex > 0) {
                    this.boardItems.splice(currentDefenseIndex, 1);
                }

                this.boardItems.push(defensePosition);
            }, 2);
        },
        attackPosition(attackPositions) {
            //Remove old attack areas
            this.boardItems = this.boardItems.filter(function(item) {
                return item.type !== "attack"
            });

            //Add elements always at beginning of the items
            attackPositions.forEach(element => {
                this.boardItems.splice(0, 0, element)
            });
        },
        fireAttack(isAttackHit, attackPower) {
            if(this.turnType === TurnTypes.Defense) {
                if(isAttackHit) {
                    this.$store.commit('battle/addBattleAction', {
                        type: BattleActionTypes.PlayerHP, 
                        value: -parseInt(attackPower)
                    });
                }
            } 

            this.$store.commit('battle/setIsAttackHit', isAttackHit);
            this.$store.commit('session/setCurrentScene', SceneNames.BattleFireAttack);

            this.$socket.client.emit('updateNaviStaus', this.$store.state.battle.id, this.$store.state.battle.player.naviStatus);
        }
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Up, () => this.moveTo(Events.Up));
            EventBus.$on(Events.Down, () => this.moveTo(Events.Down));

            EventBus.$on(Events.Right, () => this.moveTo(Events.Right));
            EventBus.$on(Events.Left, () => this.moveTo(Events.Left));
            EventBus.$on(Events.Confirmation, this.onConfirmation);
        },
        unregisterListeners() {
            EventBus.$off(Events.Up);
            EventBus.$off(Events.Down);
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Confirmation);
        },
        startCountDown: function() {
            var time = 500;

            if(this.supportChip && this.supportChip.Id === "120") {
                time = getSupportChipEffectById(this.supportChip.Id).value;
            }

            this.countDownInterval = setInterval(() => {
                if(this.countDownBars.length > 0) {
                    this.countDownBars.splice(this.countDownBars.length - 1, 1);

                    if(this.countDownBars.length === 0) {
                        this.onConfirmation();
                    }
                }
            }, time);
        },
        startGame(blockedItems) {
            this.startCountDown();

            //Create board with blocked items
            blockedItems.forEach(element => {
                var item = {
                    id: `${element.row}_${element.column}`,
                    type: 'blocked',
                    posX: element.column * 26.6,
                    posY: element.row * 20.5
                }

                this.boardItems.push(item);
            });

            //Adde attack area or player to the board depending of the current turn type
            if(this.turnType === TurnTypes.Attack) {
                this.addAttackPatternToBoard(this.getChipArea());

                if(this.battleType === BattleTypes.AI) {
                    this.addEnemyToBoard();
                    this.startEnemyMovement();
                }
            } else { //Defense
                this.addEnemyToBoard();
            }           
        },
        addAttackPatternToBoard(chipArea) {
            var attackAreaItems = [];

            for (let i = 0; i < chipArea.length; i++) {
                for (let j = 0; j < chipArea.length; j++) {
                    var id = `${i}_${j}`;

                    //Just add the attack range to the board at the specific index if is not a blocked area
                    if(chipArea[i][j] === 1) {
                        var item = {
                            id: id,
                            type: 'attack',
                            canShow: this.boardItems.some(x => x.id === id && x.type === 'blocked') === false, //just show if don't have a blocked aread at the same index
                            posX: j * 26.6,
                            posY: i * 20.5
                        }
                        attackAreaItems.push(item);
                    }
                }
            }

            this.boardItems = this.boardItems.concat(attackAreaItems);
            //Send socket for attack area
            this.$socket.client.emit('attackMove', this.$store.state.battle.id, attackAreaItems);   
        },
        addEnemyToBoard() {
            //Ramdom index where enemy will be added, cannot be blocked.
            do {
                var row = Math.floor(Math.random() * 3);
                var column = Math.floor(Math.random() * 3);
                var id = `${row}_${column}`;

            } while (this.boardItems.some(x => x.id === id && x.type === 'blocked'));

            var enemyType = "";
            if(this.enemy.type === EnemyTypes.Virus) {
                enemyType = "virus";
            } else if(this.enemy.type === EnemyTypes.Boss) {
                enemyType = "navi";
            } else {
                enemyType = "player"
            }

            var enemyItem = {
                id: `${row}_${column}`,
                type: enemyType,
                turnType: this.turnType,
                posX: column * 26.6,
                posY: row * 20.5   
            }   
            
            this.boardItems.push(enemyItem); 

            if(this.battleType === BattleTypes.Player) {
                //Send socket for players
                this.$socket.client.emit('defenseMove', this.$store.state.battle.id, enemyItem);
            }
        },
        moveTo(position) {
            if(this.turnType === TurnTypes.Attack) {
                this.moveAttackTo(position);
            } else {
                this.moveCharacterTo(position)
            }
        },
        moveAttackTo(position) {
            var attackAreas = this.boardItems.filter(function(item) {
                return item.type === "attack"
            });

            if(attackAreas) {
                var newAttackAreas = [];
                var canAddItems = true;

                for (let i = 0; i < attackAreas.length; i++) {
                    const element = attackAreas[i];
                    
                    var strArr = element.id.split("_");
                    var atkRow = parseInt(strArr[0]), atkColumn = parseInt(strArr[1]);

                    switch (position) {
                        case Events.Up:
                            atkRow -= 1;
                            break;
                        case Events.Down:
                            atkRow += 1;
                            break;
                        case Events.Left:
                            atkColumn -= 1;
                            break; 
                        case Events.Right:
                            atkColumn += 1;
                            break;                                                 
                    }     

                    var chipArea = this.getChipArea(this.attackChip);

                    if((atkRow >= 0 && atkRow <= 2) && (atkColumn >= 0 && atkColumn <= 2) &&
                    chipArea[atkRow][atkColumn] >= 0) {

                        var area = {
                            id: `${atkRow}_${atkColumn}`,
                            type: 'attack',
                            canShow: !this.boardItems.some(x => x.id === `${atkRow}_${atkColumn}` && x.type === 'blocked'),
                            posX: atkColumn * 26.6,
                            posY: atkRow * 20.5
                        }
                        
                        newAttackAreas.push(area);  
                    } else {
                        canAddItems = false;
                        break;
                    }
                }

                if(canAddItems && newAttackAreas.length > 0) {
                    //Remove old attack areas
                    this.boardItems = this.boardItems.filter(function(item) {
                        return item.type !== "attack"
                    });

                    this.boardItems = this.boardItems.concat(newAttackAreas);

                    if(this.battleType === BattleTypes.Player) {
                        //Send socket for attack area
                        this.$socket.client.emit('attackMove', this.$store.state.battle.id, newAttackAreas);
                    }
                }
            }
        },
        moveCharacterTo(position) {
            //Move the defense character 
            var enemy = this.boardItems
                .find(x => x.type === 'player' || x.type === 'virus' || x.type === 'navi');

            if(enemy) {
                var arry = enemy.id.split("_");
                var row = parseInt(arry[0]), column = parseInt(arry[1]);

                switch (position) {
                    case Events.Up:
                        row -= 1;
                        break;
                    case Events.Down:
                        row += 1;
                        break;
                    case Events.Left:
                        column -= 1;
                        break; 
                    case Events.Right:
                        column += 1;
                        break;                                                 
                }

                //Just move to row_column if is not blocked or  beggning/end of the matrix
                var newPosId = `${row}_${column}`;
                if(!this.boardItems.some(x => x.id === newPosId && x.type === 'blocked') &&
                    (row >= 0 && row <= 2) && (column >= 0 && column <= 2)) {
                        //remove the current defense from the list
                        this.boardItems.splice(this.boardItems.indexOf(enemy), 1);

                        enemy.id = newPosId;
                        enemy.posX = column * 26.6,
                        enemy.posY = row * 20.5
                        
                        this.boardItems.push(enemy);

                        if(this.battleType === BattleTypes.Player) {
                            //Send socket for player
                            this.$socket.client.emit('defenseMove', this.$store.state.battle.id, enemy);   
                        }
                    }
            }
        },
        getChipArea() {
            var chipArea = null;
            
            if(this.attackChip) {
                chipArea = getChipAttackArea(this.attackChip); 
            } else {
                //If no chip was plugged use MegaBuster attack area
                chipArea = [
                    [0, 0, 0],
                    [0, 1, 0],
                    [0, 0, 0]
                ]
            }

            return chipArea;
        },
        onConfirmation() {
            if(this.turnType === TurnTypes.Attack) {
                clearInterval(this.countDownInterval);
                
                if(this.enemyInterval != null) {
                    clearInterval(this.enemyInterval);
                }

                var enemy = this.boardItems.find(x => x.type === 'player' || x.type === 'navi' || x.type === 'virus');
                var isAttackHit = this.boardItems.some(x => x.id === enemy.id && x.type === 'attack');
                var attackPower = 0;

                if(isAttackHit) {
                    if(this.attackChip) {
                        attackPower = this.getAttackPower(
                            this.attackChip.Element, this.attackChip.AT,
                            this.enemy.element)
                    } else {
                        attackPower = this.getAttackPower(
                            this.player.element, this.player.at,
                            this.enemy.element)                        
                    }
                }

                if(this.battleType === BattleTypes.Player) {
                    this.$socket.client.emit('attackConfirmed', this.$store.state.battle.id, isAttackHit, attackPower);

                } else {
                    if(isAttackHit) {
                        ///this.$store.commit('battle/setEnemyDamage', attackPower);
                        this.$store.commit('battle/addBattleAction', {
                            type: BattleActionTypes.EnemyDamage, 
                            value: -attackPower
                        });
                    }

                    this.$store.commit('battle/setIsAttackHit', isAttackHit);
                    this.$store.commit('session/setCurrentScene', SceneNames.BattleFireAttack);
                }
            }
        },
        ramdomBlockedPanels() {
            //TODO: Chips can affect this
            var list = [];

            if(this.supportChip && 
                (this.supportChip.Id === "091" || this.supportChip.Id === "092" ||
                this.supportChip.Id === "093" || this.supportChip.Id === "116" ||
                this.supportChip.Id === "117" || this.supportChip.Id === "123" ||
                this.supportChip.Id === "124" || this.supportChip.Id === "125")) {

                var effect = getSupportChipEffectById(this.supportChip.Id);

                for (let row = 0; row < effect.value.length; row++) {
                    for (let col = 0; col < effect.value.length; col++) {
                        list.push({
                            row: row,
                            column: col
                        });
                    }
                }
            } else {
                var panelsCount = Math.floor(Math.random() * 2) + 1; //The panels can be 1 or 2

                do {
                    var item = {
                        row: Math.floor(Math.random() * 3),
                        column: Math.floor(Math.random() * 3)
                    }

                    //Just add the item if is not going to be in the middle of the matrix and not exist already
                    if(item.column !== 1 && !list.some(x => x.row === item.row && x.column === item.column)) {
                        list.push(item);
                    }

                } while (list.length < panelsCount);
            }

            return list;
        },
        startEnemyMovement() {
            var interval = 800;

            if (this.supportChip && (this.supportChip.Id === "083" || this.supportChip.Id === "084")) {
                interval = getSupportChipEffectById(this.supportChip.Id).value;
            }

            interval -= 15 * this.enemy.level; //speedy up base on the level
            interval = interval < 500 ? 500 : interval; //Cannot be under 1 second

            var positions = [
                Events.Up.toString(),
                Events.Down.toString(),
                Events.Left.toString(),
                Events.Right.toString()
            ];
            this.enemyInterval = setInterval(() => {
                var index = Math.floor(Math.random() * positions.length);
                this.moveCharacterTo(positions[index]);
            }, interval);
        },
        getAttackPower(atkElement, atkPower, defElement) {
            var totalAtkPower = 0;

            if(atkElement === ElementTypes.Neutral || defElement === ElementTypes.Neutral) {
                totalAtkPower = atkPower;
            }

            if(atkElement === ElementTypes.Fire) {
                if(defElement === ElementTypes.Wood) {
                    totalAtkPower = atkPower * 2;
                } else if(defElement === ElementTypes.Aqua) {
                    totalAtkPower = Math.floor(atkPower / 2);
                } else {
                    totalAtkPower = atkPower;
                }
            } else if(atkElement === ElementTypes.Wood) {
                if(defElement === ElementTypes.Elec) {
                    totalAtkPower = atkPower * 2;
                } else if(defElement === ElementTypes.Fire) {
                    totalAtkPower = Math.floor(atkPower / 2);
                } else {
                    totalAtkPower = atkPower;
                }
            } else if(atkElement === ElementTypes.Elec) {
                if(defElement === ElementTypes.Aqua) {
                    totalAtkPower = atkPower * 2;
                } else if(defElement === ElementTypes.Wood) {
                    totalAtkPower = Math.floor(atkPower / 2);
                } else {
                    totalAtkPower = atkPower;
                }
            } else if(atkElement === ElementTypes.Aqua) {
                if(defElement === ElementTypes.Fire) {
                    totalAtkPower = atkPower * 2;
                } else if(defElement === ElementTypes.Elec) {
                    totalAtkPower = Math.floor(atkPower / 2);
                } else {
                    totalAtkPower = atkPower;
                }
            }

            if(this.supportChip && this.supportChip.Id === "205") {
                var effect = getSupportChipEffectById(this.supportChip.Id);
                return totalAtkPower = totalAtkPower + Math.floor(effect.value * totalAtkPower);
            } else {
                return totalAtkPower;
            }
        }     
    }     
}
</script>

<style scoped lang="scss">
</style>