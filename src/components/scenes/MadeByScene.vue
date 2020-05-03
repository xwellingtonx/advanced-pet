<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <text class="cls-1" transform="translate(51.61 48.71)">X</text>
            <text class="cls-2" transform="translate(32.62 47.23)">W</text>
            <text class="cls-1" transform="translate(11.23 48.71)">X</text>
        </svg>
    </g>
</template>

<script>
import { Howl } from 'howler';
import { SceneNames } from  '../../common/constants.js'

export default {
    name: "MadeByScene",
    props: {
    },
    mounted() {
        var sound = new Howl({
            src: require("../../assets/sounds/brand.mp3"),
            volume: 0.1,
            loop: true
        });
        sound.play();

        setTimeout(() => {
            sound.stop();
            this.$store.commit('session/setCurrentScene', SceneNames.Splash);
        }, 2000);
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.cls-1{font-size:25.61px;}.cls-1,.cls-2{fill:#fff;font-family:Advanced-PET-Font, Advanced PET Font;}.cls-2{font-size:22.14px;}
</style>