import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vddl from 'vddl'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const serverUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://advanced-pet-server.herokuapp.com'

const socket = io(serverUrl, {
  'reconnectionAttempts': 5
});

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vddl)
Vue.use(VueSocketIOExt, socket);


new Vue({
  store,
  Vddl,
  render: h => h(App)
}).$mount('#app')
