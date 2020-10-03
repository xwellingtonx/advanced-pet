<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-if="this.screenContent !== ''" v-html="this.screenContent" :class="{ 'flip': this.isFlip}"/>

            <g id="miss-view" v-if="this.screenContent === ''">
                <rect x="3" y="3" width="77" height="69" />
                <rect class="primary-color" y="0.71" width="18.83" height="2.5" />
                <rect class="primary-color" x="28.91" y="2.79" width="22.08" height="2.52" />
                <rect class="primary-color" x="58.43" y="0.07" width="18.57" height="1.1" />
                <rect class="primary-color" x="36.12" y="64.38" width="19.88" height="2.39" />
                <rect class="primary-color" x="1.52" y="66.72" width="17.32" height="2.35" />
                <polygon class="primary-color" points="76.01 9.91 50.98 9.91 50.98 11.97 16.23 11.97 16.23 9.91 0 9.91 0 19.17 0 21.43 0 52.54 0 52.83 0 60.12 3.27 60.12 4.09 60.12 31.3 60.12 31.3 62.37 39.24 62.37 48.47 62.37 48.55 62.37 77 62.37 77 60.12 77 57.86 77 55.48 77 52.83 77 21.43 77 19.17 77 16.51 77 14.14 77 11.97 77 9.91 76.01 9.91" />
                <rect x="4.09" y="55.48" width="24.94" height="2.38" />
                <rect x="39.24" y="52.82" width="29.2" height="2.65" />
                <rect x="48.55" y="57.86" width="28.45" height="2.26" />
                <rect y="19.17" width="18.83" height="2.26" />
                <rect x="21.49" y="16.51" width="29.49" height="2.66" />
                <rect x="56" y="14.14" width="21" height="2.36" />
                <text class="pet-font" transform="translate(14.96 48.72) scale(0.75 1)">MISS</text>
            </g>   
        </svg>
    </g>
</template>

<script>
import { Howl } from 'howler';
import { SceneNames, BattleTypes, TurnTypes, EnemyTypes } from  '../../../../global/constants'
import { mapState } from 'vuex';

export default {
    name: "BattleAttackMiss",
    computed: {
        ...mapState({
            battleType: state => state.battle.type,
            enemy: state => state.battle.enemy,
            turnType: state => state.battle.turnType
        })      
    },
    data() {
        return {
            screenContent: "",
            isFlip: false
        }
    },
    mounted() {
      
        var sound = new Howl({
            src: require("../../../../assets/sounds/miss-attack.mp3"),
            volume: 0.1,
            loop: true
        });

        if(this.$store.state.session.sound) {
            sound.play();
        }

        if(this.battleType === BattleTypes.AI && this.turnType === TurnTypes.Attack) {
            if(this.enemy.type === EnemyTypes.Virus) {
                this.importVirus(this.enemy.image);
            }
            this.startFlipAnim();
        }
        
        setTimeout(() => {
            this.screenContent = "";
            setTimeout(() => {
                sound.stop();
                this.$store.commit('session/setCurrentScene', SceneNames.BattleAttackDamage);
            }, 1500);
        }, 1500);
    },
    methods: {
        importVirus(image) {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${image}`);
        },
        startFlipAnim() {
            setInterval(() => {
                this.isFlip = !this.isFlip;
            }, 200);
        }
    }
}
</script>

<style scoped lang="scss">
.pet-font {
    font-size:24px;
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