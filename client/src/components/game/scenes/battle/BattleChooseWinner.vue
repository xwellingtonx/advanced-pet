<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />

            <g v-if="this.battleType === 'ai' && this.currentCharacter !== null && this.currentCharacter.type !== 'player'" v-html="this.screenContent" />

            <g v-if="this.battleType === 'ai' && this.currentCharacter !== null && this.currentCharacter.type === 'player'" v-html="this.screenContent" class="flip" />

            <g v-if="this.battleType !== 'ai' && this.currentCharacter !== null" class="standby-face-right" :class="{ 'flip': currentCharacter.currentTurn === 'defense' }">
            </g>    

            <health-status ref="hpBar" />
        </svg>      
    </g>
</template>

<script>
import { TurnTypes, SceneNames, BattleTypes, EnemyTypes } from '../../../../global/constants';
import { mapState, mapGetters } from 'vuex'
import HealthStatus from '../../ui/HealthStatus'

export default {
    name: "BattleChooseWinner",
    components: {
        HealthStatus
    },    
    data() {
        return {
            currentCharacter: null,
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
            deviceType: state => state.session.deviceType,
            sessionId: state => state.session.id
        }),
        ...mapGetters({
            enemyDamageActions: 'battle/getAllEnemyDamageActions',
            playerDamageActions: 'battle/getAllPlayerDamageActions'
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
        createHPBars(character) {
            var damages = null;
             if(this.currentCharacter.type === EnemyTypes.Player) {
                 if(this.currentCharacter.sessionId === this.sessionId) {
                    damages = this.playerDamageActions;
                 } else {
                    damages = this.enemyDamageActions;
                 }
            } else if(this.currentCharacter.type === EnemyTypes.Virus) {
                damages = this.enemyDamageActions;
            } 

            this.$refs.hpBar.updateHealth(character.hp, damages);
        },
        startAnim(character1, character2) {
            var intervaltime = 750, timeout = 4000, interval = null;  

            interval = setInterval(() => {
                if(timeout <= 0) {
                    //If timeout be sure the currentCharacter is the winner 
                    clearInterval(interval);
                    this.chooseWinner(character1, character2);
                } else if(timeout > 0) {
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