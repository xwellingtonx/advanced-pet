<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <path class="cls-1" d="M.42,1.5A3,3,0,0,1,3,0H80a3,3,0,0,1,2.58,1.5Z" />
            <rect class="cls-1" y="5.78" width="83" height="6.18" />
            <rect class="cls-2" y="15.56" width="83" height="5.71" />
            <path class="cls-1" d="M.42,73.5A3,3,0,0,0,3,75H80a3,3,0,0,0,2.58-1.5Z" />
            <rect class="cls-1" y="63.04" width="83" height="6.18" />
            <rect class="cls-2" y="53.73" width="83" height="5.71" />
            <rect class="cls-2" y="24.63" width="83" height="25.79" />
            <text class="cls-3" transform="translate(9.26 44.92)">Option</text>
        </svg>      
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events } from '../../../../global/constants';

export default {
    name: "Option",
    mounted() {
        this.registerListeners();
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.moveToVSBattleScene);
            EventBus.$on(Events.Left, this.moveToStatusScene);
            EventBus.$on(Events.Cancel, this.moveToStandByScene);
            EventBus.$on(Events.Confirmation, this.moveToOptionTimeScene);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Cancel);
            EventBus.$off(Events.Confirmation);
        },
        moveToStandByScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        },
        moveToVSBattleScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.PlayerVSPlayer);
        },
        moveToStatusScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.NaviStatus);
        },
        moveToOptionTimeScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.OptionTime);
        }  
    }        
}
</script>

<style scoped lang="scss">
    .cls-1{fill:#fff;}
    .cls-2{fill:#fffdfd;}
    .cls-3{font-size:15px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>