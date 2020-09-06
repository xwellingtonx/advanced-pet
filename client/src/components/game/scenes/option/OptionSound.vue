<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <text class="sound-title" transform="translate(12.04 20.83)">SOUND</text>
            <polygon points="48.86 32.27 48.86 30.1 40.3 30.1 40.3 27.93 35.87 27.93 33.69 27.93 33.69 38.71 29.46 38.71 29.46 40.9 31.66 40.9 31.66 43.1 29.46 43.1 29.46 40.9 27.24 40.9 27.24 47.33 29.4 47.33 29.4 49.51 33.69 49.51 33.69 47.33 35.87 47.33 35.87 40.9 35.87 38.71 35.87 32.27 40.3 32.27 42.4 32.27 42.4 34.41 48.86 34.41 48.86 40.9 44.58 40.9 44.58 43.1 46.72 43.1 46.72 45.18 44.58 45.18 44.58 43.1 42.38 43.1 42.38 49.51 44.58 49.51 44.58 51.7 46.72 51.7 48.86 51.7 48.86 49.51 51.02 49.51 51.02 34.41 51.02 32.27 48.86 32.27" />
            
            <g class="on-container" :class="{ selected: canSound}">
                <rect class="cls-4" x="6.66" y="54.86" width="23.73" height="15.63" />
                <text class="cls-5" transform="translate(8.57 69.33)">ON</text>
            </g>

            <g class="off-container" :class="{ selected: !canSound}">
                <rect class="cls-4" x="43.96" y="54.86" width="32.38" height="15.63" />
                <text transform="translate(45.46 69.33)">OFF</text>
            </g>
        </svg>      
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events } from '../../../../global/constants';

export default {
    name: "OptionSound",
    data() {
        return {
            canSound: Boolean
        }
    },
    mounted() {
        this.registerListeners();

        this.canSound = this.$store.state.session.sound ? true : false;
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.onRight);
            EventBus.$on(Events.Left, this.onLeft);
            EventBus.$on(Events.Cancel, this.moveToStandByScene);
            EventBus.$on(Events.Confirmation, this.onConfirmation);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Cancel);
            EventBus.$off(Events.Confirmation);
        },
        onLeft() {
            this.canSound = true;
        },
        onRight() {
            this.canSound = false;
        },
        onConfirmation() {
            this.$store.commit('session/setSound', this.canSound);
            this.moveToStandByScene();
        },
        moveToStandByScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        },
    }        
}
</script>

<style scoped lang="scss">
.cls-1{fill:#fff;}
.sound-title {
    font-size:15px;
    font-family:Advanced Pet Font;
}
.on-container, .off-container {
    font-family:Advanced Pet Font;
    font-size:13px;

    rect {
        fill: #FFF;
    }

    &.selected {
        rect {
            fill: black;
        }
        text {
            fill: #FFF;
        }
    }
}

</style>