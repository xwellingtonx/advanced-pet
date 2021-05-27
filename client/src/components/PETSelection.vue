<template>
  <div >
    <div class="pet-selector">
      <img class="pet-emblem" v-for="(item, index) in devices" 
        :key="index" 
        :alt="item.deviceType"
        :src="require('@/assets/emblems/' + item.deviceType + '.png')" v-on:click="onDeviceTypeClick(index)" />
    </div>

    <advanced-pet :readOnly="true" />

    <b-button pill variant="primary" v-on:click="startGame()">Start Game</b-button>
  </div>
</template>

<script>
import { DeviceTypes, ElementTypes } from '../global/constants'
import { SceneNames } from  '../global/constants'
import AdvancedPet from './PET.vue'

export default {
    name: "PETSelection",
    components: {
      AdvancedPet
    },
    data() {
      return {
        devices: [
            { deviceType: DeviceTypes.Megaman, element: ElementTypes.Neutral },
            { deviceType: DeviceTypes.Protoman, element: ElementTypes.Neutral },
            { deviceType: DeviceTypes.Bass, element: ElementTypes.Neutral }
        ]
      }
    },
    methods: {
      onDeviceTypeClick(index) {
        this.onPETChange(this.devices[index]);
      },
      onPETChange(device) {
        this.$store.commit('session/setupPET', device);
      },
      startGame() {
        this.$store.commit('session/setCurrentScene', SceneNames.Splash);
      }
    }
}
</script>

<style scoped lang="scss">
::v-deep .megaman-logo {
  cursor: default !important;
}

.btn-primary {
  background-color: #edd21c;
  font-weight: 600;
  font-family: Advanced Pet Font;
  border: 0px;
  margin-left: 40px;

  &:hover {
    background-color: #dfc41a;
  }
}

.pet-selector {
  position: absolute;
  background-color: #084caf;
  border-radius: 25px 25px 0 25px;
  right: 0;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  top: 0;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 

  .pet-emblem {
    cursor: pointer;
    height: 60px;
    width: 60px;
    margin-right: 10px;

    &:hover {
      opacity: 0.7;
    }
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    background-color: transparent;
    bottom: -50px;
    height: 50px;
    width: 25px;
    border-top-right-radius: 25px;
    box-shadow: 0 -25px 0 0 #084caf;
  }
}

</style>