<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g id="hit-view">
                <rect x="3" y="3" width="77" height="69" />
                <rect class="primary-color" x="3" y="15.39" width="77" height="44.25" />
                <rect class="primary-color" x="3" y="7.61" width="77" height="2.88" />
                <rect class="primary-color" x="3" y="2.77" width="77" height="1.54" />
                <rect class="primary-color" x="3" y="63.69" width="77" height="2.88" />
                <rect class="primary-color" x="3" y="70.46" width="77" height="1.54" />
                <polygon points="70.38 25.16 70.38 22.89 50.28 22.89 48.19 22.89 48.19 25.16 47.43 25.16 45.91 25.16 45.91 25.16 45.91 22.89 37.13 22.89 37.13 25.16 34.74 25.16 34.74 22.89 25.95 22.89 25.95 31.91 21.41 31.91 21.41 25.16 19.19 25.16 19.19 22.9 10.37 22.9 10.37 49.4 12.59 49.4 12.59 51.88 21.41 51.88 21.41 38.44 25.95 38.44 25.95 49.75 28.07 49.75 28.07 51.88 37.13 51.88 37.13 49.75 39.22 49.75 39.22 51.88 48.19 51.88 48.19 49.75 48.19 31.91 50.28 31.91 50.28 31.91 50.38 31.91 50.38 34.03 54.88 34.03 54.88 49.75 57.03 49.75 57.03 51.88 61.64 51.88 61.64 51.88 65.89 51.88 65.89 34.04 68.34 34.04 72.64 34.04 72.64 25.16 70.38 25.16" />
                <polygon class="primary-color" points="28.13 25.16 28.13 34.1 16.94 34.1 16.94 25.16 12.59 25.16 12.59 47.5 16.94 47.5 16.94 36.33 28.13 36.33 28.13 47.5 32.48 47.5 32.48 25.16 28.13 25.16" />
                <rect class="primary-color" x="39.22" y="25.16" width="4.59" height="22.34" />
                <polygon class="primary-color" points="50.38 25.16 50.38 29.56 57.11 29.56 57.11 47.5 61.64 47.5 61.64 29.56 68.34 29.56 68.34 25.16 50.38 25.16" />
            </g>
        </svg>
    </g>
</template>

<script>
import { Howl } from 'howler';
import { SceneNames } from  '../../../../global/constants'

export default {
    name: "BattleAttackHit",
    mounted() {
        var sound = new Howl({
            src: require("../../../../assets/sounds/hit-attack.mp3"),
            volume: 0.1,
            loop: true
        });

        if(this.$store.state.session.sound) {
            sound.play();
        }
        
        setTimeout(() => {
            sound.stop();
            this.$store.commit('session/setCurrentScene', SceneNames.BattleAttackDamage);
        }, 3000);
    }
}
</script>

<style scoped lang="scss">

</style>