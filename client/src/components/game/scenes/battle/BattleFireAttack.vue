<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g>
                <g :class="{ 'flip': turnType === 'defense' }">
                    <rect class="primary-color" x="3" y="3" width="77" height="69" />

                    <navi-attack v-if="this.currentAnimation == 'navi'" :deviceType="this.deviceType" @animationEnd="this.naviAnimEnd"> </navi-attack>

                    <attack v-if="this.currentAnimation == 'attack'" :elementType="this.getAttackElement()" @animationEnd="this.attackAnimEnd" />

                    <attack-explosion v-if="this.currentAnimation == 'explosion'" :elementType="this.getAttackElement()" @animationEnd="this.explosionAnimEnd" />
                </g>                
            </g>

        </svg>      
    </g>
</template>

<script>
import { Howl } from 'howler';
import EventBus from '../../../../global/eventBus.js';
import { BattleTypes, ElementTypes, Events, SceneNames, TurnTypes } from '../../../../global/constants';
import { mapState, mapGetters } from 'vuex'
import NaviAttack from '../../ui/NaviAttack'
import Attack from '../../ui/Attack'
import AttackExplosion from '../../ui/Explosion'


export default {
    name: "BattleFireAttack",  
    components: {
        NaviAttack, Attack, AttackExplosion
    },
    data() {
        return {
            attackSound: null,
            currentAnimation: ""
        }
    },
    computed: {
        ...mapState({
            deviceType: state => state.session.deviceType,
            turnType: state => state.battle.turnType,
            isAttackHit: state => state.battle.isAttackHit,
            battleType: state => state.battle.type,
            enemy: state => state.battle.enemy
        }),
        ...mapGetters({
            pluggedChip: 'battle/getLastChip'
        })    
    },
    mounted() {
        EventBus.$on(Events.Confirmation, this.onConfirmation);

        if(this.battleType === BattleTypes.AI) {
            if(this.turnType === TurnTypes.Defense) {
                this.currentAnimation = "attack"
            } else {
                this.currentAnimation = "navi"
            }
        } else {
            this.currentAnimation = "navi"
        }
        this.playAttackSound();
    },
    beforeDestroy() {
        EventBus.$off(Events.Confirmation);
    },
    sockets: {
        changeScene() {
            this.showResult();
        }
    },    
    methods: {
        naviAnimEnd() {
            this.currentAnimation = "attack";
        },
        attackAnimEnd() {
            this.currentAnimation = "explosion";
        },
        explosionAnimEnd() {
            this.showResult();
        },
        getAttackElement() {
            //Get attack element from virus/navis
            if(this.battleType === BattleTypes.AI && this.turnType === TurnTypes.Defense) {
                return this.enemy.element;
            } else {
                //Get attack element from player/battle chipss
                if(this.pluggedChip) {
                    return this.pluggedChip.Element
                } else {
                    //Using cannon
                    return ElementTypes.Neutral
                }
            }
        },
        playAttackSound() {
            setTimeout(() => {
                if(this.$store.state.session.sound) {
                    this.attackSound = new Howl({
                        src: require("../../../../assets/sounds/attack.mp3"),
                        volume: 0.1,
                        loop: false
                    });

                    this.attackSound.play();
                }
            }, 100);
        },
        showResult() {
            if(this.attackSound !== null) {
                this.attackSound.stop();
            }

            if(this.isAttackHit) {
                this.$store.commit('session/setCurrentScene', SceneNames.BattleAttackHit);
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.BattleAttackMiss);
            }
        },
        onConfirmation() {
            if(this.battleType === BattleTypes.Player) {
                this.$socket.client.emit('changeSceneRequest', this.$store.state.battle.id);
            } else {
               this.showResult();
            }
        }
    }
}
</script>

<style scoped lang="scss">
.flip{ 
    -webkit-transform:scaleX(-1);
    -moz-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    -ms-transform:scaleX(-1);
    transform:scaleX(-1);

    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -o-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
}

</style>