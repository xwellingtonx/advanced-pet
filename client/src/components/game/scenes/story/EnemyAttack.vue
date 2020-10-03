<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-html="this.screenContent" />

            <rect class="default-color" x="2.91" y="2.93" width="77.18" height="17.67" />
            <text class="primary-color pet-font" transform="translate(10.95 18.26)">Attack</text>
        </svg>
    </g>
</template>

<script>
import { EnemyTypes, Events, SceneNames } from  '../../../../global/constants'
import { mapState } from 'vuex';
import EventBus from '../../../../global/eventBus.js';

export default {
    name: "EnemyAttack",
    computed: {
        ...mapState({
            enemy: state => state.battle.enemy
        })      
    },
    data() {
        return {
            screenContent: "",
            fireTimeout: null
        }
    },
    mounted() {
        EventBus.$on(Events.Confirmation, this.onConfirmation);

        this.importVirus(this.enemy.image);

        this.fireTimeout = setTimeout(() => {
            this.onConfirmation();
        }, 3000);
    },
    beforeDestroy() {
        EventBus.$off(Events.Confirmation);
    },
    methods: {
        onConfirmation() {
            if(this.fireTimeout !== null) {
                clearTimeout(this.fireTimeout);
            }

            var hitPercentage = 0;
            if(this.enemy.type === EnemyTypes.Virus) {
                hitPercentage = (35 + (10 * this.enemy.level)) / 100;
            } else if(this.enemy.type === EnemyTypes.Navi) {
                hitPercentage = 0.75;
            }
            
            //Returns a number between 0 and 1
            var num = Math.random();
            if(num <= hitPercentage) {
                this.$store.commit('battle/setPlayerHit', parseInt(this.enemy.at));
                this.$store.commit('battle/setIsAttackHit', true);
                
            } else {
                this.$store.commit('battle/setIsAttackHit', false);
            }

            this.$store.commit('session/setCurrentScene', SceneNames.BattleFireAttack);
        },
        importVirus(image) {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${image}`);
        }
    }
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:13px;
    }
</style>