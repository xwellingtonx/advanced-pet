<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-html="this.screenContent" />    
        </svg>
    </g>
</template>

<script>
import { Events, SceneNames } from '../../../../global/constants.js';
import EventBus from '../../../../global/eventBus.js';
import { mapState } from 'vuex';

export default {
    name: "Tournament",
    computed: {
         ...mapState({
            currentStage: state => state.session.currentStage
        })       
    },    
    data() {
        return {
            screenContent: "",
            currentSvg: "",
        }
    },
    mounted() {
        EventBus.$on(Events.Confirmation, this.onConfirmation);

        this.currentSvg = "tournament";
        this.screenContent = this.importScreen(this.currentSvg);
    },
    beforeDestroy() {
        EventBus.$off(Events.Confirmation);
    },    
    methods: {
        importScreen(screen) {
            return require(`!html-loader!../../../../assets/svgs/scenes/${screen}.svg`);
        },
        onConfirmation() {
            if(this.currentSvg === "tournament") {
                this.currentSvg = "tournament-stage";
                var svg = this.importScreen(this.currentSvg);

                svg = svg.replace('{numberText}', this.currentStage);

                var numberDesc = "";
                if(this.currentStage ===  1) {
                    numberDesc = "st";
                } else if(this.currentStage === 2) {
                    numberDesc = "nd";
                } else {
                    numberDesc = "th";
                }

                svg = svg.replace('{numberDesc}', numberDesc);

                this.screenContent = svg
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.Enemy);
            }
        }
    }
}

</script>

<style scoped lang="scss">
   
</style>