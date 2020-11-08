<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />

            <text class="chip-ok-title" transform="translate(22.04 26.83)">
                Chip<tspan x="2.68" y="18">ok?</tspan>
            </text>
            
            <g class="yes-container" :class="{ selected: isChipOk}">
                <rect x="6.66" y="54.86" width="33" height="15.63" />
                <text transform="translate(8.57 69.33)">Yes</text>
            </g>

            <g class="no-container" :class="{ selected: !isChipOk}">
                <rect x="47.96" y="54.86" width="23.73" height="15.63" />
                <text transform="translate(50 69.33)">No</text>
            </g>
        </svg>        
    </g>
</template>

<script>
import EventBus from '../../../../global/eventBus';
import { SceneNames, Events, BattleTypes, BattleActionTypes, ChipTypes } from '../../../../global/constants';
import { mapState, mapGetters } from 'vuex';
import { getSupportChipEffectById } from '../../common/chipHelper';

export default {
    name: "ChipOk",
    computed: {
        ...mapState({
            lastScene: state => state.session.lastScene,
            battleType: state => state.battle.type,
            player: state => state.battle.player,
            pluggedChips: state => state.battle.chips,
        }),
        ...mapGetters({
            playerCurrentHP: 'battle/getPlayerCurrentHP',
            chipsActions: 'battle/getAllChipsActions'
        })        
    },    
    data() {
        return {
            isChipOk: true
        }
    },
    mounted() {
        this.registerListeners();
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    sockets: {
        playersReady() {
            this.$store.commit('session/setCurrentScene', SceneNames.BattleBoard);
        }
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.setChipIsOk);
            EventBus.$on(Events.Left, this.setChipIsOk);
            EventBus.$on(Events.Confirmation, this.onConfirmation);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Confirmation);
        },
        setChipIsOk() {
            this.isChipOk = this.isChipOk === true ? false : true;
        },
        onConfirmation() {
            var lastChipPlugged = this.pluggedChips[this.pluggedChips.length - 1];

            if(this.isChipOk) {
                if(lastChipPlugged && (lastChipPlugged.CP > this.player.cp || ((this.player.cp - lastChipPlugged.CP) < 0))) {
                    this.$store.commit('battle/removeChip', lastChipPlugged);
                    this.$store.commit('session/setCurrentScene', SceneNames.ChipCPShortage);
                } else {
                    if(!lastChipPlugged || this.lastScene === SceneNames.MegaBuster) { //cannon
                        this.moveToBattle(null);
                    } else if(lastChipPlugged.Type === ChipTypes.Attack) {
                        //If the attack chip was already used in the battle, show the error view.
                        if(this.chipsActions.length > 0 && this.chipsActions.filter(x => x.payload.Id === lastChipPlugged.Id)) {
                            this.$store.commit('battle/removeChip', lastChipPlugged);
                            this.$store.commit('session/setCurrentScene', SceneNames.ChipError);
                        } else {
                            this.moveToBattle(lastChipPlugged);
                        }
                    } else {
            
                        //If any supportChip was already plugged move to error screen
                        if(this.pluggedChips.filter(x => x.Type === ChipTypes.Support).length > 1) {
                            //Move to error screen
                            this.$store.commit('battle/removeChip', lastChipPlugged);
                            this.$store.commit('session/setCurrentScene', SceneNames.ChipError);
                        } else {
                            if(this.battleType === BattleTypes.AI) {
                                //Prevent add the cannon fake chip
                                this.$store.commit('battle/addBattleAction', {
                                    type: BattleActionTypes.ChipUsage,
                                    payload: lastChipPlugged
                                });
                            }

                            this.activeSupportChipEffect(lastChipPlugged);
                            this.$store.commit('battle/decreasePlayerCP', lastChipPlugged.CP);

                            //Redirect to slotin scene
                            this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
                        }
                    }
                }
            } else {
                if(this.lastScene !== SceneNames.MegaBuster) {
                    //Remove last chip added from battle chips
                    this.$store.commit('battle/removeChip', lastChipPlugged);
                }

                //Redirect to slotin scene
                this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
            }
        },
        moveToBattle(lastChipPlugged) {
            if(this.battleType === BattleTypes.AI) {
                //Prevent add the cannon fake chip
                if(lastChipPlugged) {
                    this.$store.commit('battle/addBattleAction', {
                        type: BattleActionTypes.ChipUsage,
                        payload: lastChipPlugged
                    });

                    this.$store.commit('battle/decreasePlayerCP', lastChipPlugged.CP);
                }

                this.$store.commit('session/setCurrentScene', SceneNames.BattleBoard);
            } else {
                this.$socket.client.emit('chipPlugged', this.$store.state.battle.id);
            }            
        },
        activeSupportChipEffect(supportChip) {
            if(supportChip && (supportChip.Id === "107" ||
                supportChip.Id === "108" || supportChip.Id === "109" ||
                supportChip.Id === "110" || supportChip.Id === "111" ||
                supportChip.Id === "112" || supportChip.Id === "113" ||
                supportChip.Id === "114" || supportChip.Id === "115")) {
                    var effect = getSupportChipEffectById(supportChip.Id);
                    var recoversHP = 0;
                    
                    if((this.playerCurrentHP + effect.value) > this.player.hp) {
                        recoversHP = this.player.hp - this.playerCurrentHP;
                    } else {
                        recoversHP = effect.value;
                    }

                    this.$store.commit('battle/addBattleAction', {
                        type: BattleActionTypes.PlayerHP, 
                        value: recoversHP
                    });
                }
        }
    }    
}
</script>

<style scoped lang="scss">
.cls-1{fill:#fff;}
.chip-ok-title {
    font-size:15px;
    font-family:Advanced Pet Font;
}
.no-container, .yes-container {
    font-family:Advanced Pet Font;
    font-size:13px;

    rect {
        fill: #FFF;
    }

    &.selected {
        rect {
            fill: black;
        }
        text {
            fill: #FFF;
        }
    }
}
</style>