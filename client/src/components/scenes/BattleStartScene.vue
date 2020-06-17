<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
                <rect width="83" height="75" rx="3.01" ry="3.01" />
                <rect class="cls-1" x="16.52" y="61.13" width="50.4" height="2.29" />
                <polygon class="cls-1" points="80 3 80 8.81 3 8.81 3 9 3 9 3 63.42 13.81 63.42 13.81 61.13 4.67 61.13 4.67 11.29 13.81 11.29 13.81 8.83 16.52 8.83 16.52 11.29 66.92 11.29 66.92 8.83 69.64 8.83 69.64 11.29 78.33 11.29 78.33 61.13 69.64 61.13 69.64 63.42 80 63.42 80 9 80 9 80 6.67 80 3 80 3" />
                <rect class="cls-1" x="71.21" y="3" width="2.42" height="3.67" />
                <rect class="cls-1" x="76.25" y="3" width="3.75" height="3.67" />
                <rect class="cls-1" x="9.38" y="3" width="2.42" height="3.67" />
                <rect class="cls-1" x="3" y="3" width="3.75" height="3.67" />
                <polygon class="cls-1" points="59.17 3 59.17 4.17 22.33 4.17 22.33 3 14.13 3 14.13 6.67 68.88 6.67 68.88 3 59.17 3" />
                <rect class="cls-1" x="6.94" y="12.9" width="4.87" height="4.88" />
                <rect class="cls-1" x="6.94" y="54.13" width="4.87" height="4.88" />
                <rect class="cls-1" x="71.15" y="12.9" width="4.87" height="4.88" />
                <rect class="cls-1" x="71.15" y="54.13" width="4.87" height="4.88" />
                <text class="cls-2" transform="translate(11.43 34.5) scale(0.89 1)">Battle<tspan x="5.73" y="20.27">Start</tspan></text>
                <polygon class="cls-1" points="3 65.78 3 68.42 6.09 68.42 6.09 71.94 3 71.94 3 71.97 9.19 71.97 9.19 65.78 3 65.78" />
                <polygon class="cls-1" points="73.82 65.75 73.82 71.94 76.91 71.94 76.91 68.42 80 68.42 80 65.75 73.82 65.75" />
                <polygon class="cls-1" points="45.98 65.75 45.98 67.69 44.31 67.69 44.31 65.75 42.33 65.75 42.33 67.69 40.67 67.69 40.67 65.75 38.69 65.75 38.69 67.69 37.02 67.69 37.02 65.75 12.15 65.75 12.15 71.94 14.63 71.94 14.63 67.69 34.38 67.69 34.38 69.59 48.63 69.59 48.63 67.69 68.38 67.69 68.38 71.94 70.86 71.94 70.86 65.75 45.98 65.75" />
                <rect class="cls-1" x="18.42" y="70.29" width="3.21" height="0.9" />
                <rect class="cls-1" x="28.42" y="70.29" width="3.21" height="0.9" />
                <rect class="cls-1" x="23.42" y="70.29" width="3.21" height="0.9" />
                <rect class="cls-1" x="52.32" y="70.29" width="3.21" height="0.9" />
                <rect class="cls-1" x="62.32" y="70.29" width="3.21" height="0.9" />
                <rect class="cls-1" x="57.32" y="70.29" width="3.21" height="0.9" />
        </svg>      
    </g>
</template>

<script>
import { SceneNames } from '../../common/constants';

export default {
    name: "BattleStartScene",
    mounted() {
        setTimeout(() => {
            this.$store.commit('session/setCurrentScene', SceneNames.Roulette);
        }, 2000);
    }      
}
</script>

<style scoped lang="scss">
    .cls-1,
    .cls-2{fill:#fff;}
    .cls-2{font-size:14.59px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>