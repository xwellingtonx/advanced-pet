<template>
    <g>
      <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
        <rect width="83" height="75" rx="3.01" ry="3.01" />
        <rect x="3" y="3" width="77" height="69" />
        <text class="pet-font primary-color" transform="translate(4.87 30.99)">CP</text>
        <text class="pet-font primary-color svg-text-right-direction" transform="translate(78 30.99)" v-if="pluggedChip">{{pluggedChip.CP}}</text>
        
        <g v-if="pluggedChip">
          <text class="pet-font primary-color " transform="translate(4.87 50.1)">AT</text>
          <text class="pet-font primary-color svg-text-right-direction" transform="translate(78 50.1)">{{pluggedChip.AT}}</text>
        </g>

        <polygon class="primary-color" points="75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18" />
        <polygon class="primary-color" points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18" />
      </svg>      
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../../../global/eventBus';
import { Events, SceneNames } from '../../../../global/constants';

export default {
    name: "ChipStatus",
    computed: {
    ...mapGetters({
       pluggedChip: 'battle/getLastChip'
    })
  },
  mounted() {
    EventBus.$on(Events.Left, this.onLeft);
    EventBus.$on(Events.Right, this.onRight);
    EventBus.$on(Events.Confirmation, this.onConfirmation);
  },
  beforeDestroy() {
    EventBus.$off(Events.Left);
    EventBus.$off(Events.Right);
    EventBus.$off(Events.Confirmation);
  },
  methods: {
    onLeft() {
      this.$store.commit('session/setCurrentScene', SceneNames.BattleNaviStatus);
    },
    onRight() {
      this.$store.commit('session/setCurrentScene', SceneNames.ChipElement);
    },
    onConfirmation() {
      this.$store.commit('session/setCurrentScene', SceneNames.ChipOk);
    }
  }
}
</script>

<style scoped lang="scss" >
.pet-font {
  font-size:13px;
}
</style>