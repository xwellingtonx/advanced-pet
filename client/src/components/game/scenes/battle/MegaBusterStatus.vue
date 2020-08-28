<template>
  <g>
      <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
          <rect width="83" height="75" rx="3.01" ry="3.01" />
          <rect class="cls-1" x="3" y="3" width="77" height="69" />
          <text class="cls-2" transform="translate(64.33 68.35)">{{this.naviStatus.at}}</text>
          <text class="cls-2" transform="translate(6.88 68.35)">AT</text>
          <polygon points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18" />
          <text class="cls-3" transform="translate(19.11 32.04)">MEGA<tspan x="-11.78" y="18">BUSTER</tspan></text>
      </svg>      
  </g>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from '../../../../global/eventBus.js';
import { Events, SceneNames } from '../../../../global/constants';

export default {
  name: "MegaBusterStatus",
  computed: {
    ...mapState({
      naviStatus: state => state.session.naviStatus,
    })
  },   
  mounted() {
    EventBus.$on(Events.Left, this.onLeft);
  },
  beforeDestroy() {
    EventBus.$off(Events.Left);
  },
  methods: {
    onLeft() {
      this.$store.commit('session/setCurrentScene', SceneNames.MegaBuster);
    }
  }
}
</script>

<style scoped lang="scss" >
.cls-1{fill:#fff;}.cls-2{font-size:10px;}.cls-2,.cls-3{font-family:Advanced-PET-Font, Advanced PET Font;}.cls-3{font-size:15px;}
</style>