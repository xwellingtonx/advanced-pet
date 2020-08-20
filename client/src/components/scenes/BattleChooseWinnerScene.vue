<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g class="hp-bar">
                <rect class="primary-color" x="3" y="64.55" width="76.89" height="7.45" />
                <rect v-for="item in hpBars" 
                    :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />                
            </g>

            <g v-if="currentPlayer !== null" class="standby-face-right" :class="{ 'flip': currentPlayer.currentTurn === 'defense' }">
                <rect class="primary-color" x="2.91" y="2.93" width="77.18" height="59.09" />

                <polygon points="80.56 30.99 80.56 21.94 79.18 21.94 79.18 19.81 79.18 15.98 77.03 15.98 77.03 19.81 77.03 33.23 79.18 33.23 79.18 30.99 80.56 30.99" />
                <rect x="79.18" y="33.23" width="1.37" height="13.48" />
                <polygon points="66.04 51.17 68.26 51.17 68.26 44.45 66.04 44.45 66.04 46.68 63.9 46.68 63.9 51.17 66.04 51.17" />
                <rect x="29.13" y="37.74" width="2.24" height="6.71" />
                <rect x="20.36" y="46.76" width="2.23" height="2.22" />
                <polygon points="59.5 55.36 59.5 51.17 57.28 51.17 57.28 53.15 55.12 53.15 55.12 55.36 57.28 55.36 59.5 55.36" />
                <rect x="68.26" y="55.36" width="2.17" height="2.23" />
                <rect x="61.72" y="55.36" width="2.18" height="2.23" />
                <rect x="66.04" y="57.59" width="2.23" height="2.28" />
                <polygon points="50.73 55.38 48.53 55.38 48.53 57.62 50.73 57.62 50.73 59.87 61.72 59.87 61.72 57.59 50.73 57.59 50.73 55.38" />
                <rect x="63.9" y="59.87" width="2.14" height="2.2" />
                <rect x="44.37" y="2.93" width="15.13" height="2.15" />
                <rect x="59.49" y="5.07" width="4.17" height="2.15" />
                <rect x="63.66" y="7.22" width="2.5" height="2.19" />
                <rect x="68.28" y="7.22" width="4.42" height="2.19" />
                <polygon points="74.8 11.52 74.8 9.59 72.7 9.59 72.7 11.68 74.8 11.68 74.8 15.98 77.03 15.98 77.03 11.52 74.8 11.52" />
                <path d="M77,46.72v2.22H74.82V46.72H72.61V44.45H70.55V40h2.06v4.48h2.21v2.27H77V40H74.82V37.74H77V33.23H74.82v2.26H72.61v2.25H70.55V35.49h2.06V31h2.15V19.81H72.7v-6H70.41V11.51H68.28V9.41H66.16V16H50.82V9.41H48.74V7.22H44.37V5.07H40V7.22h-4.3V9.41H33.66v2.27h2.07v2.15H38v4.31h2.13v4h2.23v6.63h2.23v6.75H42.31V31H40.08V26.54H37.93V22.11h-2.2v-4H33.66V15.81H31.45v-2H29V9.41h4.63V7.22H26.91v8.59H24.78v4H22.55v6.7H20.4V31h2.15v2.25H20.4V31H18.13v9h0v6.71H20.4V42.22h2.19v4.46h2.19V49H27V35.49H24.78V31H22.59V28.74h2.19v-2.2H29v2.2h2.38v4.5h2.15v2.25H31.36v2.25h2.12v6.74h-2.1v2.26h2.1v4.48H31.36v1.92H27V51.22H24.78V49H22.59v2.24H11.82v1.92H16v2.22h6.61v2.22h6.54v2.28H24.78V62h19.7V59.86h-4.4V57.58H37.91V53.14H35.72V37.74h2.19V40h0v6.77h2.15V40h2.23v6.77h2.17V49H42.31v2.24h6.24V44.45h4.38v2.23h4.35v2.24h4.44V46.68H63.9V44.45H66v-2.3h2.22v2.3h2.18V55.36h2.17V53.14H77v-2h2.15V46.72ZM24.78,40v2.18H22.59V40H20.4V35.49h2.19V40Zm15.3-2.23H37.93V35.49h2.15Zm6.57,6.71v2.29H44.54V42.15h2.11ZM68.26,31H52.89V19.81H66.07v2.3h2.19Zm6.56,20.18H72.61V49h2.21Z" />
            </g>              
        </svg>      
    </g>
</template>

<script>
import { TurnTypes, SceneNames } from '../../common/constants';

export default {
    name: "BattleChooseWinnerScene",
    data() {
        return {
            currentPlayer: null,
            hpBars: [
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
            ]
        }
    },
    mounted() {
        this.currentPlayer = this.$store.state.battle.player;
        this.createHPBars(this.currentPlayer);

        this.$socket.client.emit('getPlayersStatus', this.$store.state.battle.id);
    },
    methods: {
        createHPBars(player) {
            var totalHP = parseInt(player.naviStatus.hp) * 10;
            
            if(totalHP > 0 && totalHP < 100) {
                var numberBars = Math.round(totalHP / 10);
                this.hpBars = this.hpBars.slice(0, numberBars);
            } else if( totalHP < 0) {
                this.hpBars = [];
            }
        },
        startAnim(player1, player2) {
            var intervaltime = 500, timeout = 5000;

            setInterval(() => {
                
                if(timeout !== 0) {

                    if(this.currentPlayer.id === player1.id) {
                        this.currentPlayer = player2;
                    }  else {
                        this.currentPlayer = player1;
                    }

                    this.createHPBars(this.currentPlayer);
                    timeout -= intervaltime;

                    //If timeout be sure the currentPlayer is the winner
                    if(timeout === 0) {
                        this.chooseWinner(player1, player2);
                    }
                }
                
            }, intervaltime);
        },
        chooseWinner(player1, player2) {
            if(player1.naviStatus.hp > player2.naviStatus.hp) {
                this.currentPlayer = player1;
            } else {
                this.currentPlayer = player2;
            }
            
            var sceneName = "";

            //If the currentPlayer is equal the session set increment wins + 1
            if(this.currentPlayer.id === this.$store.state.session.id) {
                this.$store.commit('session/incrementWins');
                sceneName = SceneNames.BattleWinner;
            } else {
                this.$store.commit('session/incrementLosses');
                sceneName = SceneNames.BattleLoser;
            }

            this.$socket.client.emit('endBattle', this.$store.state.battle.id);
            this.$store.commit('session/setIsInBattle', false);
            this.$store.commit('session/setCurrentScene', sceneName);
            
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