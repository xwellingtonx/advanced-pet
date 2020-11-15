<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" x="3" y="3" width="77" height="69" />
            <polygon points="75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18" />
            <polygon points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18" />

            <text class="pet-font" transform="translate(6.79 29.55)">S - Clear</text>
            <rect v-for="item in currentStageClear" 
                    :key="item.id" :x="item.x" y="34.24" width="4.46" height="5.53" />

            
            <text class="pet-font recovery-text" transform="translate(6.93 57.33)">Recovery</text>
            <rect v-for="item in currentRecovery" 
                    :key="item.id + '_recov'" :x="item.x" y="62.47" width="4.46" height="5.53" />          
        </svg>     
    </g> 
</template>

<script>
import { mapState } from 'vuex'
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events } from '../../../../global/constants';
import World from '../../common/world.js';

export default {
    name: "NaviStageDetails",
    data() {
        return {
            bars: [
                { id: 1, x: "6.27"},
                { id: 2, x: "13.51"},
                { id: 3, x: "20.74"},
                { id: 4, x: "27.98"},
                { id: 5, x: "35.22"},
                { id: 6, x: "42.46"},
                { id: 7, x: "49.69"},
                { id: 8, x: "56.93"},
                { id: 9, x: "64.17"},
                { id: 10,x: "71.4"}
            ],
            currentStageClear: [],
            currentRecovery: [],
        }
    },
    computed: {
        ...mapState({
            stageClear: state => state.session.stageClear,
            deviceType: state => state.session.deviceType,
            currentWorld: state => state.session.currentWorld,
            currentStage: state => state.session.currentStage,
            recovery: state => state.session.navi.recovery
        })
    },   
    mounted() {
        this.registerListeners();
        var currentStage = World.getCurrentStage(this.deviceType, this.currentWorld, this.currentStage);

        var stageClearPercentage = this.stageClear / currentStage.stageClear;
        var recoveryPercentage = this.recovery / 100;

        this.currentStageClear = this.bars.slice(0, Math.floor(stageClearPercentage * this.bars.length));
        this.currentRecovery = this.bars.slice(0, Math.floor(recoveryPercentage * this.bars.length));
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.onRight);
            EventBus.$on(Events.Left, this.onLeft);
            EventBus.$on(Events.Cancel, this.onCancel);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Cancel);
        },
        onRight() {
            this.$store.commit('session/setCurrentScene', SceneNames.NaviVsDetails);
        },
        onLeft() {
            this.$store.commit('session/setCurrentScene', SceneNames.NaviLevelDetails);
        },
        onCancel() {
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        }        
    }
}
</script>


<style scoped lang="scss">
    .pet-font { 
        font-size:12px;
    }

    .recovery-text {
        font-size: 11px;
    }
</style>