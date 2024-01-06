<template>
    <g id="attacking-group" v-html="this.screenContent">
    </g>  
</template>

<script>
import { TimelineLite } from "gsap";

export default {
    name: "Attack",
    props: {
        elementType: {
            type: String
        }
    },  
    computed: {
        screenContent: function () {
            return this.importAttackSprite();
        }
    },
    mounted() {
        this.attackTimeLine = new TimelineLite({
            repeat: 7,
        });

        this.attackTimeLine.to('#attacking_sprite1', {display: 'block', duration: 0.15,  ease: "none"});
        this.attackTimeLine.set('#attacking_sprite1', {display: 'none'});
        this.attackTimeLine.to('#attacking_sprite2', {display: 'block', duration: 0.15,  ease: "none"});
        this.attackTimeLine.set('#attacking_sprite2', {display: 'none'});
        this.attackTimeLine.to('#attacking_sprite3', {display: 'block', duration: 0.15,  ease: "none"});
        this.attackTimeLine.set('#attacking_sprite3', {display: 'none'});

        this.attackTimeLine.play()
        .then(() => this.$emit('animationEnd'));
    },
    methods: {
        importAttackSprite() {
            return require(`!html-loader!../../../assets/svgs/attacks/${this.elementType.toLowerCase()}.svg`).default;
        }
    }
}
</script>

<style  scoped lang="scss">
#attacking-group ::v-deep {
    #attacking_sprite1, #attacking_sprite2, #attacking_sprite3 {
        display: none;
    }
}
</style>