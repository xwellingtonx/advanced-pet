import Vue from 'vue'
import Vuex from 'vuex'
import chips from './modules/chips.store.js'
import session from './modules/session.store.js'
import battle from './modules/battle.store.js'
import { SceneNames } from '../global/constants.js'
var SecureLS = require("../../node_modules/secure-ls/dist/secure-ls.js");
var ls = new SecureLS({encodingType: 'aes'})

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
  },
  mutations: {
    initializeSession(state) {
      // Check if the ID exists
      if(ls.get('sessionStore')) {
        //Assign session saved in local storage
        var sessionState = Object.assign(state.session, JSON.parse(ls.get('sessionStore')));
        if(sessionState.isInBattle) {
          sessionState.isInBattle = false;
          sessionState.currentScene = SceneNames.StandBy;
        } 
        
        state.session = sessionState
      }
    },     
  },
  actions: {
  },
  modules: {
    chips,
    session,
    battle
  }
})

// Subscribe to store updates
store.subscribe((mutation, state) => {
  if(state.session) {
    // Store the state object as a JSON string
    ls.set('sessionStore', JSON.stringify(state.session));
  }
});

export default store;