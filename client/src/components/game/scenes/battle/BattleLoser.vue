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
                <rect class="primary-color" x="3" y="3" width="77" height="69" />
                <rect class="default-color" x="20.77" y="70.68" width="6.18" height="1.32" />
                <polygon class="default-color" points="37.27 70.68 37.27 68.52 37.27 66.41 35.21 66.41 35.21 68.52 33.14 68.52 33.14 70.68 37.27 70.68" />
                <polygon class="default-color" points="22.93 68.52 22.93 66.43 24.88 66.43 24.88 64.39 26.95 64.39 26.95 60.25 26.95 58.18 26.95 56.13 26.95 54.07 26.95 52 24.88 52 24.88 54.07 22.83 54.07 22.83 56.13 24.88 56.13 24.88 58.18 22.83 58.18 22.83 60.25 20.77 60.25 20.77 62.45 18.79 62.45 18.79 60.25 20.77 60.25 20.77 58.18 18.75 58.18 18.75 60.25 16.59 60.25 16.59 62.45 14.57 62.45 14.57 68.52 16.59 68.52 16.59 70.68 20.77 70.68 20.77 68.52 22.93 68.52" />
                <polygon class="default-color" points="29.1 68.52 26.95 68.52 26.95 70.68 31.25 70.68 31.25 68.52 33.14 68.52 33.14 66.41 29.1 66.41 29.1 68.52" />
                <rect class="default-color" x="20.77" y="56.13" width="2.05" height="2.05" />
                <polygon class="default-color" points="56.04 64.39 58.12 64.39 58.12 66.43 60.2 66.43 60.2 68.52 62.25 68.52 62.25 70.68 60.2 70.68 60.2 68.52 56.04 68.52 56.04 70.68 49.95 70.68 49.95 72 64.3 72 64.3 70.68 64.3 68.52 64.3 66.41 62.23 66.41 62.23 64.39 60.2 64.39 60.2 62.23 58.12 62.23 58.12 56.13 56.04 56.13 56.04 64.39" />
                <rect class="default-color" x="52.02" y="52" width="4.02" height="2.08" />
                <rect class="default-color" x="49.95" y="47.82" width="8.17" height="2" />
                <path class="default-color" d="M66.37,37.37V31.12H64.25v2h-4v-4h2v2h2V26.91h-2V25h-2V22.92H58.09v-2H56V14.79H53.9v8.13H56v6.22h2.08V25h2v4.11h-2v2H56v-2H53.9v2H52v-2H50v4H47.82v-4H50V22.92H52V14.79H53.9V12.54H52V10.65h-4.2V8.39H35.16v2.26H31.07v1.89h-2v2.25h2v8.13h2.07v6.22h2v4.11h-2V29.14H31.07v2h-2v2.13h2v4.12h-2v4.31H27V39.43H24.88v8.39H22.83V52h2.05v-4.1H27V45.83h6.18V41.68h2V39.43h2.12V37.37h8.49v2.06H37.28v2.25h4.18v2.11H37.28V41.68H35.16v4.15h-2v2.06h2V52h-2V49.91H27V52h4.11v2.3h2.07v7.94h-4v2.16h4v2h2v-2h4.27V62.23h4.36v2.16h2v2h2v4.25H50V66.43H52v-2h2V62.23H52v-4H50V49.82H47.82v-4h-2V50h-2v2h2v2.08h2v2.06h-2V54.07h-2V52H41.46V45.83h2.33V41.68h2v2.11h2v2H50V44h8.17v2H60.2v3.83H58.12v6.31H60.2V52h2V50h2V48h-2V43.79h-2V39.43H58.12v2.29H52V39.43H50v2.25H47.9V39.43H50V37.37H56v2.06h2.08V37.37h4.13v2.15h2v8.3h2.12V46h2.06V37.37ZM39.26,45.83v2.06h-2V45.83Zm-2,6.16V50.11h2V52Zm0-41.34h8.49V25h-2v2H39.26V25h-2V10.65Zm8.49,22.6h-2v2.06H39.26V33.25h-2V31.19h8.49v2.06Z" />
                <polygon class="default-color" points="29.1 37.37 29.1 35.27 24.88 35.27 24.88 31.12 22.83 31.12 22.83 39.43 24.88 39.43 24.88 37.37 29.1 37.37" />
                <polygon class="default-color" points="29.1 31.12 29.1 29.14 26.99 29.14 26.99 22.97 29.1 22.97 29.1 14.79 26.95 14.79 26.95 20.86 24.88 20.86 24.88 31.12 26.99 31.12 29.1 31.12" />
                <rect class="default-color" x="29.1" y="22.97" width="1.97" height="6.16" />
                <rect class="default-color" x="52.02" y="22.92" width="1.88" height="6.22" />
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
            loseTextInterval: null
        }
    },
    computed: {
        ...mapState({
            battleType: state => state.battle.type,
        })
    },      
    mounted() {
        if(this.$store.state.session.sound) {
            this.howlSound = new Howl({
                src: require("../../../../assets/sounds/lose-battle.mp3"),
                volume: 0.1,
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