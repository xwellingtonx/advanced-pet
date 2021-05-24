<template>
  <div >
    <div class="arrow-container">
      <div class="arrows prev" @click="onPrevious()"></div>
      <div class="arrows next" @click="onNext()"></div>
    </div>

    <advanced-pet :readOnly="true" />
  </div>
</template>

<script>
import { DeviceTypes, ElementTypes } from '../global/constants'
//import { Carousel, Slide } from 'vue-carousel';
import AdvancedPet from './PET.vue'

export default {
    name: "PETSelection",
    components: {
      AdvancedPet
    },
    data() {
      return {
        currentIndex: 0,
        devices: [
            { deviceType: DeviceTypes.Megaman, element: ElementTypes.Neutral },
            { deviceType: DeviceTypes.Protoman, element: ElementTypes.Neutral },
            { deviceType: DeviceTypes.Bass, element: ElementTypes.Neutral }
        ]
      }
    },
    methods: {
      onNext() {
        this.currentIndex += 1;

        if(this.currentIndex < this.devices.length) {
          this.onPETChange(this.devices[this.currentIndex]);
        } else {
          this.currentIndex = 0;
          this.onPETChange(this.devices[this.currentIndex]);
        }
      },
      onPrevious() {
        this.currentIndex -= 1;

        if(this.currentIndex >= 0) {
          this.onPETChange(this.devices[this.currentIndex]);
        } else {
          this.currentIndex = this.devices.length - 1;
          this.onPETChange(this.devices[this.currentIndex]);
        }
      },
      onPETChange(device) {
        this.$store.commit('session/setupPET', device);
      }
    }
}
</script>

<style scoped lang="scss">
.arrow-container {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: -40px;
}
.arrows {
  width: 32px;
  height: 32px;
  border-color: #FFF !important;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer !important;

  &.prev {
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(45deg);
  }

  &.next {
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(-135deg);
   
  }
}
</style>