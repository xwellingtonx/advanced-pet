<template>
  <g>
    <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
        <rect width="83" height="75" rx="3.01" ry="3.01" />
        <rect class="cls-1" x="3" y="3" width="77" height="69" />
        <g class="speak-animation">
            <g id="face-mouth-closed" v-html="this.frontFace">
            </g>           
            <g id="face-mouth-opened" v-html="this.talkFace">
            </g>                 
        </g>                         
        <rect x="2" y="2" width="79" height="18.67" />
        <text class="greeting-text" transform="translate(5.75 18.33)">{{this.notification.message}}</text>
    </svg>   
  </g>
</template>

<script>
import { Howl } from 'howler';
import { TimelineLite } from "gsap";
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events, NotificationTypes } from '../../../../global/constants';
import { mapState } from 'vuex';

export default {
  name: "Notification",
  data() {
    return {
      moveScene: false,
      virusSound: null,
      virusTimeout: null,
      frontFace: "",
      talkFace: ""
    }
  },
  computed: {
    ...mapState({
      notification: state => state.session.notification,
      deviceType: state => state.session.deviceType
    })       
  },
  created() {
    this.talkFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/talk-face.svg`);
    this.frontFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/front-face.svg`);
  },
  mounted() {
    this.registerListeners();

    if(this.notification.type === NotificationTypes.Virus) {
      if(this.$store.state.session.sound) {
        this.virusSound = new Howl({
          src: require("../../../../assets/sounds/virus-alert.mp3")
        });
        
        this.virusSound.play();
      }

      /*The virus will escape unless
      MegaMan is activated within one minute
      after receiving the Virus Detected prompt.*/
      this.virusTimeout = setTimeout(() => {
        this.onCancel();
      }, 60000);
    }

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
      EventBus.$on(Events.Cancel, this.onCancel);
    },
    unregisterListeners() {
      EventBus.$off(Events.Confirmation);
      EventBus.$off(Events.Cancel);
    },
    onConfirmation() {
      if(this.notification.type === NotificationTypes.Virus) {
        clearTimeout(this.virusTimeout);
        this.stopVirusSound();
        this.$store.commit('session/setCurrentScene', SceneNames.PlugIn);
      } else if(this.notification.type === NotificationTypes.Tournament) {
        this.$store.commit('session/setCurrentScene', SceneNames.Tournament);
      }
    },
    onCancel() {
      if(this.notification?.type === NotificationTypes.Virus) {
        this.stopVirusSound();
        this.$store.commit('session/setNotification', null);
        this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
      }
    },
    startSpeakingAnimation() {
      var timeLine = new TimelineLite({
        repeat: -1,
      });

      timeLine.to('#face-mouth-closed', {display: 'none', duration: 0.5,  ease: "none"});
      timeLine.to('#face-mouth-opened', {display: 'block', duration: 0.5,  ease: "none"});
      timeLine.play();
    },
    stopVirusSound() {
      if(this.virusSound != null) {
        this.virusSound.stop();
      }
    }
  }
}
</script>

<style scoped lang="scss">
#face-mouth-opened {
  display: none;
}

.cls-1,.greeting-text, .greeting-text-2{fill:#fff;}.cls-2{fill:#000501;}
.greeting-text, .greeting-text-2{font-size:13px;font-family:Advanced-PET-Font, Advanced PET Font;}
</style>