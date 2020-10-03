<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />

            <g v-if="this.battleType === 'ai' && this.currentCharacter !== null && this.currentCharacter.type !== 'player'" v-html="this.screenContent" />

            <g v-if="this.battleType === 'ai' && this.currentCharacter !== null && this.currentCharacter.type === 'player'" v-html="this.screenContent" class="flip" />

            <g v-if="this.battleType !== 'ai' && this.currentCharacter !== null" class="standby-face-right" :class="{ 'flip': currentCharacter.currentTurn === 'defense' }">
            </g>    

            <g class="hp-bar">
                <rect x="2.91" y="62.02" width="77.18" height="9.98" />
                <rect class="primary-color" x="3" y="64.55" width="77.18" height="7.45" />
                <rect v-for="item in hpBars" 
                    :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />                
            </g>          
        </svg>      
    </g>
</template>

<script>
import { TurnTypes, SceneNames, BattleTypes, EnemyTypes } from '../../../../global/constants';
import { mapState } from 'vuex'

export default {
    name: "BattleChooseWinner",
    data() {
        return {
            currentCharacter: null,
            allHPBars: [
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
            hpBars: [],
            screenContent: ""
        }
    },
    computed: {
        ...mapState({
            turnType: state => state.battle.turnType,
            battleType: state => state.battle.type,
            enemy: state => state.battle.enemy,
            player: state => state.battle.player,
            currentTurn: state => state.battle.currentTurn,
            deviceType: state => state.session.deviceType
        })
    },  
    mounted() {
        if(this.battleType === BattleTypes.AI) {
            if(this.turnType === TurnTypes.Attack) {
                this.currentCharacter = this.player;
                this.createUI();
            } else {
                this.currentCharacter = this.enemy;
                this.createUI();
            }
            this.startAnim(this.player, this.enemy);
        } else {
            this.currentCharacter = this.player;
            this.createUI();

            this.$socket.client.emit('getPlayersStatus', this.$store.state.battle.id);
        }
    },
    methods: {
        createHPBars(player) {
            var totalHP = parseInt(player.hp) * 10;
            if(totalHP > 0 && totalHP < 100) {
                var numberBars = Math.round(totalHP / 10);
                console.log(numberBars);

                this.hpBars = this.allHPBars.slice(0, numberBars);
            } else if( totalHP < 0) {
                this.hpBars = [];
            }
        },
        startAnim(character1, character2) {
            var intervaltime = 750, timeout = 4000, interval = null;  

            interval = setInterval(() => {
                if(timeout !== 0) {
                    
                    if(this.battleType === BattleTypes.AI) {
                        if(this.currentCharacter.type === character1.type) {
                            this.currentCharacter = character2;
                        }  else {
                            this.currentCharacter = character1;
                        }
                    } else {
                         if(this.currentCharacter.sessionId === character1.sessionId) {
                            this.currentCharacter = character2;
                        }  else {
                            this.currentCharacter = character1;
                        }                       
                    }

                    this.createUI();
                    timeout -= intervaltime;

                    //If timeout be sure the currentCharacter is the winner 
                    if(timeout <= 0) {
                        clearInterval(interval);
                        this.chooseWinner(character1, character2);
                    }
                }
                
            }, intervaltime);
        },
        chooseWinner(character1, character2) {
            if(character1.hp > character2.hp) {
                this.currentCharacter = character1;
            } else {
                this.currentCharacter = character2;
            }
            
            var sceneName = "";

            if(this.battleType === BattleTypes.AI) {
                if(this.currentCharacter.type === EnemyTypes.Player) {
                    sceneName = SceneNames.BattleWinner;
                    this.$store.commit('session/levelup');
                    //Need include the stage clear
                } else {
                    sceneName = SceneNames.BattleLoser;

                    if(this.currentCharacter.type === EnemyTypes.Boss) {
                        this.$store.commit('session/decrementStageClear', 10);
                    } else {
                        this.$store.commit('session/decrementNaviRecovery', 100);
                    }
                }
            } else {
                //If the currentCharacter is equal the session set increment wins + 1
                if(this.currentCharacter.sessionId === this.$store.state.session.id) {
                    this.$store.commit('session/incrementWins');
                    sceneName = SceneNames.BattleWinner;
                } else {
                    this.$store.commit('session/incrementLosses');
                    sceneName = SceneNames.BattleLoser;
                }

                this.$socket.client.emit('endBattle', this.$store.state.battle.id);
            }

            this.$store.commit('session/setCurrentScene', sceneName);
        },
        importRightFace() {
            this.screenContent =  require(`!html-loader!../../../../assets/svgs/players/${(this.deviceType.toLowerCase())}/right-face.svg`);
        },
        importVirus() {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${this.enemy.image}`);
        },
        importBoss() {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/bosses/${this.enemy.image}`);
        },
        createUI() {
            if(this.currentCharacter.type === EnemyTypes.Player) {
                this.importRightFace();
            } else if(this.currentCharacter.type === EnemyTypes.Virus) {
                this.importVirus();
            } else {
                this.importBoss();
            }

            this.createHPBars(this.currentCharacter);
        }
    },
    sockets: {
        playersStatus(attackPlayer, defensePlayer) {
            attackPlayer.currentTurn = TurnTypes.Attack;
            defensePlayer.currentTurn = TurnTypes.Defense;

            this.startAnim(attackPlayer, defensePlayer);
        }
    }    
}
</script>

<style scoped lang="scss">
    $primary-fill: #fff;
    $default-fill: #000;

    .primary-color {
        fill: $primary-fill;    
    } 

    .default-color {
        fill: $default-fill;    
    }

    .flip{ 
        -webkit-transform:scaleX(-1);
        -moz-transform:scaleX(-1);
        -o-transform:scaleX(-1);
        -ms-transform:scaleX(-1);
        transform:scaleX(-1);

        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -o-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
    }
</style>