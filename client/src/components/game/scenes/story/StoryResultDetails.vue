<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" x="3" y="3" width="77" height="69" />
                        <text class="pet-font" transform="translate(4.89 29.55)">Turns</text>
            <text class="pet-font svg-text-right-direction" transform="translate(78 29.55)">{{this.battleTurns}}</text>
            <text class="pet-font" transform="translate(4.9 48.33)">AT-T</text>
            <text class="pet-font svg-text-right-direction" transform="translate(78 48.33)">1</text>
            <text class="pet-font" transform="translate(4.9 68.1)">DF-T</text>
            <text class="pet-font svg-text-right-direction" transform="translate(78 68.1)">10</text>
            <polygon points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18" />

        </svg>
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events } from '../../../../global/constants';
import { mapState } from 'vuex'

export default {
    name: "StoryResult",
    mounted() {
      EventBus.$on(Events.Left, () => {
           this.$store.commit('session/setCurrentScene', SceneNames.StoryResult);
      });  
        
    },
    computed: {
        ...mapState({
            battleTurns: state => state.battle.currentTurn,
        })
    },      
    beforeDestroy() {
        EventBus.$off(Events.Left);
    }
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:11px;
    }
</style>