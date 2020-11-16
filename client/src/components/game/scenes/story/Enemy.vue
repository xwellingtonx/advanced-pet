<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-html="this.screenContent" />
        </svg>
    </g>
</template>

<script>
import { Howl } from 'howler';
import { SceneNames, NotificationTypes, Events, BattleTypes } from  '../../../../global/constants'
import { mapState } from 'vuex';
import EventBus from '../../../../global/eventBus.js';
import { Player } from '../../common/enemy.js';
const UUID = require('uuid-random');
import { TimelineLite } from "gsap";

export default {
    name: "Enemy",
    computed: {
        ...mapState({
            notification: state => state.session.notification
        })      
    },
    data() {
        return {
            screenContent: "",
            currentSvg: ""
        }
    },
    mounted() {
        this.registerListeners();

        if(this.notification.type === NotificationTypes.Virus) {
            this.importVirus(this.notification.object.image);
        } else if(this.notification.type === NotificationTypes.Tournament) {
            if(this.notification.object.operatorImage) {
                this.importOperator(this.notification.object.operatorImage)
            } else {
                this.importBoss(this.notification.object.image)
            }
        }
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
          EventBus.$on(Events.Confirmation, this.onConfirmation);
          EventBus.$on(Events.Right, this.onRight);
          EventBus.$on(Events.Left, this.onLeft);
        },
        unregisterListeners() {
          EventBus.$off(Events.Confirmation);
          EventBus.$off(Events.Right);
          EventBus.$off(Events.Left);
        },
        onConfirmation() {
            if(this.currentSvg === "operator") {
                this.importBoss(this.notification.object.image);
            } else {
                this.$store.dispatch('battle/startBattle', {
                    id: UUID(),
                    type: BattleTypes.AI,
                    player: new Player(this.$store.state.session.id,
                        this.$store.state.session.deviceType,
                        this.$store.state.session.navi.level,
                        this.$store.state.session.navi.hp,
                        this.$store.state.session.navi.cp,
                        this.$store.state.session.navi.element, 
                        this.$store.state.session.navi.at,
                        ""),
                    enemy: this.notification.object
                });

                //Remove notification from sessions
                this.$store.commit('session/setNotification', null);
                this.$store.commit('session/setCurrentScene', SceneNames.BattleStart);
            }
        },
        onRight() {
            if(this.currentSvg === "virus" || this.currentSvg === "boss") {
                this.importEnemyStatus(this.notification.object.name,
                    this.notification.object.level);
            } else if(this.currentSvg === "enemyStatus") {
                this.importEnemyElement(this.notification.object.element);
            } else if(this.currentSvg === "enemyElement") {
                if(this.notification.type === NotificationTypes.Virus) {
                    this.importVirus(this.notification.object.image);
                } else if(this.notification.type === NotificationTypes.Tournament) {
                    this.importBoss(this.notification.object.image);
                }
            }
        },
        onLeft() {
            if(this.currentSvg === "enemyStatus") {
                if(this.notification.type === NotificationTypes.Virus) {
                    this.importVirus(this.notification.object.image);
                } else if(this.notification.type === NotificationTypes.Tournament) {
                    this.importBoss(this.notification.object.image);
                }
            } else if(this.currentSvg === "enemyElement") {
                this.importEnemyStatus(this.notification.object.name, this.notification.object.level);
            }
        }, 
        playEnemySound() {
            if(this.$store.state.session.sound) {
                var sound = new Howl({
                    src: require("../../../../assets/sounds/virus-shows.mp3"),
                    volume: 1
                });
                
                sound.play();
            }
        },  
        startVirusNameAnim() {
            //Use the timeout just to give time to vuejs render the HTML
            setTimeout(() => {
                var title1TimeLine = new TimelineLite({
                    repeat: -1
                });

                title1TimeLine
                .set('#enemyName', {x: 90})
                .to('#enemyName',{ x: -80, duration: 3, ease: "none"});                
            }, 10);
        }, 
        importBoss(image) {
            this.playEnemySound();

            this.currentSvg = "boss";
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/bosses/${image}`);
        },   
        importOperator(image) {
            this.currentSvg = "operator";
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/operators/${image}`);
        },  
        importVirus(image) {
            this.playEnemySound();

            this.currentSvg = "virus";
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${image}`);
        },
        importEnemyStatus(name, level) {
            //Import using html loarder
            //TODO: The name is not static needs to move like in StandBy
            this.currentSvg = "enemyStatus";
            var template = require("!html-loader!../../../../assets/svgs/scenes/enemy-status.svg");
            template = template.replace('{name}', name);
            template = template.replace('{level}', level);
            this.screenContent = template;
            this.startVirusNameAnim();
        },
        importEnemyElement(element) {
            this.currentSvg = "enemyElement";
            this.screenContent =  require(`!html-loader!../../../../assets/svgs/elements/${(element.toLowerCase())}.svg`);
        }
    }
}
</script>

<style scoped lang="scss">

</style>