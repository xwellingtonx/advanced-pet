<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94" :class="{'color-inverted': isColorInverted}">
            <rect class="default-color" width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" x="16.52" y="61.13" width="50.4" height="2.29" />
            <polygon class="primary-color" points="80 3 80 8.81 3 8.81 3 9 3 9 3 63.42 13.81 63.42 13.81 61.13 4.67 61.13 4.67 11.29 13.81 11.29 13.81 8.83 16.52 8.83 16.52 11.29 66.92 11.29 66.92 8.83 69.64 8.83 69.64 11.29 78.33 11.29 78.33 61.13 69.64 61.13 69.64 63.42 80 63.42 80 9 80 9 80 6.67 80 3 80 3" />
            <rect class="primary-color" x="71.21" y="3" width="2.42" height="3.67" />
            <rect class="primary-color" x="76.25" y="3" width="3.75" height="3.67" />
            <rect class="primary-color" x="9.38" y="3" width="2.42" height="3.67" />
            <rect class="primary-color" x="3" y="3" width="3.75" height="3.67" />
            <polygon class="primary-color" points="59.17 3 59.17 4.17 22.33 4.17 22.33 3 14.13 3 14.13 6.67 68.88 6.67 68.88 3 59.17 3" />
            <rect class="primary-color" x="6.94" y="12.9" width="4.87" height="4.88" />
            <rect class="primary-color" x="6.94" y="54.13" width="4.87" height="4.88" />
            <rect class="primary-color" x="71.15" y="12.9" width="4.87" height="4.88" />
            <rect class="primary-color" x="71.15" y="54.13" width="4.87" height="4.88" />
            <text class="primary-color pet-font" transform="translate(11.43 34.5) scale(0.89 1)">Battle<tspan x="5.73" y="20.27">Start</tspan></text>
            <polygon class="primary-color" points="3 65.78 3 68.42 6.09 68.42 6.09 71.94 3 71.94 3 71.97 9.19 71.97 9.19 65.78 3 65.78" />
            <polygon class="primary-color" points="73.82 65.75 73.82 71.94 76.91 71.94 76.91 68.42 80 68.42 80 65.75 73.82 65.75" />
            <polygon class="primary-color" points="45.98 65.75 45.98 67.69 44.31 67.69 44.31 65.75 42.33 65.75 42.33 67.69 40.67 67.69 40.67 65.75 38.69 65.75 38.69 67.69 37.02 67.69 37.02 65.75 12.15 65.75 12.15 71.94 14.63 71.94 14.63 67.69 34.38 67.69 34.38 69.59 48.63 69.59 48.63 67.69 68.38 67.69 68.38 71.94 70.86 71.94 70.86 65.75 45.98 65.75" />
            <rect class="primary-color" x="18.42" y="70.29" width="3.21" height="0.9" />
            <rect class="primary-color" x="28.42" y="70.29" width="3.21" height="0.9" />
            <rect class="primary-color" x="23.42" y="70.29" width="3.21" height="0.9" />
            <rect class="primary-color" x="52.32" y="70.29" width="3.21" height="0.9" />
            <rect class="primary-color" x="62.32" y="70.29" width="3.21" height="0.9" />
            <rect class="primary-color" x="57.32" y="70.29" width="3.21" height="0.9" />
        </svg>      
    </g>
</template>

<script>
import { Events, SceneNames } from '../../../../global/constants';
import { mapState } from 'vuex';
import { BattleTypes } from '../../../../global/constants';
import { Howl } from 'howler';
import EventBus from '../../../../global/eventBus';

export default {
    name: "BattleStart",
    computed: {
        ...mapState({
            battleType: state => state.battle.type
        })      
    }, 
    data() {
        return {
            isColorInverted: false,
            timeOut: null,
            sound: null
        }
    },
    mounted() {
        EventBus.$on(Events.Confirmation, this.moveToRoulette);
        
        if(this.battleType === BattleTypes.AI) {
            if(this.$store.state.session.sound) {
                this.sound = new Howl({
                    src: require("../../../../assets/sounds/battle-start.mp3"),
                    volume: 0.5,
                    loop: true
                });
                
                this.sound.play();
            }

            this.playerColorAnim();
        }

        this.timeOut = setTimeout(() => {
            this.moveToRoulette();
        }, 3500);
    },
    methods: {
        playerColorAnim() {
            setInterval(() => {
                this.isColorInverted = !this.isColorInverted;
            }, 200);
        },
        moveToRoulette() {
            if(this.sound !== null) {
                this.sound.stop();
            }

            if(this.timeOut !== null) {
               clearTimeout(this.timeOut);
            }

            this.$store.commit('session/setCurrentScene', SceneNames.Roulette);
        }  
    }   
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:14.59px;
    }

    $primary-fill: #fff;
    $default-fill: #000;

    .color-inverted {
        .primary-color {
            fill: $default-fill;
        }
        .default-color {
            fill: $primary-fill; 
        }
    }     
</style>