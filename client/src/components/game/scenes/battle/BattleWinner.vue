<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">

            <g class="win-text" :class="{inverted: toggleColor}" v-if="!canShowNaviFace">
                <rect class="default-color" width="83" height="75" rx="3.01" ry="3.01" />
                <rect class="primary-color" y="5.78" width="83" height="6.18" />
                <path class="primary-color" d="M.42,73.5A3,3,0,0,0,3,75H80a3,3,0,0,0,2.58-1.5Z" />
                <rect class="primary-color" y="63.04" width="83" height="6.18" />
                <rect class="primary-color" y="53.73" width="83" height="5.71" />
                <rect class="primary-color" y="16.06" width="83" height="34.36" />
                <polygon class="default-color" points="64.31 20.85 64.31 23.9 64.31 27.34 61.34 27.34 61.34 23.9 58.97 23.9 58.97 20.85 27.92 20.85 27.92 23.9 24.44 23.9 24.44 26.2 20.85 26.2 20.85 23.9 17.33 23.9 17.33 20.85 8.65 20.85 8.65 45.62 17.33 45.62 17.33 43.96 19.95 43.96 19.95 42.01 24.48 42.01 24.48 43.96 27.92 43.96 27.92 45.62 58.97 45.62 58.97 42.24 58.97 38.56 61.34 38.56 61.34 42.24 63.99 42.24 63.99 45.62 73.48 45.62 73.48 20.85 64.31 20.85" />
                <polygon class="primary-color" points="29.72 35.17 27.37 35.17 27.37 31.21 24.68 31.21 24.68 28.51 21.03 28.51 21.03 31.21 18.34 31.21 18.34 35.3 15.98 35.3 15.98 22.65 10.04 22.65 10.04 44.05 15.98 44.05 15.98 41.99 18.34 41.99 18.34 38.64 21.03 38.64 21.03 36.48 24.68 36.48 24.68 38.64 27.37 38.64 27.37 41.87 29.72 41.87 29.72 44.22 35.66 44.22 35.66 22.82 29.72 22.82 29.72 35.17" />
                <rect class="primary-color" x="39.96" y="22.82" width="5.94" height="21.4" />
                <polygon class="primary-color" points="65.65 22.82 65.65 32.68 63.12 32.68 63.12 30.53 60.5 30.53 60.5 28.05 57.97 28.05 57.97 25.72 55.35 25.72 55.35 22.82 49.41 22.82 49.41 44.22 55.35 44.22 55.35 31.71 57.97 31.71 57.97 34.03 60.5 34.03 60.5 36.51 63.12 36.51 63.12 38.67 65.65 38.67 65.65 44.22 71.59 44.22 71.59 22.82 65.65 22.82" />
            </g>

            <g class="winner-face" v-if="canShowNaviFace">
                <rect width="83" height="75" rx="3.01" ry="3.01" />
                <g v-html="this.winnerPose"></g>
            </g>            
        </svg>      
    </g>
</template>

<script>
import { BattleTypes, SceneNames } from '../../../../global/constants';
import { Howl } from 'howler';
import { mapState } from 'vuex'

export default {
    name: "BattleWinner",
    data() {
        return {
            toggleColor: false,
            canShowNaviFace: false,
            howlSound: null,
            winTextInterval: null,
            winnerPose: ""
        }
    },
    computed: {
        ...mapState({
            battleType: state => state.battle.type,
            deviceType: state => state.session.deviceType
        })
    },  
    created() {
        this.winnerPose = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/winner-pose.svg`).default;
    },
    mounted() {
        if(this.$store.state.session.sound) {
            this.howlSound = new Howl({
                src: require("../../../../assets/sounds/win-battle.mp3"),
                volume: 1,
                loop: true
            });

            this.howlSound.play();
        }

        this.winTextInterval = setInterval(() => {
            this.toggleColor = !this.toggleColor;
        }, 200);

        setTimeout(() => {
            clearInterval(this.winTextInterval);
            if(this.howlSound !== null) {
                this.howlSound.stop();
            }
            this.showNaviFace();
        }, 4000);
    },
    methods: {   
        // moveToStandByScene() {
        showNaviFace() {
            this.canShowNaviFace = true;

            setTimeout(() => {
                //Move to battle result scene
                if(this.battleType === BattleTypes.AI) {
                    this.$store.commit('session/setCurrentScene', SceneNames.StoryResult);
                } else {
                    this.$store.commit('session/setCurrentScene', SceneNames.VersusResult);
                }
            }, 1500);
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

    .win-text {
        &.inverted {
            .primary-color {
                fill: $default-fill;
            }
            .default-color {
                fill: $primary-fill; 
            }
        }     
    }
</style>