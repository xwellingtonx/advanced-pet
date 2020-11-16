<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
                <rect width="83" height="75" rx="3.01" ry="3.01" />
                <rect class="primary-color" x="3" y="3" width="77" height="69" />
                <text class="pet-font title" transform="translate(5.75 18.33)">Results</text>
                <text class="pet-font" transform="translate(4.83 53.99)">Level</text>
                <text class="pet-font svg-text-right-direction" transform="translate(78 53.99)">{{this.level}}</text>
                <text class="pet-font" transform="translate(4.95 68.1)">Exp</text>
                <text class="pet-font svg-text-right-direction" transform="translate(78 68.1)">{{this.exp}}</text>
                <polygon  points="75.41 28.58 77.29 28.58 77.29 29.5 79.17 29.5 79.17 31.28 77.29 31.28 77.29 32.15 75.41 32.15 75.41 33.93 73.52 33.93 73.52 32.15 73.52 30.39 73.52 30.36 73.52 28.6 73.52 26.82 75.41 26.82 75.41 28.58" />
        </svg>
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events, EnemyTypes } from '../../../../global/constants';
import { mapState } from 'vuex'
import { Howl } from 'howler';

export default {
    name: "StoryResult",
    data () {
        return {
            sound: null
        }
    },
    computed: {
        ...mapState({
            exp: state => state.session.navi.exp,
            level: state => state.session.navi.level,
            enemy: state => state.battle.enemy
        })
    },      
    mounted() {
        EventBus.$on(Events.Right, () => {
           this.$store.commit('session/setCurrentScene', SceneNames.StoryResultDetails);
        });  

        EventBus.$on(Events.Confirmation, () => {
            if(this.sound != null)
                this.sound.stop()
                
            this.$store.commit('session/setIsInBattle', false);

            if(this.enemy.type === EnemyTypes.Virus) {
                this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
            } else if(this.enemy.type === EnemyTypes.Boss) {
                this.$store.commit('session/setCurrentScene', SceneNames.TournamentStageClear);
            }
        });  

        if(this.$store.state.session.sound && this.$store.state.session.lastScene !== SceneNames.StoryResultDetails) {
           this.sound = new Howl({
                src: require("../../../../assets/sounds/ai-battle-result.mp3"),
                volume: 1
            });
            
            this.sound.play();
        }
    },
    beforeDestroy() {
        EventBus.$off(Events.Left);
        EventBus.$off(Events.Confirmation);
    }
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:11px;
        &.title {
            font-size: 13px;
        }
    }
</style>