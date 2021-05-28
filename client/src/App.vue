<template>
  <div id="app">
	<a href="https://github.com/xwellingtonx/advanced-pet" target="_blank" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#084caf; color:#151513; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="#f9f9f9" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#f9f9f9" class="octo-body"></path></svg></a>

	<PETSelection v-if="isNaviSelection" />
	
    <advanced-pet ref="advancedPet" v-if="!isNaviSelection"
		@dragstart="showModalWithDelay('myChips')" />
  
    <ul class="ms-nav">
      <input type="checkbox" id="ms-menu" class="ms-menu-toggle" name="ms-menu-toggle" />
      <li v-if="!isNaviSelection" class="ms-li ms-li5 ms-li-last shake-btn" @click="shakeButtonOnClick">
        <a href="javascript:void(0)" title="Shake">
          <span class="fa fa-play"></span>
        </a>
      </li>	  
      <li class="ms-li ms-li4"  @click="showModal('informations')">
        <a href="javascript:void(0)" title="Informations">
          <span class="fa fa-info"></span>
        </a>
      </li>
      <li class="ms-li ms-li3" @click="showModal('chat')">
        <a href="javascript:void(0)" title="Chat">
          <span class="fa fa-comments" ></span>
        </a>
      </li>	  
      <li class="ms-li ms-li2" @click="showModal('library')">
        <a href="javascript:void(0)" title="Library">
          <span class="fa fa-book" ></span>
        </a>
      </li>
      <li class="ms-li ms-li1 ms-li-first" @click="showModal('myChips')">
        <a title="MyChips">
          <span class="fa fa-folder"></span>
        </a>
      </li>
      <li class="ms-main">
        <a href="javascript:void(0)" title="Menu">
          <label class="ms-menu-toggle-lbl" for="ms-menu">
			<span class="fa fa-bars"></span>
          </label>
        </a>
      </li>
    </ul>

	<b-modal ref="my-modal" content-class="custom-border" size="lg" hide-footer>
		<my-chips @dragstart="this.hideModal" v-if="this.modalType === 'myChips'"/>
		<chip-library v-if="this.modalType === 'library'"/>     

		<iframe v-if="this.modalType === 'chat'" src="https://minnit.chat/AdvancedPET?embed&nickname=" style="border:none;width:100%;height:391px;" allowTransparency="true"></iframe>

		<div v-if="this.modalType === 'informations'" class="full-padding">
			<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
			<h1>Info:</h1>
			<p style="text-align: left;">Hi all!! I'm Wellington the developer of this Advanced PET project, I started this as a side project in April 2020 to study new technologies like VueJs, my intention was to rebuild as close as possible to the original toy made in 2004. I hope you enjoy as much I enjoyed building!!</p>
			<p>&nbsp;</p>
			<h1>Instrunctions Sheet:</h1>
			<p style="text-align: left;">If you do not know how to use the PET, you can take a time to read the original instruncions sheet below, I'll post some video in the future to make easy.</p>
			<p style="text-align: left;"><a class="external text" href="https://service.mattel.com/instruction_sheets/megaman.pdf" target="_blank" rel="nofollow noreferrer noopener">G4141 Megaman NT Warrior Advanced PET</a></p>
			<p style="text-align: left;">**The virus mode can be played by shaking your smatphone or using the button Play(Orange) when acessing by large desktop.</p>
			<p>&nbsp;</p>
			<h1>Buy me a coffe:</h1>
			<p style="text-align: left;">If you like this project and want buy me a coffe, feel free at link below. :)</p>
			<form action="https://www.paypal.com/donate" method="post" target="_top">
			<p style="text-align: left;"><input name="hosted_button_id" type="hidden" value="EZGYY3AEBG6A2" /> <input title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" type="image" /> <img src="https://www.paypal.com/en_IE/i/scr/pixel.gif" alt="" width="1" height="1" border="0" /></p>
			<p>&nbsp;</p>
			</form>
			<h1>Thank you:</h1>
			<p style="text-align: left;">I want to say a huge thank you to the people below that helped me a lot with many informations necessary to complete the project.</p>
			<p style="text-align: left;">Discord/@DJRezzed</p>
			<p style="text-align: left;">Discord/@seabit</p>
			<p style="text-align: left;">Discord/@Rinangelsmile</p>
			<p style="text-align: left;">Discord/@Deathila</p>
			<p style="text-align: left;">Discord/@NettoHikari</p>
			<p style="text-align: left;">Discord/@Darklexzx</p>	
		</div>
	</b-modal>
  </div>
</template>

<script>
import ChipLibrary from './components/battlechip/ChipLibrary.vue'
import MyChips from './components/battlechip/MyChips.vue'
import AdvancedPet from './components/PET.vue'
import { mapState } from 'vuex';
import PETSelection from  './components/PETSelection.vue'
import { SceneNames } from './global/constants'

