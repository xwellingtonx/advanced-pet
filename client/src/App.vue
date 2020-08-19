<template>
  <div id="app">
    <section class="left-container">
      <advanced-pet />
    </section>
    
    <section class="right-container">
      <!-- <b-button block variant="primary">Shake</b-button>
       -->
       <b-card no-body>
        <b-tabs pills card vertical end>
          <b-tab title="MyChips" active>
            <my-chips />
          </b-tab>
          <b-tab title="Library">
            <chip-library />
          </b-tab>
        </b-tabs>
      </b-card>
    </section>
  </div>
</template>

<script>
import ChipLibrary from './components/ChipLibrary.vue'
import MyChips from './components/MyChips.vue'
import AdvancedPet from './components/AdvancedPET.vue'


export default {
  name: 'App',
  components: {
    ChipLibrary, AdvancedPet, MyChips
  },
	beforeCreate() {
		this.$store.commit('initializeSession');
	}
}
</script>

<style lang="scss">
@font-face {
    font-family: "Advanced Pet Font";
    src: url("./assets/fonts/advanced-pet-font.ttf"); /*IE doesn't support .ttf */
}

@font-face {
    font-family: "BN Elements";
    src: url("./assets/fonts/bn-elements.ttf"); /*IE doesn't support .ttf */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

text, button {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
}

body {
  margin: 0px;
  background-color: rgb(0,149,215) !important;
  background-image: url("~@/assets/circuit.svg");
  overflow: hidden;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .left-container {
    margin-right: 5%;
  }  
  .right-container {
    width: 610px;
    background-color: white;
    border-radius: 2%;

    button {
      margin-bottom: 20px;
    }

    .card-body {
      padding: 0px;
    }
  }
}

</style>
