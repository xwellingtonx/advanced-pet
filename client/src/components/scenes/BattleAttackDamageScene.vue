<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g class="hp-bar">
                <rect class="primary-color" x="3" y="64.55" width="76.89" height="7.45" />
                <rect v-for="item in defenseHPBars" 
                    :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />                
            </g>

            <g class="damage-face" :class="{inverted: toggleColor}" v-if="isAttackHit">
                <rect class="primary-color" x="2.91" y="2.93" width="77.18" height="59.09" />

                <rect class="default-color" x="37.85" y="48.59" width="9.7" height="1.63" />
                <rect class="default-color" x="37.85" y="53.12" width="9.7" height="2.04" />
                <rect class="default-color" x="35.19" y="50.22" width="2.66" height="2.89" />
                <path class="default-color" d="M50.21,50.22H47.55v2.9h2.63v4.15H49.09V55.54H36.25v1.73H35.19V53.12H33.84v6.2h1.32v1.22h1.09v1.53h13V60.54h.88V59.26h1.27V53.12H50.21ZM48,60.54H37.34V57.27H48Z" />
                <polygon class="default-color" points="44.77 40.97 42.77 40.97 42.77 43.27 40.44 43.27 40.44 45.58 42.77 45.58 44.77 45.58 44.77 40.97" />
                <rect class="default-color" x="54.86" y="33.76" width="4.96" height="2.21" />
                <polygon class="default-color" points="50.18 38.24 47.55 38.24 47.55 40.67 59.82 40.67 59.82 38.24 54.86 38.24 54.86 35.97 50.18 35.97 50.18 38.24" />
                <rect class="default-color" x="12.67" y="38.25" width="2.05" height="7.33" />
                <rect class="default-color" x="14.72" y="45.58" width="2.75" height="2.05" />
                <rect class="default-color" x="5.56" y="32.02" width="1.92" height="10.62" />
                <rect class="default-color" x="7.87" y="42.63" width="1.78" height="5.4" />
                <rect class="default-color" x="10.46" y="48.03" width="1.89" height="2.19" />
                <polygon class="default-color" points="27.55 57.27 25.1 57.27 25.1 54.74 25.1 52.82 22.19 52.82 22.19 46.06 20.7 46.06 20.7 48.59 17.33 48.59 17.33 50.48 20.7 50.48 20.7 52.82 15.4 52.82 15.4 50.22 13.12 50.22 13.12 52.82 8.19 52.82 8.19 54.74 3.64 54.74 3.64 57.27 10.46 57.27 10.46 59.61 19.01 59.61 19.01 62.08 31.2 62.08 31.2 59.61 27.55 59.61 27.55 57.27" />
                <rect class="default-color" x="55.72" y="60.54" width="2.31" height="1.54" />
                <rect class="default-color" x="58.03" y="57.27" width="2.34" height="2.34" />
                <polygon class="default-color" points="64.66 50.22 67.54 50.22 67.54 48.17 64.66 48.17 64.66 45.15 62.93 45.15 62.93 52.59 60.37 52.59 60.37 53.78 60.37 54.74 60.37 57.27 63.28 57.27 63.28 54.74 70.26 54.74 70.26 52.59 64.66 52.59 64.66 50.22" />
                <rect class="default-color" x="70.26" y="49.81" width="1.86" height="2.79" />
                <rect class="default-color" x="67.54" y="45.58" width="2.13" height="2.13" />
                <rect class="default-color" x="69.67" y="38.25" width="1.81" height="7.33" />
                <rect class="default-color" x="74.94" y="44.42" width="2.11" height="2.57" />
                <rect class="default-color" x="72.82" y="46.99" width="2.1" height="2.82" />
                <rect class="default-color" x="77.05" y="32.32" width="2.31" height="11.34" />
                <rect class="default-color" x="73.87" y="27.2" width="2.12" height="4.82" />
                <path class="default-color" d="M70.57,17.33V6.82h-4V8.68H68.6v7.21H66.82v7.34h-3v3.84h-2v2.54H59.08V22.07h2.09V18.23h2.62v-7.5h2.74V8.68H63.79V6.82H60.86V4.31H58V3H52.52V9.13H31.2V3h-9V4.6H20V6.79H18.21V9.13H16.65v2h3.13v6.73h2.41v4.61h2.3v7.09h-2.3V27.2H19.66V22.9H17.48v-7H14.26V9.13h2.39V7.46h-4.3V18.23H10v8H7.48V32H10V28.67h2.37V36h3.21v2.28h1.92v7.07h2.18V36H17.48V32h0v2.16h2.17V32H30v1.64H25.07v2.21h5V33.76H34.7v2.11H30v2.27h-5v2.42H37.34V38.14H34.71V36h5.73v2.28h4.33V36h5.41V33.76h4.68V32h12V36.5H64.66v8.65h2.16v-6.9H68.6V36h2.88V29.12h1.86V17.33Zm-18,6.15H31.2V12.33H52.52Z" />
            </g>

            <g class="standby-face-right" v-if="!isAttackHit" :class="{ 'flip': turnType === 'defense' }">
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
import { SceneNames, TurnTypes } from '../../common/constants';
import { mapState } from 'vuex'

export default {
    name: "BattleAttackDamageScene",
    data() {
        return {
            toggleColor: false,
            defenseHPBars: [
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
    computed: {
        ...mapState({
            turnType: state => state.battle.turnType,
            isAttackHit: state => state.battle.isAttackHit
        })
    },    
    mounted() {
        this.$socket.client.emit('getPlayersStatus', this.$store.state.battle.id);

        setInterval(() => {
            this.toggleColor = !this.toggleColor;
        }, 200);

        setTimeout(() => {
            this.changeTurnRequest();
        }, 1000);
    },
    sockets: {
        playersStatus(attackPlayer, defensePlayer) {
            //Show the status of defense player since received the damage
            console.log("defense hp:" + defensePlayer.naviStatus.hp);
            var totalHP = parseInt(defensePlayer.naviStatus.hp) * 10;
            
            if(totalHP > 0 && totalHP < 100) {
                var numberBars = Math.round(totalHP / 10);
                this.defenseHPBars = this.defenseHPBars.slice(0, numberBars);

            } else if( totalHP < 0) {
                this.defenseHPBars = [];
            }
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

            if(this.defenseHPBars.length === 0) {
                //End game and move to winner/lose screen
                console.log("End game and move to winner/lose screen");
            } else if(this.$store.state.battle.currentTurn === 5) {
                //choose winner
                console.log("choose winner");
            } else {
                this.$socket.client.emit('changeTurnRequest', this.$store.state.battle.id);
            }
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

    .damage-face {
        &.inverted {
            .primary-color {
                fill: $default-fill;
            }
            .default-color {
                fill: $primary-fill; 
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