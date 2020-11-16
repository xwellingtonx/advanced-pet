<template>
  <g>
    <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
      <rect width="83" height="75" rx="3.01" ry="3.01" />
      <rect class="primary-color" x="4.02" y="3.01" width="5.69" height="8.1" />
      <rect class="primary-color" x="12.15" y="3.08" width="4.69" height="8.03" />
      <rect class="primary-color" x="19.27" y="3.08" width="2.25" height="8.03" />
      <rect class="primary-color" x="26.46" y="3.02" width="2.31" height="8.09" />
      <rect class="primary-color" x="40.58" y="3.08" width="2.54" height="8.03" />
      <rect class="primary-color" x="52.79" y="3.01" width="2.29" height="8.1" />
      <rect class="primary-color" x="59.8" y="2.98" width="2.38" height="8.13" />
      <rect class="primary-color" x="64.71" y="2.98" width="4.53" height="8.13" />
      <rect class="primary-color" x="71.74" y="3.03" width="6.41" height="8.08" />
      <rect class="primary-color" x="4" y="63.9" width="5.69" height="8.1" />
      <rect class="primary-color" x="12.13" y="63.97" width="4.69" height="8.03" />
      <rect class="primary-color" x="19.25" y="63.97" width="2.25" height="8.03" />
      <rect class="primary-color" x="26.44" y="63.91" width="2.31" height="8.09" />
      <rect class="primary-color" x="40.56" y="63.97" width="2.54" height="8.03" />
      <rect class="primary-color" x="52.77" y="63.9" width="2.29" height="8.1" />
      <rect class="primary-color" x="59.78" y="63.88" width="2.38" height="8.13" />
      <rect class="primary-color" x="64.69" y="63.88" width="4.53" height="8.13" />
      <rect class="primary-color" x="71.72" y="63.92" width="6.41" height="8.08" />
      <text class="primary-color pet-font" transform="translate(6 35.75)">looking<tspan x="2.5" y="18">Player</tspan></text>
    </svg>
  </g>
</template>

<script>
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events, BattleTypes } from '../../../../global/constants';
import { Player } from '../../common/enemy.js';

export default {
    name: "LookingPlayer",
    mounted() {
        this.registerListeners();

        //Connect to the battle room
        this.$socket.client.emit('connectPlayer', this.$store.state.session);
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    sockets: {
        initializeBattle(room) {
            var secondPlayer = room.players.find(x => x.player.id !== this.$store.state.session.id);

            this.$store.dispatch('battle/startBattle', {
                id: room.id,
                type: BattleTypes.Player,
                player: new Player(this.$store.state.session.id,
                    this.$store.state.session.deviceType,
                    this.$store.state.session.navi.level,
                    this.$store.state.session.navi.hp,
                    this.$store.state.session.navi.cp,
                    this.$store.state.session.navi.element, 
                    this.$store.state.session.navi.at,
                    ""),
                enemy: new Player(secondPlayer.player.id,
                    secondPlayer.player.deviceType,
                    secondPlayer.player.navi.level,
                    secondPlayer.player.navi.hp,
                    secondPlayer.player.navi.cp,
                    secondPlayer.player.navi.element, 
                    secondPlayer.player.navi.at,
                    "")
            });

            this.$store.commit('session/setCurrentScene', SceneNames.BattleStart);
        }
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Cancel, this.onCancel);
        },
        unregisterListeners() {
            EventBus.$off(Events.Cancel);
        },
        onCancel() {
            this.$socket.client.emit('disconnectPlayer', this.$store.state.session.id);
            this.$store.commit('session/setCurrentScene', SceneNames.StandBy);
        }, 
    }            
}
</script>

<style scoped lang="scss">
  .pet-font{ 
    font-size:14px;
  }
</style>