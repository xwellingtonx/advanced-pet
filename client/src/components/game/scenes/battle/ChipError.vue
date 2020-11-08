<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect x="3" y="3" width="77" height="69" />
            <path class="primary-color" d="M58.33,41.44H56.58V39.52H54.42v-2.1H52.63V35.31H50.54V33.54H48.75v-2H46.58V29.67H44.71V27.61H42.65v-2H40.71V23.73H38.77v-2H36.83V19.61H34.65V17.92H32.83V15.54h-2V13.67H29v-2H26.77V10H24.9V7.73H18.83V10H20.9v1.69h1.93v2H24.9v1.87h1.87v2.38H29v1.69h1.87v2.12h2v2h1.82v1.88h2.18v2h1.94v2.06h1.94v1.89h1.94v2H29V19.61H26.63V41.44H48.75V39.52H46.58v-2.1h2.17v2.1h1.79v1.92h2.09v2h1.79v2h2.16v2h4v-4H58.33ZM29,39.52V35.31h1.79v4.21Zm5.69,0V35.31h2.18v4.21Zm6.06,0V35.31h1.94v4.21Z" />
            <polygon class="primary-color" points="52.63 43.44 30.75 43.44 30.75 45.4 34.65 45.4 34.65 47.44 54.42 47.44 54.42 45.4 52.63 45.4 52.63 43.44" />
            <polygon class="primary-color" points="60.58 17.92 60.58 13.67 58.33 13.67 58.33 41.44 60.58 41.44 60.58 43.44 62.5 43.44 62.5 17.92 60.58 17.92" />
            <polygon class="primary-color" points="52.63 33.42 52.63 35.31 54.42 35.31 54.42 37.42 56.58 37.42 56.58 35.31 56.58 33.42 56.58 9.67 54.42 9.67 54.42 33.42 52.63 33.42" />
            <polygon class="primary-color" points="34.65 17.92 38.77 17.92 38.77 19.61 40.71 19.61 40.71 21.73 42.59 21.73 42.59 23.73 44.66 23.73 44.66 25.86 50.54 25.86 50.54 23.73 50.54 21.73 50.54 19.61 50.54 17.92 50.54 15.54 50.54 9.67 54.42 9.67 54.42 7.73 28.96 7.73 28.96 9.67 32.83 9.67 32.83 15.54 34.65 15.54 34.65 17.92" />
            <text class="primary-color pet-font" transform="translate(14.16 67.79)">Error</text>
        </svg>
    </g>
</template>

<script>
import { SceneNames, Events } from '../../../../global/constants';
import EventBus from '../../../../global/eventBus';
import { Howl } from 'howler';

export default {
    name: "ChipError",
    mounted() {
        EventBus.$on(Events.Confirmation, this.moveToSlotIn);

        if(this.$store.state.session.sound) {
            var sound = new Howl({
                src: require("../../../../assets/sounds/slotin-error.mp3"),
                volume: 1,
            });
            
            sound.play();
        }
    },
    beforeDestroy() {
         EventBus.$$off(Events.Confirmation);
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
        font-size:15px;
    }
</style>