<template>
  <g>
      <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
          <rect width="83" height="75" rx="3.01" ry="3.01" />
          <rect class="cls-1" x="3" y="3" width="77" height="69" />
          <polygon points="75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18" />
          <g class="cannon_group">
              <rect x="21.43" y="24.48" width="1.94" height="1.94" />
              <rect x="23.62" y="22.26" width="2.21" height="1.99" />
              <rect x="22.82" y="33.09" width="1.7" height="1.7" />
              <rect x="24.93" y="30.93" width="1.96" height="1.96" />
              <rect x="30.62" y="40.31" width="2.1" height="2.1" />
              <rect x="33.21" y="38.14" width="2.19" height="2.19" />
              <rect x="35.64" y="35.71" width="2.1" height="2.1" />
              <rect x="38.07" y="38.41" width="1.99" height="1.99" />
              <rect x="37.49" y="48.13" width="1.94" height="1.94" />
              <rect x="40.42" y="45.6" width="1.94" height="1.94" />
              <rect x="43.08" y="43.78" width="1.94" height="1.94" />
              <rect x="46.83" y="48.46" width="1.94" height="1.94" />
              <rect x="50.67" y="53.23" width="1.94" height="1.94" />
              <rect x="54.54" y="58.04" width="1.94" height="1.94" />
              <rect x="52.2" y="60.2" width="1.94" height="1.94" />
              <rect x="50.02" y="57.31" width="1.94" height="1.94" />
              <rect x="48.17" y="55.1" width="1.94" height="1.94" />
              <rect x="46.34" y="52.83" width="1.94" height="1.94" />
              <rect x="44.38" y="50.47" width="1.94" height="1.94" />
              <rect x="42.32" y="48.13" width="1.94" height="1.94" />
              <rect x="39.73" y="50.16" width="1.94" height="1.94" />
              <rect x="42.26" y="52.66" width="1.94" height="1.94" />
              <rect x="44.15" y="55.1" width="1.94" height="1.94" />
              <rect x="46.05" y="57.34" width="1.94" height="1.94" />
              <rect x="48.03" y="60.12" width="1.94" height="1.94" />
              <path d="M66.37,45.92V43.74H64.68V41.36H62.42V39.3h-1.9V36.48H58.81V34.22H56.53V31.63H55.21V29.4H53V27H51v-2.1h-2V22.11H47.15V19.85H44V17.27H41.22V15.09H40.06V12.83H30.78V12H28.84V9.76h-2V7.18h-5.3V9H16.66v1.54H14.39V12.8H13.05v1.67h-1v6.2h1v1.59h1v1.6h1.11v5.38h-.76v5.23H16v1.85h1.81v2.5h1.9v2.26H21.9v2.66h1.4v2.18h2.58v2.34h1.43V50.6h2.3v2.63H31.5v2.13h1.81v2.39h1.91v2.62H37v2H38.9v2.37h1.51v2h1.72v1.91h1V70H51V68.68h4.19V66.77h4.42v-2H62V62.39h2.48v-2H65v-2h2.72V45.92ZM21.9,23.86v-2h2.21V17.33H26.3v-4.5H24.5V11.55H22.89V9h2v2.42h1.95v2.34h2v1.7h1.94v3.15h1.61v4.22H29.81v2.15H26V27H23.3v1.83H20.71v-5Zm-3.39-6.59H16.25V12.83h2.26V10.49h2.2v2.34h-2.2Zm8.18,16.46v2.1h-2v1.51h-2.5V35.16H20v-2.3H18.93V30.52h2.2v1.75h1.76V30.52h2V28.86h2.83V27h4.09v-2.1h2.46V18.56h.61V16.11h4v3.33h1.81v6.25H38.15v4.19H35.67V32H33.31v1.75H31v2.1H28.84v-2.1Zm8.54,9.34H32.39v1.76H30.08V42.44H28V40h2.83V37.69h1.94V35.83H35.3v-2.1h2V32h2.77V28.22h2.42V23.88h2.29v2.4h2.38v1.94h1.33V32.9H46V37H43.53V39.3H41.22v2.06H38.9v1.71H37.22v-2h-2ZM63.79,47.9v8.35H61.18v2.16H58.81v2H56.53v2H45.31V58.75H43.57V56.84H41.72V55.36H39.78V53.23h-2V50.6H36.23V46.91h2.24V45.19h2.24V43.52h2.78V41.36h2.27V39.3h2.53V35.37h2.29V32.9h1.75v2.93h1.86v2.58H56v1.94H58.3v2.5h1.86v2.83H62v1.94h1.75Z" />
          </g>          
      </svg>      
  </g>
</template>

<script>
import EventBus from '../../../../global/eventBus.js';
import { Events, SceneNames } from '../../../../global/constants';

export default {
name: "MegaBuster",
  mounted() {
    EventBus.$on(Events.Right, this.onRight);
    EventBus.$on(Events.Confirmation, this.onConfirmation);
  },
  beforeDestroy() {
    EventBus.$off(Events.Right);
    EventBus.$off(Events.Confirmation);
  },
  methods: {
    onRight() {
      this.$store.commit('session/setCurrentScene', SceneNames.MegaBusterStatus);
    },
    onConfirmation() {
      this.$store.commit('session/setCurrentScene', SceneNames.ChipOk);
    }
  }
}
</script>

<style scoped lang="scss" >
.cls-1{fill:#fff;}
</style>