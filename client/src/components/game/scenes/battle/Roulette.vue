<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <path d="M70.18,21.1V16.35H67.79V11.67H63.08V9.59h-4.6V7.48h-34V9.59H20.33v2.08H15.71v4.52H13.19V21.1H10.93v34h2.26v4.57h2.33v4.53h4.7v2.27h4.24v1.84h34V66.44h4.91V64.17h4.53V59.64h2.26V55.07h1.89v-34Zm0,31.72H67.92v4.47H65.34v4.52H60.81v2.36H56.66v2.27H27V64.17H22.36V61.81H18.07V57.29H15.52V52.82H13.19V23.32h2.52V18.84H18V14.17h4.39v-2.5H27V9.59H56.47v2.08h4.28v2.5H65.4v4.6h2.39V23.4h2.39Z" />
            <path d="M64.92,24.32V20.44H63V16.61H59.11V14.92H55.36V13.2H27.64v1.72H24.22v1.69H20.45v3.7H18.39v4H16.54V52.05h1.85v3.73h1.9v3.7h3.83v1.85h3.47v1.5H55.36v-1.5h4V59.48h3.7v-3.7h1.85V52.05h1.54V24.32Zm0,25.89H63.07v3.65H61v3.69h-3.7v1.93H53.88v1.85H29.69V59.48H25.88V57.55H22.37V53.86H20.29V50.21h-1.9V26.13h2.06V22.47h1.84V18.65h3.59v-2h3.77V14.92H53.72v1.69h3.49v2H61v3.77h2v3.77h2Z" />
            <polygon points="49.74 57.14 49.74 54.81 47.39 54.81 47.39 52.61 45.42 52.61 45.42 50.6 42.88 50.6 42.88 25.45 45.27 25.45 45.27 23.44 47.22 23.44 47.22 21.23 49.55 21.23 49.55 18.91 53.7 18.91 53.7 16.61 29.65 16.61 29.65 18.91 33.95 18.91 33.95 21.23 35.97 21.23 35.97 23.44 38.17 23.44 38.17 25.45 40.74 25.45 40.74 50.6 38.25 50.6 38.25 52.61 36.03 52.61 36.03 54.81 34 54.81 34 57.14 29.66 57.14 29.66 59.43 53.92 59.43 53.92 57.14 49.74 57.14" />
            
            <polygon v-if="this.turnType === 'attack' "  points="36.15 27.65 36.15 25.57 33.89 25.57 33.89 23.5 31.62 23.5 31.62 21.23 29.11 21.23 29.11 18.97 26.84 18.97 26.84 21.23 24.58 21.23 24.58 25.57 22.5 25.57 22.5 30.39 20.43 30.39 20.43 46.18 22.5 46.18 22.5 48.51 24.58 48.51 24.58 55.2 26.84 55.2 26.84 57.28 29.11 57.28 29.11 55.2 31.62 55.2 31.62 52.95 33.89 52.95 33.89 50.61 36.15 50.61 36.15 48.51 38.35 48.51 38.35 27.65 36.15 27.65" />
            <polygon v-if="this.turnType === 'defense'" points="47.54 27.65 47.54 25.57 49.8 25.57 49.8 23.5 52.07 23.5 52.07 21.23 54.58 21.23 54.58 18.97 56.85 18.97 56.85 21.23 59.11 21.23 59.11 25.57 61.19 25.57 61.19 30.39 63.26 30.39 63.26 46.18 61.19 46.18 61.19 48.51 59.11 48.51 59.11 55.2 56.85 55.2 56.85 57.28 54.58 57.28 54.58 55.2 52.07 55.2 52.07 52.95 49.8 52.95 49.8 50.61 47.54 50.61 47.54 48.51 45.34 48.51 45.34 27.65 47.54 27.65" />
        </svg>      
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events, TurnTypes, BattleTypes } from '../../../../global/constants';
import { mapState } from 'vuex'
import { Howl } from 'howler';

export default {
    name: "Roulette",
    computed: {
        ...mapState({
            battleId: state => state.battle.id,
            battleType: state => state.battle.type
        })
    },    
    data() {
        return {
            turnType: "",
            inteval: null,
            sound: null
        }
    },
    mounted() {
        this.registerListeners();

        if(this.$store.state.session.sound) {
            this.sound = new Howl({
                    src: require("../../../../assets/sounds/roulette.mp3"),
                    volume: 1,
                    loop: true
                });
                
            this.sound.play();
        }
        

        this.turnType = TurnTypes.Attack;

        this.inteval = setInterval(this.changeTurnType, 200);
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    sockets: {
        turnRouletteResult(turnType) {
            //GO to turn type scene
            if(turnType === TurnTypes.Attack) {
                this.$store.commit('battle/setTurnType', TurnTypes.Attack);
            } else {
                this.$store.commit('battle/setTurnType', TurnTypes.Defense);
            }

            this.$store.commit('session/setCurrentScene', SceneNames.RoundType);
        }
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Confirmation, this.onConfirmation);
        },
        unregisterListeners() {
            EventBus.$off(Events.Confirmation);
        },
        onConfirmation() {
            clearInterval(this.inteval);

            if(this.sound !== null) {
                this.sound.stop();
            }
            console.log(this.battleType);
            if(this.battleType === BattleTypes.AI) {
                this.$store.commit('battle/setTurnType', this.turnType);

                if(this.turnType === TurnTypes.Attack) {
                    this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
                } else {
                  this.$store.commit('session/setCurrentScene', SceneNames.EnemyAttack);
                }
            } else {
                //Player battle
                this.$socket.client.emit('turnRoulette', this.battleId);
            }
        },
        changeTurnType() {
            this.turnType = this.turnType === TurnTypes.Attack ? TurnTypes.Defense : TurnTypes.Attack;
        }
    }        
}
</script>

<style scoped lang="scss">
    .cls-1{fill:#fff;}
</style>