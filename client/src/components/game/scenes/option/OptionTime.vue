<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <g id="standby-face-right" 
                :class="{'hide-element': isConfirmation === true}" 
                v-html="this.rightFace">
            </g>                          
            <rect class="cls-2" x="2" y="2" width="79" height="18.67" />
            <rect class="time-selector" :x="selectorPosX" y="3" width="12.61" height="17" />
            <text class="confirmation-text" transform="translate(21.15 45.06)" :class="{'hide-element': isConfirmation === false}">
                Time<tspan x="2.68" y="18">ok?</tspan>
            </text>
            <text class="standby-text" transform="translate(9 19)">
                <tspan v-for="item in timeItems" :key="item.index"
                    :class="{selected: isConfirmation === false && (itemSelected !== null && itemSelected.index === item.index)}" 
                    :x="item.posX" >
                        {{item.value}}
                </tspan>
            </text>
        </svg>        
    </g>
</template>

<script>
import { mapState } from 'vuex';
import EventBus from '../../../../global/eventBus.js';
import { SceneNames, Events } from '../../../../global/constants';
import { TimelineLite } from "gsap";
import moment from 'moment'

export default {
    name: "OptionTime",
    computed: {
        ...mapState({
            deviceType: state => state.session.deviceType,
        })       
    },      
    data() {
        return {
            timeItems: [],
            itemSelected: null,
            timeLine: null,
            selectorPosX: 0,
            isConfirmation: false,
            rightFace: ""
        }
    },
    created() {
        this.rightFace = require(`!html-loader!../../../../assets/svgs/players/${this.deviceType}/right-face.svg`).default;
    },
    mounted() {
        this.registerListeners();

        //Set array with the last registered time from session
        this.setTimeArray(this.$store.state.session.time, 0);
    },
    beforeDestroy() {
        this.unregisterListeners();
    },
    methods: {
        registerListeners() {
            EventBus.$on(Events.Right, this.moveSelectorToRight);
            EventBus.$on(Events.Left, this.moveSelectorToLeft);
            EventBus.$on(Events.Up, this.incrementTime);
            EventBus.$on(Events.Down, this.decrementTime);
            EventBus.$on(Events.Confirmation, this.onConfirmation);
            EventBus.$on(Events.Cancel, this.onCancel);
        },
        unregisterListeners() {
            EventBus.$off(Events.Right);
            EventBus.$off(Events.Left);
            EventBus.$off(Events.Up);
            EventBus.$off(Events.Down);
            EventBus.$off(Events.Confirmation);
            EventBus.$off(Events.Cancel);
        },
        onConfirmation() {
            if(this.itemSelected.index == 4) {
                this.timeLine.restart();
                this.timeLine.pause();

                //If is the first time calling the event, show the confirmation text.
                if(!this.isConfirmation) {
                    this.isConfirmation = true;
                } else {
                    var timeStr = "";
                    this.timeItems.forEach((item) => {
                        timeStr += item.value.toString();
                    });

                    var dateNow = moment().format("YYYY-MM-DD");
                    //Check if is a valid time
                    if(moment(dateNow + " " + timeStr, "YYYY-MM-DD HH:mm", true).isValid()) {
                        //Save the time and move to next scene
                        this.$store.commit('session/setTime', timeStr);
                        
                        //Check the scene we're going to move.
                        if (this.$store.state.session.lastScene === SceneNames.Greeting) {
                            this.$store.commit('session/setCurrentScene', SceneNames.Opening);
                        } else {
                            this.$store.commit('session/setCurrentScene', SceneNames.OptionSound);
                        }
                    } else {
                        this.isConfirmation = false;
                        this.setTimeArray(this.$store.state.session.time, 0);
                    }
                }
            } else {
                this.moveSelectorToRight();
            }
        },
        onCancel() {
            if (this.itemSelected.index > 0) {
                if(this.isConfirmation) {
                    this.isConfirmation = false;
                    this.setTimeArray(this.$store.state.session.time, 0);
                }
            } else {
                this.$store.commit('session/setCurrentScene', SceneNames.Option);
            }
        },
        setTimeArray(timeNow, position) {
            
            this.timeItems = [];

            this.timeItems.push({ index: 0, value: timeNow.substring(0, 1), posX: 0 });
            this.timeItems.push({ index: 1, value: timeNow.substring(1, 2), posX: 15 });
            this.timeItems.push({ index: 2, value: timeNow.substring(2, 3), posX: 30 });
            this.timeItems.push({ index: 3, value: timeNow.substring(3, 4), posX: 40 });
            this.timeItems.push({ index: 4, value: timeNow.substring(4, 5), posX: 55 });

            this.selectTimeItem(position);
        },
        selectTimeItem(index) {
            if(this.timeItems) {
                switch (index) {
                    case 0:
                        this.selectorPosX = 8.2;
                        break;
                    case 1:
                        this.selectorPosX = 23;
                        break;
                    case 3:
                        this.selectorPosX = 48;
                        break;
                    case 4:
                        this.selectorPosX = 63;
                        break;                                                                
                }
                
                this.itemSelected = this.timeItems[index];

                if(this.timeLine === null) {
                    this.timeLine = new TimelineLite({
                        repeat: -1
                    });

                    this.timeLine.to('.time-selector',{ display: 'block', delay: 0.5, duration: 0.5, ease: "none"});
                    this.timeLine.play();
                } else {
                    this.timeLine.play();
                }
            }
        },
        incrementTime() {
            if(this.isConfirmation) {
                return;
            }

            //The time is displayed in 24-hour time. ex: 00:00 to 23:59
            var value = parseInt(this.itemSelected.value)

            if(this.itemSelected.index === 0) {
                if(value === 2) {
                    value = 0;
                } else {
                    value++;
                }
            } else if(this.itemSelected.index === 1) {
                if(parseInt(this.timeItems[0].value) === 2 && value === 3) {
                    value = 0;
                } else {
                    value++;
                }
            } else if(this.itemSelected.index === 3) {
                if(value === 5) {
                    value = 0;
                } else {
                    value++;
                }
            } else {
                value++;
            }

            //The value can't be great than 9
            if(value > 9) {
                value = 0
            }

            this.itemSelected.value = value;
            this.timeItems[this.itemSelected.index] = this.itemSelected;
        },
        decrementTime() {
            if(this.isConfirmation) {
                return;
            }

            var value = parseInt(this.itemSelected.value)

            if(this.itemSelected.index === 0) {
                if(value === 0) {
                    value = 2;
                } else {
                    value--;
                }
            } else if(this.itemSelected.index === 1) {
                if(parseInt(this.timeItems[0].value) === 2 && value === 0) {
                    value = 3;
                } else {
                    value--;
                }
            } else if(this.itemSelected.index === 3) {
                if(value === 0) {
                    value = 5;
                } else {
                    value--;
                }
            } else {
                value--;
            }

            //The value can't less than 0
            if(value < 0) {
                value = 9
            }

            this.itemSelected.value = value;
            this.timeItems[this.itemSelected.index] = this.itemSelected;
        },
        moveSelectorToRight() {
            this.moveSelection("right");
        },
        moveSelectorToLeft() {
            this.moveSelection("left");
        },
        moveSelection(position) {
            if(this.isConfirmation) {
                return;
            }

            //Do not move if is the first/last index
            if(this.itemSelected.index === 0 && position === "left") {
                return;
            } 
            else if(this.itemSelected.index === 4 && position === "right") {
                return;
            } 
            else {

                //If the next movement will be the index 2 (:), we want to move 2 position.
                var movementCount = 1;
                if((this.itemSelected.index === 1 && position === "right") || (this.itemSelected.index === 3 && position === "left")) {
                    movementCount = 2;
                }

                if(position === "right") {
                    this.selectTimeItem(this.itemSelected.index + movementCount)
                } else {
                    this.selectTimeItem(this.itemSelected.index - movementCount)
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.selected {
    fill: #000;
}
.time-selector {
    fill: #fff;
    display: none;
}

.hide-element {
    display: none;
}

.cls-1,.standby-text {fill:#fff;}.cls-2{fill:#000501;}
.standby-text, .confirmation-text{
    font-size: 15px;
    font-family:Advanced-PET-Font, Advanced PET Font;
}
</style>