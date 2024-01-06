<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="primary-color" x="3" y="3" width="77" height="69" />
            <g class="speak-animation">
                <g id="face-mouth-closed" v-html="this.frontFace"></g>           
                <g id="face-mouth-opened" v-html="this.talkFace"></g>                 
            </g>                         
            <rect x="2" y="2" width="79" height="18.67" />
            <text class="primary-color greeting-text" transform="translate(5.75 18.33)">{{this.greetingText}}</text>
        </svg>        
    </g>
</template>

<script>
import { mapState } from 'vuex';
import { TimelineLite } from "gsap";
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events } from '../../../../global/constants';

export default {
    name: "Greeting",
    computed: {
         ...mapState({
            deviceType: state => state.session.deviceType,
        })       
    },    
    data() {
        return {
            greetingText: "",
            moveScene: false,
            talkFace: "",
            frontFace: ""
        }
    },
    created() {
        this.talkFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/talk-face.svg`).default;
        this.frontFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/front-face.svg`).default;
    },
    mounted() {
        this.greetingText = `Hi I'm ${this.deviceType}`;
        this.registerListeners();

        var title1TimeLine = new TimelineLite({
                repeat: -1
            });

        title1TimeLine
            .set('.greeting-text', {x: 90})
            .to('.greeting-text',{ x: -114, duration: 3, ease: "none"});

        this.startSpeakingAnimation();
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Confirmation, this.onConfirmation);
        },
        unregisterListeners() {
            EventBus.$off(Events.Confirmation);
        },
        onConfirmation() {
            
            if(!this.moveScene) {
                this.greetingText = "Set the time?";
                this.moveScene = true;
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.OptionTime);
            }
        },       
        startSpeakingAnimation() {
            var timeLine = new TimelineLite({
                paused: true,
                repeat: -1,
            });

            timeLine.to('#face-mouth-closed', {display: 'none', duration: 0.5,  ease: "none"});
            timeLine.to('#face-mouth-opened', {display: 'block', duration: 0.5,  ease: "none"});

            timeLine.play();
        }
    }
}
</script>

<style scoped lang="scss">
#face-mouth-opened {
    display: none;
}
.greeting-text {
    font-size:13px;
    font-family:Advanced-PET-Font, Advanced PET Font;
}
</style>