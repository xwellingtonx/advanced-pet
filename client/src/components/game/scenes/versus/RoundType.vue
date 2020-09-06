<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <g id="standby-face-right">
                <polygon points="76.47 20.65 78.63 20.65 78.63 22.8 80 22.8 80 31.93 78.63 31.93 78.63 34.2 76.47 34.2 76.47 20.65" />
                <rect x="78.63" y="34.2" width="1.37" height="13.6" />
                <polygon points="65.48 52.29 63.35 52.29 63.35 47.77 65.48 47.77 65.48 45.52 67.71 45.52 67.71 52.29 65.48 52.29" />
                <rect x="28.57" y="38.75" width="2.24" height="6.77" />
                <rect x="19.81" y="47.85" width="2.23" height="2.24" />
                <path d="M28.57,58.76v2.3H24.23v2.23H19.81v2.3H13.29v2.25H24.22V65.59h6.56v2.22h-2.2v2.27h2.2V67.84H33V65.59h4.31v-2.3h2.17v4.43h2.23V72H51v.12h7.92V67.72h2.2V65.51h2.21V63.29H58.94v2.22H48V63.29h-4V61.06H39.52v-2.3H37.35V54.28H35.17V38.75h2.18V41h0v6.82h2.15V41h2.23v6.82h2.18v2.27H41.75v2.26H48V45.52h4.38v2.25h4.35V50h4.44V47.77h2.19V45.52h2.13V43.2h2.23v2.32h2.17v11h2.17V54.28h4.42v-2h2.16V47.8H76.47v2.25h-2.2V47.8H72.05V45.52H70V41h2.06v4.52h2.22V47.8h2.2V41h-2.2V38.75h2.2V34.2h-2.2v2.28H72.05v2.27H70V36.48h2.06V31.94h2.16V20.65H65.52V23h2.19v9H52.34V20.65H39.52V23h2.23v6.7H44v6.81H41.75V31.94H39.52v-4.5H37.37V23H35.18V20.69H22v6.75H19.84v4.5H22v2.27H19.84V31.94H17.58V41h0v6.77h2.26v-4.5H22v4.5h2.19v2.32h2.18V36.48H24.23V31.94H22V29.67h2.19V27.44h4.19v2.23h2.39v4.54H33v2.27H30.81v2.27h2.11v6.79H30.83v2.28h2.09v4.53H30.81v1.93h-4.4V52.35H24.23V50.09H22v2.26H11.27v1.93h4.16v2.24H22v2.24ZM22,36.48h0V41h2.19v2.2H22V41h-2.2V36.48ZM72.05,50.09h2.21v2.2H72.05ZM44,43.2H46.1v4.62H44Zm-6.61-6.72h2.15v2.27H37.37Z" />
                <polygon points="54.56 56.52 54.56 54.29 56.72 54.29 56.72 52.29 58.94 52.29 58.94 56.52 56.72 56.52 54.56 56.52" />
                <rect x="67.71" y="56.53" width="2.17" height="2.25" />
                <rect x="61.16" y="56.52" width="2.18" height="2.25" />
                <rect x="65.48" y="58.77" width="2.23" height="2.3" />
                <polygon points="50.17 58.8 47.98 58.8 47.98 56.54 50.17 56.54 50.17 58.77 61.16 58.77 61.16 61.07 50.17 61.07 50.17 58.8" />
                <rect x="63.35" y="61.07" width="2.14" height="2.22" />
                <rect x="63.35" y="65.51" width="2.14" height="2.21" />
                <rect x="65.48" y="67.72" width="4.4" height="2.36" />
                <polygon points="72.05 72.04 72.05 72.16 69.88 72.16 69.88 72.04 69.88 70.08 72.05 70.08 72.05 72.04" />
                <polygon points="28.58 72.19 26.4 72.19 26.4 72.07 26.39 72.07 26.39 70.08 28.58 70.08 28.58 72.07 28.58 72.19" />
            </g> 
            <rect class="cls-2" x="2" y="2" width="79" height="18.67" />
            <text class="standby-text" transform="translate(9 18.33)">
                {{turnType}}
            </text>
        </svg>        
    </g>
</template>

<script>
import { mapState } from 'vuex'
import { SceneNames, TurnTypes } from '../../../../global/constants';

export default {
    name: "RoundType", 
    computed: {
        ...mapState({
            turnType: state => state.battle.turnType,
        })
    },     
    mounted() {
        setTimeout(() => {
            if(this.turnType === TurnTypes.Attack) {
                this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.LoadingNow);
            }
        }, 2000);
    }
}
</script>

<style scoped lang="scss">
.cls-1,.standby-text, .standby-text-2{fill:#fff;}.cls-2{fill:#000501;}
.standby-text, .standby-text-2{font-size:13px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>