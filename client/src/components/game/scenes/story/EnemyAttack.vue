<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <g v-html="this.screenContent" />

            <rect class="default-color" x="2.91" y="2.93" width="77.18" height="17.67" />
            <text class="primary-color pet-font" transform="translate(10.95 18.26)">Attack</text>
        </svg>
    </g>
</template>

<script>
import { BattleActionTypes, ElementTypes, EnemyTypes, Events, SceneNames } from  '../../../../global/constants'
import { mapState, mapGetters } from 'vuex';
import EventBus from '../../../../global/eventBus.js';
import { getSupportChipEffectById } from '../../common/chipHelper';

export default {
    name: "EnemyAttack",
    computed: {
        ...mapState({
            enemy: state => state.battle.enemy,
            player: state => state.battle.player
        }),
        ...mapGetters({
            supportChip: 'battle/getSupportChip'
        })               
    },
    data() {
        return {
            screenContent: "",
            fireTimeout: null
        }
    },
    mounted() {
        EventBus.$on(Events.Confirmation, this.onConfirmation);

        if(this.enemy.type === EnemyTypes.Virus) {
            this.importVirus(this.enemy.image);
        } else {
            this.importBoss(this.enemy.image);
        }

        var time = 3000;

        if(this.supportChip && this.supportChip.Id === "121") {
            time = getSupportChipEffectById(this.supportChip.Id).value;
        }

        this.fireTimeout = setTimeout(() => {
            this.onConfirmation();
        }, time);
    },
    beforeDestroy() {
        EventBus.$off(Events.Confirmation);
    },
    methods: {
        onConfirmation() {
            if(this.fireTimeout !== null) {
                clearTimeout(this.fireTimeout);
            }

            var hitPercentage = 0;
            if(this.enemy.type === EnemyTypes.Virus) {
                hitPercentage = (45 + (5 * this.enemy.level)) / 100;
            } else if(this.enemy.type === EnemyTypes.Boss) {
                hitPercentage = 0.75;
            }

            if(this.supportChip && (this.supportChip.Id === "129" || this.supportChip.Id === "133" ||
                this.supportChip.Id === "134" || this.supportChip.Id === "201" || this.supportChip.Id === "206")) {
                hitPercentage -= getSupportChipEffectById(this.supportChip.Id).value;
            }
            
            //Returns a number between 0 and 1
            var num = Math.random();
            if(num <= hitPercentage) {
                var atkPower = this.getAttackPower(this.enemy.element, parseInt(this.enemy.at), 
                    this.player.element);

                this.$store.commit('battle/addBattleAction', {
                    type: BattleActionTypes.PlayerHP, 
                    value: -atkPower
                });

                this.$store.commit('battle/setIsAttackHit', true);
                
            } else {
                this.$store.commit('battle/setIsAttackHit', false);
            }

            this.$store.commit('session/setCurrentScene', SceneNames.BattleFireAttack);
        },
        importVirus(image) {
            //Import using html loarder
            this.screenContent = require(`!html-loader!../../../../assets/svgs/viruses/${image}`);
        },
        importBoss(image) {
            this.screenContent = require(`!html-loader!../../../../assets/svgs/bosses/${image}`);
        }, 
        getAttackPower(atkElement, atkPower, defElement) {
            var atkPowerTotal = 0;

            if(atkElement === ElementTypes.Neutral || defElement === ElementTypes.Neutral) {
                atkPowerTotal = atkPower;
            }

            if(atkElement === ElementTypes.Fire) {
                if(defElement === ElementTypes.Wood) {
                    atkPowerTotal = atkPower * 2;
                } else if(defElement === ElementTypes.Aqua) {
                    atkPowerTotal = Math.floor(atkPower / 2);
                } else {
                    atkPowerTotal = atkPower;
                }
            } else if(atkElement === ElementTypes.Wood) {
                if(defElement === ElementTypes.Elec) {
                    atkPowerTotal = atkPower * 2;
                } else if(defElement === ElementTypes.Fire) {
                    atkPowerTotal = Math.floor(atkPower / 2);
                } else {
                    atkPowerTotal = atkPower;
                }
            } else if(atkElement === ElementTypes.Elec) {
                if(defElement === ElementTypes.Aqua) {
                    atkPowerTotal = atkPower * 2;
                } else if(defElement === ElementTypes.Wood) {
                    atkPowerTotal = Math.floor(atkPower / 2);
                } else {
                    atkPowerTotal = atkPower;
                }
            } else if(atkElement === ElementTypes.Aqua) {
                if(defElement === ElementTypes.Fire) {
                    atkPowerTotal = atkPower * 2;
                } else if(defElement === ElementTypes.Elec) {
                    atkPowerTotal = Math.floor(atkPower / 2);
                } else {
                    atkPowerTotal = atkPower;
                }
            }

            if(this.supportChip && (this.supportChip.Id === "135" || this.supportChip.Id === "136" ||
                this.supportChip.Id === "137" || this.supportChip.Id === "139" || this.supportChip.Id === "208")) {
                atkPowerTotal -= getSupportChipEffectById(this.supportChip.Id).value;
                
                return atkPowerTotal > 0 ? atkPowerTotal : 0;
            } else {
                return atkPowerTotal;
            }
        }     
    }
}
</script>

<style scoped lang="scss">
    .pet-font {
        font-size:13px;
    }
</style>