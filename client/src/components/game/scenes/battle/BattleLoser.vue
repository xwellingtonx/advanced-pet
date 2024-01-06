<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <g class="lose-text" :class="{inverted: toggleColor}" v-if="!canShowNavi">
                <rect class="default-color" width="83" height="75" rx="3.01" ry="3.01" />
                <rect class="primary-color" y="20.32" width="83" height="34.36" />
                <rect class="default-color" x="8.65" y="25.12" width="64.83" height="24.77" />
                <polygon class="primary-color" points="15.24 43.16 15.24 26.92 10.04 26.92 10.04 48.48 15.24 48.48 25.1 48.48 25.1 43.16 15.24 43.16" />
                <path class="primary-color" d="M26.59,26.92V48.48H39.7V26.92Zm9.05,15.51h-5V33h5Z" />
                <polygon class="primary-color" points="55.28 32.04 55.28 26.92 41.52 26.92 41.52 37.4 50.66 37.4 50.66 39.94 50.66 44.46 45.65 44.46 45.65 39.94 41.52 39.94 41.52 48.48 55.28 48.48 55.28 34.57 50.66 34.57 45.65 34.57 45.65 30.04 50.66 30.04 50.66 32.04 55.28 32.04" />
                <polygon class="primary-color" points="57.04 26.92 57.04 48.48 71.59 48.48 71.59 44.86 61.71 44.86 61.71 40.28 68.67 40.28 68.67 35.12 61.71 35.12 61.71 30.53 71.59 30.53 71.59 26.92 57.04 26.92" />
                <polygon class="primary-color" points="56.74 17.38 25.39 17.38 8.65 0 73.48 0 56.74 17.38" />
                <polygon class="primary-color" points="56.74 57.62 25.39 57.62 8.65 75 73.48 75 56.74 57.62" />
            </g>    
            <g class="lose-pose" v-if="canShowNavi">
                <rect width="83" height="75" rx="3.01" ry="3.01" />
                <g v-html="this.loserPose"></g>
            </g>            
        </svg>      
    </g>
</template>

<script>
import { BattleTypes, SceneNames } from '../../../../global/constants';
import { Howl } from 'howler';
import { mapState } from 'vuex'


export default {
    name: "BattleLoser",
    data() {
        return {
            toggleColor: false,
            canShowNavi: false,
            howlSound: null,
            loseTextInterval: null,
            loserPose: ""
        }
    },
    computed: {
        ...mapState({
            battleType: state => state.battle.type,
            deviceType: state => state.session.deviceType
        })
    },
    created() {
        this.loserPose = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/loser-pose.svg`).default;
    },   
    mounted() {
        if(this.$store.state.session.sound) {
            this.howlSound = new Howl({
                src: require("../../../../assets/sounds/lose-battle.mp3"),
                volume: 1,
                loop: true
            });

            this.howlSound.play();
        }

        this.loseTextInterval = setInterval(() => {
            this.toggleColor = !this.toggleColor;
        }, 200);

        setTimeout(() => {
            clearInterval(this.loseTextInterval);
            if(this.howlSound !== null) {
                this.howlSound.stop();
            }
            
            this.showNaviFace();
        }, 4000);
    },
    methods: {   
        // moveToStandByScene() {
        showNaviFace() {
            this.canShowNavi = true;

            setTimeout(() => {
                //Move to battle result scene
                if(this.battleType === BattleTypes.AI) {
                    this.$store.commit('session/setIsInBattle', false);
                    this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
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

    .lose-text {
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