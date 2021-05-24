<template>
  <g v-html="this.emblem"></g>
</template>

<script>
export default {
    name: "NaviEmblem",
    props: {
        deviceType: String,
        isCoverOpen: Boolean
    }, 
    watch: {
        deviceType() {
            this.importEmblem();
        }
    },     
    data() {
        return {
            emblem: String
        }
    },
    created() {
        this.importEmblem();
    },
    methods: {
        importEmblem() {
            this.emblem = require(`!html-loader!../../../assets/svgs/players/${this.deviceType}/emblem-${this.isCoverOpen ? 'opened' : 'closed'}.svg`);
        }
    }    

}
</script>
