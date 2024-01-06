<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <g v-if="!this.isSadAnimation" class="default-standby">
                <g id="standby-face-center" v-html="this.frontFace">
                </g> 
                <g id="standby-face-left" v-html="this.leftFace">
                </g>            
                <g id="standby-face-right" v-html="this.rightFace">
                </g> 
            </g>
            <g v-if="this.isSadAnimation" class="lose-standby">
                <g id="sad-standby-close-mouth" v-html="this.frontFace">
                </g>   
                <g id="sad-standby-open-mouth" v-html="this.sadFace">
                </g>                            
            </g>                             
            <rect class="cls-2" x="2" y="2" width="79" height="18.67" />
            <text class="standby-text" transform="translate(9 18.33)">
                <tspan x="0" >{{this.timeNow.substring(0, 1)}}</tspan>
                <tspan x="15" >{{this.timeNow.substring(1, 2)}}</tspan>
                <tspan x="30" >{{this.timeNow.substring(2, 3)}}</tspan>
                <tspan x="40" >{{this.timeNow.substring(3, 4)}}</tspan>
                <tspan x="55" >{{this.timeNow.substring(4, 5)}}</tspan>
            </text>
        </svg>        
    </g>
</template>

<script>
import { TimelineLite } from "gsap";
import { mapState } from 'vuex';
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events, NotificationTypes } from '../../../../global/constants';

export default {
    name: "StandBy",
    computed: {
         ...mapState({
            timeNow: state => state.session.time,
            naviRecovery: state => state.session.navi.recovery,
            notification: state => state.session.notification,
            deviceType: state => state.session.deviceType
        })       
    },
    data() {
        return {
            isSadAnimation: false,
            frontFace: "",
            leftFace: "",
            rightFace: "",
            sadFace: "",
        }
    },
    created() {
        this.frontFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/front-face.svg`).default;
        this.leftFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/left-face.svg`).default;
        this.rightFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/right-face.svg`).default;
        this.sadFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/sad-face.svg`).default;
    },
    mounted() {
        this.registerListeners();

        if(this.naviRecovery === 100) {
            this.isSadAnimation = false;
            this.startDefaultAnimation();
            
            if(this.notification !== null && this.notification.type == NotificationTypes.Tournament) {
                setTimeout(() => {
                    this.$store.commit('session/setCurrentScene', SceneNames.Notification);
                }, 2000);
            }

        } else {
           this.isSadAnimation = true;
           //timeout to wait render the elements
           setTimeout(() => {
                this.startDamageReceivedAnimation();
           }, 10);
        }
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.moveToStatusScene);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
        },
        moveToStatusScene() {
            this.$store.commit('session/setCurrentScene', SceneNames.NaviStatus);
        },       
        startDefaultAnimation() {
            var timeLine = new TimelineLite({
                paused: true,
                repeat: -1,
            });

            timeLine.to('#standby-face-center', {display: 'none', duration: 1,  ease: "none"});
            timeLine.to('#standby-face-right', {display: 'block', duration: 1,  ease: "none"});
            timeLine.set('#standby-face-right', {display: 'none'});
            timeLine.to('#standby-face-center', {display: 'block', duration: 1,  ease: "none"});
            timeLine.set('#standby-face-center', {display: 'none'});
            timeLine.to('#standby-face-left', {display: 'block', duration: 1,  ease: "none"});

            timeLine.play();
        },
        startDamageReceivedAnimation() {
            var timeLine = new TimelineLite({
                paused: true,
                repeat: -1,
            });

            timeLine.to('#sad-standby-close-mouth', {display: 'none', duration: 0.5,  ease: "none"});
            timeLine.to('#sad-standby-open-mouth', {display: 'block', duration: 0.5,  ease: "none"});

            timeLine.play();
        }
    }
}
</script>

<style scoped lang="scss">
    #standby-face-right, #standby-face-left, #standby-face-open-mouth, #sad-standby-open-mouth {
        display: none;
    }

.cls-1,.standby-text, .standby-text-2{fill:#fff;}.cls-2{fill:#000501;}
.standby-text, .standby-text-2{font-size:13px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>