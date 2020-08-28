<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="2.94" y="69.13" width="77.13" height="5.88" />
            <polygon points="3.35 69.13 3.35 71.81 3.35 74.49 6.13 74.49 6.13 71.81 6.13 69.13 3.35 69.13" />
            <polygon points="76.62 69.13 76.62 71.9 76.62 74.68 79.4 74.68 79.4 71.9 79.4 69.13 76.62 69.13" />
            <line class="cls-2" x1="78.55" y1="71.9" x2="4.41" y2="71.9" />
            <line class="cls-2" x1="78.05" y1="71.94" x2="3.81" y2="71.9" />
            <rect x="18.62" y="70.61" width="46.06" height="2.78" />
            <text class="cls-3" transform="translate(17.87 29.75)">Mega<tspan x="5.89" y="18">Man</tspan><tspan x="-11.78" y="36">Status</tspan></text>
            <rect class="cls-1" x="2.94" y="3" width="7.25" height="10" />
            <polygon class="cls-4" points="7.15 6.2 5.27 6.2 5.27 7.12 3.38 7.12 3.38 8.9 5.27 8.9 5.27 9.77 7.15 9.77 7.15 11.56 9.03 11.56 9.03 9.77 9.03 8.01 9.03 7.99 9.03 6.23 9.03 4.44 7.15 4.44 7.15 6.2" />
            <rect class="cls-1" x="72.69" y="3" width="7.25" height="10" />
            <polygon class="cls-4" points="75.63 6.2 77.51 6.2 77.51 7.12 79.4 7.12 79.4 8.9 77.51 8.9 77.51 9.77 75.63 9.77 75.63 11.56 73.75 11.56 73.75 9.77 73.75 8.01 73.75 7.99 73.75 6.23 73.75 4.44 75.63 4.44 75.63 6.2" />
            <rect class="cls-1" x="12.48" y="3.48" width="57.92" height="5.35" />
            <rect class="cls-1" x="25.08" y="9.8" width="32.71" height="1.58" />
            <rect class="cls-1" x="60.79" y="9.8" width="9.6" height="1.58" />
            <rect class="cls-1" x="12.48" y="9.8" width="9.6" height="1.58" />
            <rect x="15.48" y="4.72" width="3" height="3" />
            <rect x="21.59" y="4.72" width="3" height="3" />
            <rect x="27.71" y="4.72" width="3" height="3" />
            <rect x="33.82" y="4.72" width="3" height="3" />
            <rect x="39.94" y="4.72" width="3" height="3" />
            <rect x="46.05" y="4.72" width="3" height="3" />
            <rect x="52.17" y="4.72" width="3" height="3" />
            <rect x="58.28" y="4.72" width="3" height="3" />
            <rect x="64.4" y="4.72" width="3" height="3" />
        </svg>     
    </g> 
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events } from '../../../../global/constants';

export default {
    name: "NaviStatus",
    mounted() {
        this.registerListeners();
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.moveToOptionScene);
            EventBus.$on(Events.Cancel, this.moveToStandByScene);
            EventBus.$on(Events.Left, this.moveToStandByScene);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Cancel);
            EventBus.$off(Events.Left);
        },
        moveToOptionScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.Option);
        },
        moveToStandByScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        },  
    }
}
</script>

<style scoped lang="scss">
    .cls-1,.cls-3{fill:#fff;}.cls-2{fill:none;}.cls-3{font-size:15px;font-family:Advanced-PET-Font, Advanced PET Font;}.cls-4{fill:#000501;}
</style>