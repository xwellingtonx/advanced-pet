<template>
    <g>
        <svg viewBox="0 0 83 75" width="83" height="75" x="48.05" y="64.94">
            <rect width="83" height="75" rx="3.01" ry="3.01" />
            <rect class="cls-1" x="3" y="3" width="77" height="69" />
            <g id="standby-face-right" :class="{'hide-element': isConfirmation === true}">
                <polygon points="76.47 20.65 78.63 20.65 78.63 22.8 80 22.8 80 31.93 78.63 31.93 78.63 34.2 76.47 34.2 76.47 20.65" />
                <rect x="78.63" y="34.2" width="1.37" height="13.6" />
                <polygon points="65.48 52.29 63.35 52.29 63.35 47.77 65.48 47.77 65.48 45.52 67.71 45.52 67.71 52.29 65.48 52.29" />
                <rect x="28.57" y="38.75" width="2.24" height="6.77" />
                <rect x="19.81" y="47.85" width="2.23" height="2.24" />
                <path d="M28.57,58.76v2.3H24.23v2.23H19.81v2.3H13.29v2.25H24.22V65.59h6.56v2.22h-2.2v2.27h2.2V67.84H33V65.59h4.31v-2.3h2.17v4.43h2.23V72H51v.12h7.92V67.72h2.2V65.51h2.21V63.29H58.94v2.22H48V63.29h-4V61.06H39.52v-2.3H37.35V54.28H35.17V38.75h2.18V41h0v6.82h2.15V41h2.23v6.82h2.18v2.27H41.75v2.26H48V45.52h4.38v2.25h4.35V50h4.44V47.77h2.19V45.52h2.13V43.2h2.23v2.32h2.17v11h2.17V54.28h4.42v-2h2.16V47.8H76.47v2.25h-2.2V47.8H72.05V45.52H70V41h2.06v4.52h2.22V47.8h2.2V41h-2.2V38.75h2.2V34.2h-2.2v2.28H72.05v2.27H70V36.48h2.06V31.94h2.16V20.65H65.52V23h2.19v9H52.34V20.65H39.52V23h2.23v6.7H44v6.81H41.75V31.94H39.52v-4.5H37.37V23H35.18V20.69H22v6.75H19.84v4.5H22v2.27H19.84V31.94H17.58V41h0v6.77h2.26v-4.5H22v4.5h2.19v2.32h2.18V36.48H24.23V31.94H22V29.67h2.19V27.44h4.19v2.23h2.39v4.54H33v2.27H30.81v2.27h2.11v6.79H30.83v2.28h2.09v4.53H30.81v1.93h-4.4V52.35H24.23V50.09H22v2.26H11.27v1.93h4.16v2.24H22v2.24ZM22,36.48h0V41h2.19v2.2H22V41h-2.2V36.48ZM72.05,50.09h2.21v2.2H72.05ZM44,43.2H46.1v4.62H44Zm-6.61-6.72h2.15v2.27H37.37Z" />
                <polygon points="54.56 56.52 54.56 54.29 56.72 54.29 56.72 52.29 58.94 52.29 58.94 56.52 56.72 56.52 54.56 56.52" />
                <rect x="67.71" y="56.53" width="2.17" height="2.25" />
                <rect x="61.16" y="56.52" width="2.18" height="2.25" />
                <rect x="65.48" y="58.77" width="2.23" height="2.3" />
                <polygon points="50.17 58.8 47.98 58.8 47.98 56.54 50.17 56.54 50.17 58.77 61.16 58.77 61.16 61.07 50.17 61.07 50.17 58.8" />
                <rect x="63.35" y="61.07" width="2.14" height="2.22" />
                <rect x="63.35" y="65.51" width="2.14" height="2.21" />
                <rect x="65.48" y="67.72" width="4.4" height="2.36" />
                <polygon points="72.05 72.04 72.05 72.16 69.88 72.16 69.88 72.04 69.88 70.08 72.05 70.08 72.05 72.04" />
                <polygon points="28.58 72.19 26.4 72.19 26.4 72.07 26.39 72.07 26.39 70.08 28.58 70.08 28.58 72.07 28.58 72.19" />
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
import EventBus from '../../common/eventBus.js';
import { SceneNames, Events } from '../../common/constants';
import { TimelineLite } from "gsap";

export default {
    name: "OptionTimeScene",
    computed: {
        ...mapState({
            timeNow: state => state.timeNow,
        })
    },
    data() {
        return {
            timeItems: [],
            itemSelected: null,
            timeLine: null,
            selectorPosX: 0,
            isConfirmation: false,
        }
    },
    mounted() {
        this.registerListeners();

        //Set array with the last registered time from session
        this.setTimeArray(this.$store.state.session.time);
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

                    //Save the time and move to next scene
                    this.$store.commit('session/setTime', timeStr);

                    this.$store.commit('session/setCurrentScene', SceneNames.Opening);
                }
            } else {
                this.moveSelectorToRight();
            }
        },
        onCancel() {
            if(this.isConfirmation) {
                this.isConfirmation = false;
                this.setTimeArray(this.$store.state.session.time);
            }
        },
        setTimeArray(timeNow) {
            
            this.timeItems = [];

            this.timeItems.push({ index: 0, value: timeNow.substring(0, 1), posX: 0 });
            this.timeItems.push({ index: 1, value: timeNow.substring(1, 2), posX: 15 });
            this.timeItems.push({ index: 2, value: timeNow.substring(2, 3), posX: 30 });
            this.timeItems.push({ index: 3, value: timeNow.substring(3, 4), posX: 40 });
            this.timeItems.push({ index: 4, value: timeNow.substring(4, 5), posX: 55 });

            this.selectTimeItem(0);
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