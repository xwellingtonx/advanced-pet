<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color"  x="3" y="3" width="77" height="69" />
            <g transform="matrix(1.3,0,0,1.3,-15.9,4.1)" v-html="this.screenContent" />
        </svg>
    </g>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "NaviSelection",
    computed: {
        ...mapState({
            deviceType: state => state.session.deviceType
        })      
    },
    watch: {
        deviceType() {
            this.importNavi();
        }
    },
    data() {
        return {
            screenContent: ""
        }
    },
    mounted() {
        this.importNavi();
    },
    methods: {
        importNavi() {
            this.screenContent = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/attack-pose.svg`);
        }
    }
}
</script>
