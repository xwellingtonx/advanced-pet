<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" x="2.94" y="69.13" width="77.13" height="5.88" />
            <polygon points="3.35 69.13 3.35 71.81 3.35 74.49 6.13 74.49 6.13 71.81 6.13 69.13 3.35 69.13" />
            <polygon points="76.62 69.13 76.62 71.9 76.62 74.68 79.4 74.68 79.4 71.9 79.4 69.13 76.62 69.13" />
            <rect x="18.62" y="70.61" width="46.06" height="2.78" />
            <g v-if="secondHalfText !== ''">
                <text class="primary-color pet-font" x="50%" y="34%" 
                    dominant-baseline="middle" text-anchor="middle">
                    {{firstHalfText}}
                </text>
                <text class="primary-color pet-font" x="27%" y="63%">{{secondHalfText}}</text>
                <text class="primary-color pet-font" x="8%" y="86%">Status</text>
            </g>

            <g v-if="secondHalfText === ''">
                <text class="primary-color pet-font" x="50%" y="47%" 
                    dominant-baseline="middle" text-anchor="middle">
                    {{firstHalfText}}
                </text>
                <text class="primary-color pet-font" x="8%" y="76%">Status</text>
            </g>
            <rect class="primary-color" x="2.94" y="3" width="7.25" height="10" />
            <polygon points="7.15 6.2 5.27 6.2 5.27 7.12 3.38 7.12 3.38 8.9 5.27 8.9 5.27 9.77 7.15 9.77 7.15 11.56 9.03 11.56 9.03 9.77 9.03 8.01 9.03 7.99 9.03 6.23 9.03 4.44 7.15 4.44 7.15 6.2" />
            <rect class="primary-color" x="72.69" y="3" width="7.25" height="10" />
            <polygon points="75.63 6.2 77.51 6.2 77.51 7.12 79.4 7.12 79.4 8.9 77.51 8.9 77.51 9.77 75.63 9.77 75.63 11.56 73.75 11.56 73.75 9.77 73.75 8.01 73.75 7.99 73.75 6.23 73.75 4.44 75.63 4.44 75.63 6.2" />
            <rect class="primary-color" x="12.48" y="3.48" width="57.92" height="5.35" />
            <rect class="primary-color" x="25.08" y="9.8" width="32.71" height="1.58" />
            <rect class="primary-color" x="60.79" y="9.8" width="9.6" height="1.58" />
            <rect class="primary-color" x="12.48" y="9.8" width="9.6" height="1.58" />
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
import { mapState } from 'vuex';


export default {
    name: "NaviStatus",
    computed: {
        ...mapState({
            deviceType: state => state.session.deviceType
        })       
    },
    data() {
        return {
            firstHalfText: "",
            secondHalfText: ""
        }
    },    
    mounted() {
        this.registerListeners();
        if(this.deviceType.indexOf("man") > -1) {
            this.firstHalfText = this.deviceType.substring(0, this.deviceType.indexOf("man"));
            this.secondHalfText = this.deviceType.substring(this.deviceType.indexOf("man"), this.deviceType.length);
        } else {
            this.firstHalfText = this.deviceType;
            this.secondHalfText = "";
        }
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.moveToOptionScene);
            EventBus.$on(Events.Cancel, this.moveToStandByScene);
            EventBus.$on(Events.Left, this.moveToStandByScene);
            EventBus.$on(Events.Confirmation, this.moveToLevelDetails);

        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Cancel);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Confirmation);

        },
        moveToOptionScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.Option);
        },
        moveToStandByScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        },  
        moveToLevelDetails() {
            this.$store.commit('session/setCurrentScene', SceneNames.NaviLevelDetails);
        }
    }
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:15px;
    }
</style>