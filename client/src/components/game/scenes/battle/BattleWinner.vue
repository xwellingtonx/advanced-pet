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
                <rect class="primary-color" x="3" y="3" width="77" height="69" />
                <rect class="default-color" x="2.96" y="8.6" width="3.87" height="7.21" />
                <rect class="default-color" x="6.95" y="10.94" width="2.17" height="2.58" />
                <polygon class="default-color" points="6.83 29.96 6.83 27.74 9.12 27.74 9.12 25.19 6.83 25.19 2.96 25.19 2.96 32.21 6.83 32.21 9.12 32.21 9.12 29.96 6.83 29.96" />
                <rect class="default-color" x="9.12" y="27.74" width="2.46" height="2.11" />
                <rect class="default-color" x="9.12" y="22.78" width="2.46" height="2.4" />
                <rect class="default-color" x="9.12" y="39.81" width="2.42" height="2.42" />
                <rect class="default-color" x="6.94" y="42.3" width="2.18" height="2.18" />
                <rect class="default-color" x="9.12" y="44.47" width="2.46" height="2.42" />
                <rect class="default-color" x="9.12" y="49.27" width="2.42" height="2.33" />
                <rect class="default-color" x="9.12" y="54.02" width="2.37" height="2.37" />
                <rect class="default-color" x="9.12" y="58.79" width="2.37" height="2.4" />
                <rect class="default-color" x="9.16" y="63.65" width="2.33" height="2.33" />
                <rect class="default-color" x="9.12" y="68.35" width="2.37" height="2.29" />
                <path class="default-color" d="M40,34.71v-4.6H37.49V25.19H35.21V20.41H32.86V15.75H30.34V13.52H28.05V11.06h4.81V8.54H25.77v7.21H23.33V20.5H21V30H18.64V22.78H16.33V20.5H13.92V18H11.7V13.52H9.12V18H6.83V20.5H3v2.28H9.12V20.5h2.46v2.28h2.34v5h2.36v2.11H13.92v2.36H9.12v2.5H3V72H9.12V70.7H6.83V68.35H9.12V66H6.83V63.65H9V61.18H6.83V58.79H9.12v-2.4H6.83V54H9.12V51.64H6.83V49.27H9.12V46.89H6.83V39.81H9.12V37.57h2.42V34.71h4.74V32.56h2.36V68.22H16.31v2.42H14V72h4.66V70.64H21V66.05h4.72V63.57h2.46V61.1h9.32v2.19H40v4.93H37.49v2.42h-6.9V68.22H28.17V66.08H25.71v2.29h2.46v2.27H25.91V72H61.79V70.64H59.3V68.25H56.9V65.87H54.61V63.29H56.9v2.44h7.18v2.52h2.37v2.39h2.16V72h2.55V68.25H68.83V65.73H66.39V63.29H59.3V61.1H54.61V58.78H45.17V56.4H40V54H35.21V51.6H32.86V39.81H30.34v2.42H28.05v4.66h2.29v2.33H25.71V46.86H23.22V44.5H21V42.16h2.34V44.5h2.44V37.38H23.33v2.43H21V37.38h2.34V34.74H21V32.28h2.34V30h2.44v2.32h2.28v7.53h2.29v-5.1h2.52v5.1h2.35V37.38h2.28V34.71ZM23.22,49.22V51.6H28V54h2.53v4.76H25.71V61.1H23.33v2.43H21V61.1h2.34V58.78h2.38v-2.4H21V49.22Z" />
                <rect class="default-color" x="54.61" y="56.4" width="4.69" height="2.33" />
                <rect class="default-color" x="59.3" y="54.21" width="4.78" height="2.19" />
                <rect class="default-color" x="42.68" y="49.22" width="2.42" height="2.42" />
                <polygon class="default-color" points="52.21 56.4 52.21 54.21 54.61 54.21 54.61 51.64 45.1 51.64 45.1 54.21 47.49 54.21 47.49 56.4 52.21 56.4" />
                <rect class="default-color" x="54.61" y="46.85" width="2.35" height="2.35" />
                <path class="default-color" d="M73.58,22.93V13.52H71V10.94h-7V8.55H59.29v2.39h2.28V15.7h2.51v4.71H52.21V15.75H49.79V11.06H47.44V8.55H59.29V6.27H40V8.54H35.21v2.52H32.86v2.46h2.35v4.57h2.28v4.77H40v4.73h2.73v7.12H40v2.67H37.49v9.51h5.19V44.56H45.1V37.38h2.34v2.43h2.39v2.42h2.38v2.29H57V42.23H59.3v4.66h4.78V42.23H61.69V39.81h2.39v2.38h2.31V37.38h2.39v4.81H66.39v9.45H64.08v2.57h4.7V51.64H71.2V49.4h2.38V46.89H76v-24Zm-30.9,19.3H40V39.81h2.73ZM57,32.41H52.21V25.19H64.08v7.22Zm9.43,2.13V30.11h2.39V15.7H66.39V13.32h2.39V15.7H71V30.11H68.78v4.43Zm7.19,10H71v4.66H68.78V44.56H71V37.38h2.55Z" />
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
            winTextInterval: null
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
                src: require("../../../../assets/sounds/win-battle.mp3"),
                volume: 0.1,
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