<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g id="Time">
                <rect class="cls-1" x="2.92" y="64.51" width="76.89" height="7.45" />
                <rect v-for="item in countDownBars" 
                    :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />
            </g>
            <text class="cls-2" transform="translate(17.93 33.75)">SLOT<tspan x="15" y="18">IN</tspan></text>
        </svg>      
    </g>
</template>

<script>
import EventBus from '../../common/eventBus.js';
import { Events, SceneNames } from '../../common/constants';

export default {
    name: "SlotInScene",
    data () {
        return {
            countDownBars: [
                { id: 1, x: "4.44"},
                { id: 2, x: "12.11"},  
                { id: 3, x: "19.78"},
                { id: 4, x: "27.44"},
                { id: 5, x: "35.11"},
                { id: 6, x: "42.77"},    
                { id: 7, x: "50.44"},
                { id: 8, x: "58.11"},
                { id: 9, x: "65.77"},
                { id: 10, x: "73.44"}                                                                                                                                      
            ],
            interval: null
        }
    },
    mounted() {
        this.registerListeners();
        this.startCountDown();
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.SlotIn, this.onSlotIn);
        },
        unregisterListeners() {
            EventBus.$off(Events.SlotIn);
        },
        startCountDown: function() {
            this.interval = setInterval(() => {
                if(this.countDownBars.length > 0) {
                    this.countDownBars.splice(this.countDownBars.length - 1, 1);

                    if(this.countDownBars.length === 0) {
                        this.$store.commit('session/setCurrentScene', SceneNames.MegaBuster);
                    }
                }
            }, 500);
        },
        onSlotIn(chipPlugged) {
            //TODO: Add validations about CP/First support chip after attack or Just attack
            clearInterval(this.interval);
            this.$store.commit('battle/addChip', chipPlugged);
            this.$store.commit('session/setCurrentScene', SceneNames.ChipStatus);
        }
    }      
}
</script>

<style scoped lang="scss">
.cls-1,.cls-2{fill:#fff;}.cls-2{font-size:15px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>