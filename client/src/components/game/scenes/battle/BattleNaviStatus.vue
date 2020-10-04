<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />

            <g class="navi-status" v-if="!showValues">
                <rect class="cls-1" x="2.94" y="69.13" width="77.13" height="5.88" />
                <polygon points="3.35 69.13 3.35 71.81 3.35 74.49 6.13 74.49 6.13 71.81 6.13 69.13 3.35 69.13" />
                <polygon points="76.62 69.13 76.62 71.9 76.62 74.68 79.4 74.68 79.4 71.9 79.4 69.13 76.62 69.13" />
                <line class="cls-2" x1="78.55" y1="71.9" x2="4.41" y2="71.9" />
                <line class="cls-2" x1="78.05" y1="71.94" x2="3.81" y2="71.9" />
                <rect x="18.62" y="70.61" width="46.06" height="2.78" />
                <text class="cls-3" transform="translate(17.87 29.75)">Mega<tspan x="5.89" y="18">Man</tspan><tspan x="-11.78" y="36">Status</tspan></text>
                <rect class="cls-1" x="2.94" y="3" width="7.25" height="10" />
                <polygon class="cls-4" points="7.15 6.2 5.27 6.2 5.27 7.12 3.38 7.12 3.38 8.9 5.27 8.9 5.27 9.77 7.15 9.77 7.15 11.56 9.03 11.56 9.03 9.77 9.03 8.01 9.03 7.99 9.03 6.23 9.03 4.44 7.15 4.44 7.15 6.2" />
                <rect class="cls-1" x="72.69" y="3" width="7.25" height="10" />
                <polygon class="cls-4" points="75.63 6.2 77.51 6.2 77.51 7.12 79.4 7.12 79.4 8.9 77.51 8.9 77.51 9.77 75.63 9.77 75.63 11.56 73.75 11.56 73.75 9.77 73.75 8.01 73.75 7.99 73.75 6.23 73.75 4.44 75.63 4.44 75.63 6.2" />
                <rect class="cls-1" x="12.48" y="3.48" width="57.92" height="5.35" />
                <rect class="cls-1" x="25.08" y="9.8" width="32.71" height="1.58" />
                <rect class="cls-1" x="60.79" y="9.8" width="9.6" height="1.58" />
                <rect class="cls-1" x="12.48" y="9.8" width="9.6" height="1.58" />
                <rect x="15.48" y="4.72" width="3" height="3" />
                <rect x="21.59" y="4.72" width="3" height="3" />
                <rect x="27.71" y="4.72" width="3" height="3" />
                <rect x="33.82" y="4.72" width="3" height="3" />
                <rect x="39.94" y="4.72" width="3" height="3" />
                <rect x="46.05" y="4.72" width="3" height="3" />
                <rect x="52.17" y="4.72" width="3" height="3" />
                <rect x="58.28" y="4.72" width="3" height="3" />
                <rect x="64.4" y="4.72" width="3" height="3" />
            </g>
            
            <g class="nav-status-values" v-if="showValues && player !== null">
                <rect class="cls-3" x="3" y="3" width="77" height="69" />
                <text class="status-values" transform="translate(4.87 30.99)">CP</text>
                <text class="status-values svg-text-right-direction" transform="translate(78 30.99)" >{{player.cp}}</text>
                <text class="status-values" transform="translate(4.87 50.1)">HP</text>
                <text class="status-values svg-text-right-direction" transform="translate(78 50.1)" >{{playerHP}}</text>

                <text class="status-values" transform="translate(4.87 70.1)">AT</text>
                <text class="status-values svg-text-right-direction" transform="translate(78 70.1)" >{{player.at}}</text>

                <polygon points="75.41 6.18 77.29 6.18 77.29 7.1 79.17 7.1 79.17 8.88 77.29 8.88 77.29 9.75 75.41 9.75 75.41 11.53 73.52 11.53 73.52 9.75 73.52 7.99 73.52 7.96 73.52 6.2 73.52 4.42 75.41 4.42 75.41 6.18" />
            </g>
        </svg>     
    </g> 
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events } from '../../../../global/constants';

export default {
    name: "BattleNaviStatus",
    data () {
        return {
            showValues: false,
            playerHP: 0
        }
    },
    computed: {
        ...mapState({
            player: state => state.battle.player,
        }),
        ...mapGetters({
            playerDamageActions: 'battle/getAllPlayerDamageActions'
        })
    },   
    mounted() {
        this.registerListeners();

        this.playerHP = this.player.hp;
        this.playerDamageActions.forEach((item) => {
            this.playerHP += item.value
        });
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.onRight);
            EventBus.$on(Events.Left, this.onLeft);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
        },
        onRight() {
            if(!this.showValues) {
                this.$store.commit('session/setCurrentScene', SceneNames.ChipStatus);
            } else {
                this.showValues = false;
            }
        },
        onLeft() {
            this.showValues = true;
        }
    }
}
</script>

<style scoped lang="scss">
    .cls-1,.cls-3{fill:#fff;}
    .cls-2{fill:none;}
    .cls-3 {font-size:15px;font-family:Advanced-PET-Font, Advanced PET Font;}
    .cls-4{fill:#000501;}

    .status-values{font-size:13px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>