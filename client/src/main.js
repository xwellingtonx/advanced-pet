import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vddl from 'vddl'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.min.css";
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import VueCarousel from 'vue-carousel';
import {polyfill} from "mobile-drag-drop";
import "mobile-drag-drop/default.css"


const serverUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://advanced-pet-server.herokuapp.com'

const socket = io(serverUrl, {
  'reconnectionAttempts': 5
});
 

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(polyfill);
Vue.use(Vddl);
Vue.use(VueSocketIOExt, socket);
Vue.use(VueCarousel);

new Vue({
  store,
  Vddl,
  render: h => h(App)
}).$mount('#app')
