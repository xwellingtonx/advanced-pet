<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
			<rect width="83" height="75" rx="3.01" ry="3.01"/>
			<rect x="3" y="3" width="77" height="69"/>
			<rect class="primary-color" x="15.43" y="14.02" width="52.24" height="52.24"/>
			<rect x="20.55" y="19.13" width="41.9" height="41.9"/>

			<g class="checkered-area" 
                v-for="item in this.checkeredAreas" :key="item.id" 
                :style="{ transform: 'translate('+ item.posX+'px,'+ item.posY + 'px)'}">
				<polygon class="primary-color" points="25.33 28.72 25.33 26.32 22.94 26.32 22.94 28.72 20.55 28.72 20.55 31.11 22.95 31.11 22.95 28.72 25.33 28.72"/>
				<polygon class="primary-color" points="27.72 28.72 25.34 28.72 25.34 31.11 27.73 31.11 27.73 28.72 30.11 28.72 30.11 26.32 27.72 26.32 27.72 28.72"/>
				<polygon class="primary-color" points="20.55 23.93 20.55 21.53 22.94 21.53 22.94 19.14 20.55 19.14 20.55 26.32 22.94 26.32 22.94 23.93 20.55 23.93"/>
				<rect class="primary-color" x="25.34" y="19.14" width="2.39" height="2.39"/>
				<rect class="primary-color" x="25.33" y="23.93" width="2.39" height="2.39"/>
				<rect class="primary-color" x="22.95" y="21.53" width="2.39" height="2.39"/>
				<path class="primary-color" d="M30.12,19.14v2.39H27.73v2.4h2.39v2.39h2.39v2.4H30.12v2.39h2.4v-12Zm2.4,4.79h-2.4v-2.4h2.4Z"/>
			</g>
			<polygon class="primary-color" points="7.71 6.18 5.83 6.18 5.83 7.1 3.95 7.1 3.95 8.88 5.83 8.88 5.83 9.75 7.71 9.75 7.71 11.53 9.6 11.53 9.6 9.75 9.6 7.99 9.6 7.96 9.6 6.2 9.6 4.42 7.71 4.42 7.71 6.18"/>
			<path class="primary-color" d="M62.41,46.07H50.49v-12h12v-3h-12V19.31h0v-.18h-3v.18h0v11.8h-12v-12h-3v12h-12v3h12v12h-12v3h12V61h3v-12h12V61h3v-12h12v-3Zm-14.92,0h-12v-12h12Z"/>
        </svg>      
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../../../global/eventBus.js';
import { Events, SceneNames } from '../../../../global/constants';
import { getChipAttackArea } from '../../common/chipHelper';


export default {
    name: "ChipAttackArea",
    computed: {
        ...mapGetters({
            pluggedChip: 'battle/getLastChip'
        })
    },    
    data () {
        return {
            checkeredAreas: []
        }
    },
    mounted() {
        EventBus.$on(Events.Left, this.onLeft);
    
        if(this.pluggedChip) {
            var chipArea = getChipAttackArea(this.pluggedChip);

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    
                    if(chipArea[i][j] === 1) {
                        //Add one checkered area with the correct position to the list (15 px)
                        this.checkeredAreas.push({
                            id: `${i}_${j}`,
                            posX: j * 15,
                            posY: i * 15
                        });
                    }
                }
            }
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
</style>