<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94" v-if="pluggedChip">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect x="3" y="3" width="77" height="69" />
            <polygon class="cls-1" points="75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18" />
            <polygon class="cls-1" points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18" />
            
            <g class="neutral-element" v-if="pluggedChip.Element === 'Neutral'">
                <path class="cls-1" d="M15.38,14V66.21H67.62V14ZM65.13,63.71H17.87V16.45H65.13Z" />
                <path class="cls-1" d="M20.42,19V61.17H62.58V19ZM45.29,43.87H37.71V36.29h7.58Z" />
            </g>     
            <g class="wood-element" v-if="pluggedChip.Element === 'Wood'">
                <path class="cls-1" d="M15.38,14V66.21H67.62V14ZM65.13,63.71H17.87V16.45H65.13Z" />
                <rect class="cls-1" x="20.42" y="19" width="42.17" height="42.17" />
                <path d="M54.61,25.08h-14V27.4H35.85v2.33H33.49v2H31.31V34.1H29.19v7.26H26.63V52.82H24.07v4.44h5.12V55h11V52.82h7.23V50.58h2.22V48h2.53V45.81h2.42V41.27h2.32V25.08Zm0,4.65H52.15v2.11H49.7V34.1h4.91v2.18H45.13v2.56H42.72v2.43h4.72v2.32H42.72V41.27H40.21v2.32H38.35v2.22h-2.5V48h7.09v2.63H35.85V48H33.49v2.63H31.31V48h2.18V45.81H31.31v-7h2.18v7h2.36V43.59h2.5V41.27h1.86V38.84H38.35V34.1h1.86v4.74h2.51V36.28h2.41V34.1h2.4V31.84h-2.4V27.4h2.4v4.44H49.7V29.73h2.45V27.4h2.46Z" />
                <rect x="47.53" y="34.1" width="2.16" height="2.16" />
            </g>   
            <g class="elec-element" v-if="pluggedChip.Element === 'Elec'">
                <path class="cls-1" d="M15.38,14V66.21H67.62V14ZM65.13,63.71H17.87V16.45H65.13Z" />
                <rect class="cls-1" x="20.42" y="19" width="42.17" height="42.17" />
                <rect x="30.18" y="45.52" width="2.4" height="4.81" />
                <polygon points="46.4 45.52 46.4 43.56 48.65 43.56 48.65 41.11 51.06 41.11 51.06 38.73 53.11 38.73 53.11 36.39 55.41 36.39 55.41 34.21 57.92 34.21 57.92 29.53 53.11 29.53 43.8 29.53 43.8 22.73 41.93 22.73 41.88 22.73 39.52 22.73 39.52 25.15 41.88 25.15 41.88 31.87 43.8 31.87 53.11 31.87 53.11 34.21 51.06 34.21 51.06 36.39 48.65 36.39 48.65 38.73 46.32 38.73 46.32 41.11 43.99 41.11 43.99 43.56 41.88 43.56 41.88 45.52 39.52 45.52 39.52 47.97 37.16 47.97 37.16 50.32 34.63 50.32 34.63 52.88 32.58 52.88 32.58 54.96 30.18 54.96 30.18 50.32 27.82 50.32 27.82 54.96 25.44 54.96 25.44 57.23 51.06 57.23 51.06 54.96 53.11 54.96 53.11 52.88 55.41 52.88 55.41 50.32 57.92 50.32 57.92 47.97 43.99 47.97 43.99 50.32 41.88 50.32 41.88 52.88 39.69 52.88 39.69 54.96 37.16 54.96 37.16 52.88 39.69 52.88 39.69 50.32 41.88 50.32 41.88 47.97 43.99 47.97 43.99 45.52 46.4 45.52" />
                <rect x="32.58" y="41.11" width="2.05" height="4.41" />
                <polygon points="37.17 38.66 37.17 38.57 37.17 36.39 30.18 36.39 30.18 34.27 27.82 34.27 27.82 36.39 25.44 36.39 25.44 38.66 34.63 38.66 34.63 41.11 37.17 41.11 37.17 38.66" />
                <rect x="37.02" y="25.15" width="2.5" height="2.5" />
                <rect x="34.63" y="27.65" width="2.39" height="1.89" />
                <rect x="32.58" y="29.53" width="2.05" height="2.34" />
                <rect x="30.18" y="31.87" width="2.4" height="2.4" />
            </g> 
            <g class="aqua-element" v-if="pluggedChip.Element === 'Aqua'">
                <path class="cls-1" d="M15.38,14V66.21H67.62V14ZM65.13,63.71H17.87V16.45H65.13Z" />
                <rect class="cls-1" x="20.42" y="19" width="42.17" height="42.17" />
                <path d="M46.78,31.27V29.38H44.5V27.16H42.66V24.81H40.31v2.35H38.09v2.22H35.81v1.89h2.28V33.5H35.81V31.27h-1.9v6.46h1.9V40h2.28v2.16h6.72V40h2v-2.3h2.28V31.27Zm-4.12,4.58H44.5v1.64H42.66ZM40.31,40v-2.3h2.35V40Zm6.47-4.37H44.5V33.5h2.28Z" />
                <path d="M55.55,46.49V44.6H53.26V42.38H51.43V40H49.08v2.35H46.86V44.6H44.58v1.89h2.28v2.23H44.58V46.49H42.67V53h1.91v2.3h2.28v2.16h6.72V55.25h2V53h2.28V46.49Zm-4.12,4.58h1.83v1.65H51.43Zm-2.35,4.18V53h2.35v2.3Zm6.47-4.37H53.26V48.72h2.29Z" />
                <path d="M38,46.49V44.6H35.76V42.38H33.92V40H31.57v2.35H29.35V44.6H27.07v1.89h2.28v2.23H27.07V46.49h-1.9V53h1.9v2.3h2.28v2.16h6.73V55.25h2V53h2.29V46.49Zm-4.12,4.58h1.84v1.65H33.92Zm-2.35,4.18V53h2.35v2.3ZM38,50.88H35.76V48.72H38Z" />
            </g>    
            <g class="fire-element" v-if="pluggedChip.Element === 'Fire'">
                <path class="cls-1" d="M15.38,14V66.21H67.62V14ZM65.13,63.71H17.87V16.45H65.13Z" />
                <rect class="cls-1" x="20.42" y="19" width="42.17" height="42.17" />
                <polygon points="33.5 48.56 35.78 48.56 35.78 46.24 33.45 46.24 33.45 48.56 31.49 48.56 31.49 50.45 33.5 50.45 33.5 48.56" />
                <rect x="49.06" y="43.85" width="2.34" height="2.39" />
                <path d="M53.84,41.51V34.83H51.4V26h2.34V23.61H49.06V26H44.84v2.3H42.43v2.3H40.09v2h-2V25.8H35.79v2.48H33.45v2.3h-2v4.25H29.18v4.7H26.84V53h2.34v2.28h2.31v2.18H51.4V55.17H49.06V52.8H47.13v2.37H33.5V52.84h-2V50.45H29.18V48.57h2.31V46.26H29.18V43.85h2.31v2.39h2V43.85h2.33V41.51H47.13v2.34h1.93V41.51H51.4v2.34h2.44v2.39H51.4v2.33h2.44v1.88H51.4V48.57H49.06V52.8H51.4v2.37h2.44V52.8h2.29V41.51Zm-9.07-4.29V34.83h2.36v2.39Zm6.63,2.34H49.06V37.22H51.4Z" />
            </g>                                               
        </svg>      
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../../../global/eventBus';
import { ChipTypes, Events, SceneNames } from '../../../../global/constants';

export default {
    name: "ChipElement",
    computed: {
        ...mapGetters({
            pluggedChip: 'battle/getLastChip'
        })
    },    
    mounted() {
        EventBus.$on(Events.Left, this.onLeft);
        EventBus.$on(Events.Right, this.onRight);
    },
    beforeDestroy() {
        EventBus.$off(Events.Left);
        EventBus.$off(Events.Right);
    },  
    methods: {  
        onLeft() {
            this.$store.commit('session/setCurrentScene', SceneNames.ChipStatus);
        },
        onRight() {
            if(this.pluggedChip.Type === ChipTypes.Attack) {
                this.$store.commit('session/setCurrentScene', SceneNames.ChipAttackArea);
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.ChipSupportDetails);
            }
        }
    }       
}
</script>

<style scoped lang="scss">
    .cls-1{fill:#fff;}
</style>