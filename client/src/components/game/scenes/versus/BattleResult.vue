<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <polygon class="primary-color" points="79.08 4.35 78.11 4.35 78.11 3.32 77.11 3.32 77.11 2.32 76.08 2.32 76.08 1.35 75.11 1.35 75.11 0 7.34 0 7.34 1.35 6.37 1.35 6.37 2.32 5.34 2.32 5.34 3.32 4.34 3.32 4.34 4.35 3.37 4.35 3.37 7.29 2.46 7.29 2.46 67.71 3.37 67.71 3.37 70.65 4.34 70.65 4.34 71.68 5.34 71.68 5.34 72.68 6.37 72.68 6.37 73.65 7.34 73.65 7.34 75 75.11 75 75.11 73.65 76.08 73.65 76.08 72.68 77.11 72.68 77.11 71.68 78.11 71.68 78.11 70.65 79.08 70.65 79.08 67.71 80 67.71 80 7.29 79.08 7.29 79.08 4.35" />
            <text transform="translate(23.44 18.84)">Win</text>
            <text class="righ-direction" transform="translate(55.88 36.17)" >{{wins}}</text>
            <text transform="translate(16.16 52.09)" >Lose</text>
            <text class="righ-direction" transform="translate(55.88 68.17)" >{{losses}}</text>           
        </svg>      
    </g>
</template>

<script>
import { SceneNames } from '../../../../global/constants';
import { Howl } from 'howler';
import { mapState } from 'vuex'

export default {
    name: "BattleResult",
    computed: {
        ...mapState({
            wins: state => state.session.wins,
            losses: state => state.session.losses,
        }),
    },
    mounted() {
        var sound = null;
        if(this.$store.state.session.sound) {
            sound = new Howl({
                src: require("../../../../assets/sounds/vs-battle-result.mp3"),
                volume: 1,
                loop: true
            });

            sound.play();
        }

        setTimeout(() => {
            sound.stop();
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        }, 3000);
    }
}
</script>

<style scoped lang="scss">
    $primary-fill: #fff;

    .primary-color {
        fill: $primary-fill;    
    } 

    text {font-size:12px;font-family:Advanced-PET-Font, Advanced PET Font;}
    
    .righ-direction {
        direction: rtl;
    }

</style>