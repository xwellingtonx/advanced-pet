<template>
    <g class="hp-bar">
        <rect x="2.91" y="62.02" width="77.18" height="9.98" />
        <rect class="primary-color" x="3" y="64.55" width="77.18" height="7.45" />
        <rect v-for="item in currentHPBars" 
            :key="item.id" :x="item.x" y="64.79" width="4.85" height="6.88"  />                
    </g>
</template>

<script>

export default {
    name: "HealthStatus",
    data() {
        return {
            bars: [
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
            currentHPBars: []
        }
    },
    mounted() {
        this.currentHPBars = this.bars;
    },
    methods: {
        updateHealth(hp, damages) {
            var totalDamage = 0;
            if(damages.length > 0) {
                damages.forEach((item) => {
                    totalDamage += item.value
                });
            }

            //Show HP after damage
            var totalHP = (parseInt(hp) + parseInt(totalDamage)) / hp;
            if(totalHP > 0 &  totalHP < 1) {
                //Remove bars based on the hp percentage
                var leftBars = Math.round(totalHP * hp);
                var endIndex = leftBars - 1;
                this.currentHPBars = this.bars.slice(0, endIndex);

            } else if( totalHP <= 0) {
                this.currentHPBars = [];
            }            
        },
        getHealth() {
            return this.currentHPBars.length;
        }
    }
}
</script>

<style  scoped lang="scss">
</style>