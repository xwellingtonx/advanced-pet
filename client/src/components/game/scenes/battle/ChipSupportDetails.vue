<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" y="4.87" width="83" height="3.99" />
            <path class="primary-color" d="M.42,73.5A3,3,0,0,0,3,75H80a3,3,0,0,0,2.59-1.5Z" />
            <path class="primary-color" d="M.42,1.5A3,3,0,0,1,3,0H80a3,3,0,0,1,2.59,1.5Z" />
            <rect class="primary-color" y="67.5" width="83" height="3.47" />
            <rect class="primary-color" y="61.5" width="83" height="3.47" />
            <rect class="primary-color" y="11.96" width="83" height="47.37" />
            <text v-if="chipDescription.length > 0" class="pet-font" 
                x="50%" y="32%" dominant-baseline="middle" text-anchor="middle">
                {{this.chipDescription[0]}} 
                <tspan x="50%" y="53%">{{this.chipDescription[1]}} </tspan>
                <tspan x="50%" y="73%">{{this.chipDescription[2]}}
                    <tspan v-if="this.chipDescription.length === 4"> {{this.chipDescription[3]}}</tspan>
                </tspan>
            </text>
        </svg>      
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../../../global/eventBus.js';
import { Events, SceneNames } from '../../../../global/constants';
import { getSupportChipEffectById } from '../../common/chipHelper';


export default {
    name: "ChipSupportDetails",
    computed: {
        ...mapGetters({
            pluggedChip: 'battle/getLastChip'
        })
    },    
    data () {
        return {
            chipDescription: []
        }
    },
    mounted() {
        EventBus.$on(Events.Left, this.onLeft);
    
        var chipEffect = getSupportChipEffectById(this.pluggedChip.Id);
        if(chipEffect) {
            this.chipDescription = chipEffect.description.split(" ");
        }
    },
    beforeDestroy() {
        EventBus.$off(Events.Left);
    },  
    methods: {  
        onLeft() {
            this.$store.commit('session/setCurrentScene', SceneNames.ChipElement);
        }
    }       
}
</script>

<style scoped lang="scss">
.pet-font {
    font-size:12px;
}
</style>