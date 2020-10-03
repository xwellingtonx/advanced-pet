<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-if="this.battleType === 'ai' && this.turnType === 'attack'" v-html="this.screenContent" />
            
            <g v-if="(this.battleType === 'ai' && this.turnType === 'defense') || this.battleType === 'player'" >
                <g v-html="this.screenContent" v-if="isAttackHit" :class="{ 'inverted': this.toggleColor }">
                </g>

                <g class="standby-face-right" v-if="!isAttackHit" v-html="this.screenContent" :class="{ 'flip': turnType === 'defense' }">
                </g>  
            </g>

            <health-status ref="hpBar" />
        </svg>      
    </g>
</template>

<script>
import { BattleTypes, EnemyTypes, SceneNames, TurnTypes } from '../../../../global/constants.js';
import { mapState, mapGetters } from 'vuex';
import HealthStatus from '../../ui/HealthStatus'


export default {
    name: "BattleAttackDamage",
    components: {
        HealthStatus
    },
    data() {
        return {
            toggleColor: false,
            defPlayer: null,
            screenContent: ""
        }
    },
    computed: {
        ...mapState({
            turnType: state => state.battle.turnType,
            isAttackHit: state => state.battle.isAttackHit,
            battleType: state => state.battle.type,
            deviceType: state => state.session.deviceType,
            enemy: state => state.battle.enemy,
            player: state => state.battle.player,
            currentTurn: state => state.battle.currentTurn
        }),
        ...mapGetters({
            enemyDamageActions: 'battle/getAllEnemyDamageActions',
            playerDamageActions: 'battle/getAllPlayerDamageActions'

        })
    },    
    mounted() {
        if(this.turnType === TurnTypes.Attack) {
            if(this.enemy.type === EnemyTypes.Virus) {
                this.importVirus();
                this.showHPStatus(this.enemy.hp, this.enemyDamageActions);
            } else if (this.enemy.type === EnemyTypes.Boss) {
                //TODO: Import Boss sprite
                //Boss
                this.showHPStatus(this.enemy.hp, this.enemyDamageActions);
            } else {
                //player
                this.showPlayerScreens(this.enemy.name)
            }
        } else {
            this.showPlayerScreens(this.deviceType);
            this.showHPStatus(this.player.hp, this.playerDamageActions);
        }

        setTimeout(() => {
            this.changeTurnRequest();
        }, 2000);
    },
    sockets: {
        playersStatus(attackPlayer, defensePlayer) {
            this.defPlayer = defensePlayer;
            this.showHPStatus(defensePlayer.naviStatus.hp)
        },
        changeTurn(turnType) {
            var sceneName = "";

            if(turnType === TurnTypes.Attack) {
                this.$store.commit('battle/setTurnType', TurnTypes.Attack);
                sceneName = SceneNames.SlotIn;
            } else {
                this.$store.commit('battle/setTurnType', TurnTypes.Defense);
                sceneName = SceneNames.LoadingNow;
            }

            this.$store.commit('session/setCurrentScene', sceneName);
        }
    },
    methods: {
        changeTurnRequest() {
            this.$store.commit('battle/clearChips');

            if(this.$refs.hpBar.getHealth() === 0) {
                //End game and move to winner/lose screen
                var sceneName = "";

                if(this.battleType === BattleTypes.AI) {
                    if(this.turnType === TurnTypes.Attack) {
                        sceneName = SceneNames.BattleWinner;
                        this.$store.commit('session/levelup');
                        //Need include the stage clear
                    } else {
                        sceneName = SceneNames.BattleLoser;

                        if(this.enemy.type === EnemyTypes.Boss) {
                            this.$store.commit('session/decrementStageClear', 10);
                        } else {
                            this.$store.commit('session/decrementNaviRecovery', 100);
                        }
                    }
                } else {
                    if(this.defPlayer.id === this.$store.state.session.id) {
                        this.$store.commit('session/incrementLosses');
                        sceneName = SceneNames.BattleLoser;
                    } else {
                        this.$store.commit('session/incrementWins');
                        sceneName = SceneNames.BattleWinner;
                    }

                    this.$socket.client.emit('endBattle', this.$store.state.battle.id);
                }
                
                this.$store.commit('session/setCurrentScene', sceneName);

            } else if(this.currentTurn == 5) {
                //Choose winner
                this.$store.commit('session/setCurrentScene', SceneNames.BattleChooseWinner);
            } else {
                this.$store.commit('battle/setCurrentTurn', this.currentTurn + 1);

                if(this.battleType === BattleTypes.AI) {
                    if(this.turnType === TurnTypes.Attack) {
                        this.$store.commit('battle/setTurnType', TurnTypes.Defense);
                        this.$store.commit('session/setCurrentScene', SceneNames.EnemyAttack);
                    } else {
                        this.$store.commit('battle/setTurnType', TurnTypes.Attack);
                        this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
                    }
                } else {
                    this.$socket.client.emit('changeTurnRequest', this.$store.state.battle.id);
                }
            }
        },
        importDamageFace(deviceType) {
            this.screenContent =  require(`!html-loader!../../../../assets/svgs/players/${(deviceType.toLowerCase())}/damage-face.svg`);
        },
        importRightFace(deviceType) {
            this.screenContent =  require(`!html-loader!../../../../assets/svgs/players/${(deviceType.toLowerCase())}/right-face.svg`);
        },
        importVirus() {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${this.enemy.image}`);
        },
        showPlayerScreens(deviceType) {
            this.$socket.client.emit('getPlayersStatus', this.$store.state.battle.id);

            if(this.isAttackHit) {
                this.importDamageFace(deviceType);

                setInterval(() => {
                    this.toggleColor = !this.toggleColor;
                }, 200);
            } else {
                this.importRightFace(deviceType);
            }
        },
        showHPStatus(hp, damages) {
            this.$refs.hpBar.updateHealth(hp, damages);
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

    .inverted ::v-deep {
        #damageFace {
          .primary-color {
              fill: $default-fill !important;
          }
          .default-color {
              fill: $primary-fill !important; 
          }
        }     
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