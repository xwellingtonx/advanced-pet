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
import { SceneNames, Events, BattleTypes } from '../../../../global/constants';
import { mapState } from 'vuex';

export default {
    name: "ChipOk",
    computed: {
        ...mapState({
            battleType: state => state.battle.type,
            battleChips: state => state.chips
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
            if(this.isChipOk) {
                if(this.battleType === BattleTypes.AI) {
                    this.$store.commit('session/setCurrentScene', SceneNames.BattleBoard);
                } else {
                    this.$socket.client.emit('chipPlugged', this.$store.state.battle.id);
                }
            } else {
                //Remove last chip added from battle chips
                this.$store.commit('battle/removeChip', this.battleChips.length - 1);

                //Redirect to slotin scene
                this.$store.commit('session/setCurrentScene', SceneNames.SlotIn);
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