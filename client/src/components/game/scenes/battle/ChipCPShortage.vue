<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <polygon class="primary-color" points="4.35 8.82 9.31 8.82 19.14 8.82 19.14 6.59 9.31 6.59 9.31 4.37 9.31 3.2 3 3.2 3 4.37 4.35 4.37 4.35 8.82" />
            <rect class="primary-color" x="11.74" y="3.2" width="7.39" height="1.17" />
            <rect class="primary-color" x="21.49" y="6.59" width="9.74" height="2.23" />
            <polygon class="primary-color" points="33.66 8.82 36.1 8.82 36.1 6.59 38.49 6.59 38.49 8.82 40.97 8.82 40.97 4.37 40.97 3.2 21.49 3.2 21.49 4.37 33.66 4.37 33.66 8.82" />
            <rect class="primary-color" x="43.71" y="3.2" width="4.96" height="5.63" />
            <polygon class="primary-color" points="60.89 8.82 60.89 6.59 68.16 6.59 70.55 6.59 75.37 6.59 75.37 3.2 70.55 3.2 70.55 4.45 68.16 4.45 68.16 3.2 55.93 3.2 55.93 6.59 53.45 6.59 53.45 3.2 50.93 3.2 50.93 8.82 53.45 8.82 60.89 8.82" />
            <rect class="primary-color" x="77.77" y="3" width="1.48" height="5.82" />
            <rect class="primary-color" x="68.15" y="10.97" width="11.09" height="2.19" />
            <rect class="primary-color" x="48.67" y="10.97" width="16.96" height="2.19" />
            <rect class="primary-color" x="16.47" y="10.97" width="29.72" height="2.19" />
            <rect class="primary-color" x="3" y="10.97" width="10.97" height="2.19" />
            <rect class="primary-color" x="3.04" y="61.53" width="13.53" height="2.27" />
            <polygon class="primary-color" points="11.71 65.94 3.04 65.94 3.04 68.24 3.04 71.88 4.41 71.88 4.41 68.24 11.71 68.24 11.71 65.94" />
            <polygon class="primary-color" points="13.98 65.94 13.98 70.37 6.79 70.37 6.79 71.88 16.57 71.88 16.57 70.37 16.57 68.16 23.83 68.16 23.83 65.94 16.57 65.94 13.98 65.94" />
            <rect class="primary-color" x="19.01" y="70.37" width="4.83" height="1.63" />
            <rect class="primary-color" x="26.39" y="65.94" width="4.84" height="2.21" />
            <polygon class="primary-color" points="41.03 66.05 33.71 66.05 33.71 70.37 26.39 70.37 26.39 72 41.03 72 41.03 70.37 43.7 70.37 43.7 72 51.06 72 51.06 70.37 51.06 68.21 41.03 68.21 41.03 66.05" />
            <rect class="primary-color" x="19.01" y="61.53" width="36.88" height="2.27" />
            <rect class="primary-color" x="53.5" y="68.21" width="7.35" height="3.79" />
            <rect class="primary-color" x="58.4" y="61.53" width="9.68" height="2.27" />
            <rect class="primary-color" x="70.52" y="61.53" width="8.64" height="2.27" />
            <polygon class="primary-color" points="68.08 68.21 65.72 68.21 65.72 65.98 63.24 65.98 63.24 72 65.72 72 68.08 72 70.52 72 70.52 65.98 68.08 65.98 68.08 68.21" />
            <polygon class="primary-color" points="72.98 65.98 72.98 72 75.42 72 75.42 68.21 77.83 68.21 77.83 72 79.16 72 79.16 68.21 79.16 65.98 75.42 65.98 72.98 65.98" />
            <text class="primary-color pet-font" transform="translate(4.02 55.09) scale(0.79 1)">SHORTAGE</text>
            <text class="primary-color pet-font" transform="translate(29.35 35.45) scale(1.11 1)">CP</text>
        </svg>
    </g>
</template>

<script>
import { SceneNames, Events } from '../../../../global/constants';
import EventBus from '../../../../global/eventBus';

export default {
    name: "ChipCPShortage",
    mounted() {
        EventBus.$on(Events.Confirmation, this.moveToSlotIn);
    },
    beforeDestroy() {
         EventBus.$off(Events.Confirmation);
    },
    methods: {
        moveToSlotIn() {
            this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
        }
    }    
}

</script>

<style scoped lang="scss">
.pet-font {
    font-size:15.23px;
}
</style>