export default {
  name: 'App',
  components: {
    ChipLibrary, MyChips, PETSelection, AdvancedPet
  },
  computed: {
    ...mapState({
        currentScene: state => state.session.currentScene,
    })
  },
  watch: {
    currentScene() {
        this.checkCurrentScene();
    }
  },     
  data() {
    return {
		modalType: String,
		isNaviSelection: Boolean
    }
  },
  beforeCreate() {
	this.$store.commit('initializeSession');
  },
  mounted() {
	this.checkCurrentScene();
  },
  methods: {
	showModal(type) {
		this.modalType = type;
		this.$refs['my-modal'].show();
	},
	showModalWithDelay(type) {
		setTimeout(() => {
			this.showModal(type)
		}, 100);
	},
	hideModal() {
		this.$refs['my-modal'].hide();
	},
	shakeButtonOnClick() {
		this.$refs['advancedPet'].startShakingForDesktop();
	},
	checkCurrentScene() {
		this.isNaviSelection = this.currentScene == SceneNames.NaviSelection;
	}
  }
}
</script>

<style lang="scss">
$primary-fill: #fff;
$default-fill: #000;


.primary-color {
    fill: $primary-fill;    
} 
.default-color {
    fill: $default-fill;    
}

@font-face {
    font-family: "Advanced Pet Font";
    src: url("./assets/fonts/advanced-pet-font.ttf"); /*IE doesn't support .ttf */
}

@font-face {
    font-family: "BN Elements";
    src: url("./assets/fonts/bn-elements.ttf"); /*IE doesn't support .ttf */
}
.pet-font {
	font-family: Advanced Pet Font;
}

.svg-text-right-direction {
    direction: rtl;
}

.full-padding {
	padding: 20px;
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
  background-size: 60%;
  overflow: hidden;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.modal {
	padding-left: 0px !important;
	.modal-body {
		min-height: 391px;
		padding: 0px;
	}	
	.modal-header {
		border-bottom-color: #e7e5e5;
	}
	.modal-content {
		background-color: #f9f9f9;
	}
}

//menu toogle
ul {
	margin: 0;
	padding: 0;
	list-style: none;
  z-index: 999;
}
a {
	outline: none !important;
}
#ms-menu {
	display: none;
}

.ms-nav {
	position: absolute;
    bottom: 15px;
    right: 15px;
}
.ms-nav > .ms-main {
	position: relative;
}

.ms-nav > .ms-li {
	position: absolute;
	bottom: 0;
	right: 8px;
	transition: bottom .5s ease;
	z-index: 1;
}

.ms-nav .ms-menu-toggle:checked ~ .ms-li1 {
	bottom: 125%;
	transition: bottom .5s ease;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li1 a span {
	opacity: 1;
	transition: opacity .5s ease .1s;
}

.ms-nav .ms-menu-toggle:checked ~ .ms-li2 {
	bottom: 240%;
	transition: bottom .6s ease;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li2 a span {
	opacity: 1;
	transition: opacity .6s ease .2s;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li3 {
	bottom: 355%;
	transition: bottom .7s ease;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li3 a span {
	opacity: 1;
	transition: opacity .7s ease .3s;
}

.ms-nav .ms-menu-toggle:checked ~ .ms-li4 {
	bottom: 470%;
	transition: bottom .8s ease;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li4 a span {
	opacity: 1;
	transition: opacity .8s ease .4s;
}

.ms-nav .ms-menu-toggle:checked ~ .ms-li5 {
	bottom: 585%;
	transition: bottom .8s ease;
}
.ms-nav .ms-menu-toggle:checked ~ .ms-li5 a span {
	opacity: 1;
	transition: opacity .8s ease .4s;
}

.ms-nav .ms-menu-toggle ~ .ms-main span {
	transition: transform .35s ease;
	opacity: 1;
	cursor: pointer;
}

.ms-nav > li a {
	font-size: 30px;
	color: #f9f9f9 !important;
	background: #084caf;
	width: 60px;
	height: 60px;
	display: block;
	border-radius: 100%;
	position: relative;
	text-align: center;
	cursor: pointer;
}

.ms-nav > .ms-main a,
.ms-nav > .ms-main > a > label {
	font-size: 30px;
	color: #f9f9f9;
	background: #084caf;
	width: 75px;
	height: 75px;
	display: block;
	border-radius: 100%;
	position: relative;
	text-align: center;
	z-index: 19;
	box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
}
.ms-nav > li > a span {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	height: 30px;
	width: 30px;
	opacity: 0;
	z-index: 12;
}

.shake-btn {
	a {
		background: #edd21c !important;
	}
}

.my-modal {
	border-radius: 0px;
	height: 100px;
	width: 100px;
	background: #000
}
.my-modal:after,
.my-modal:before {
	content: '';
    position: absolute; bottom: -4px; right: -4px;
} 

.my-modal::after {
    width: 0;
    height: 47px;    
    border-right: 4px solid #fff;
}

.my-modal:before {
	width: 47px;
    height: 0;    
    border-bottom: 4px solid #fff;
}

.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}
@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
