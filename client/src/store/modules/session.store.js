import { SceneNames } from  '../../common/constants.js'
var UUID = require('uuid-random');

const state = {
  id: UUID(),
  theme: 0,
  currentScene: SceneNames.MadeBy,
  lastScene: "",
  time: "00:00",
  myChips: [],
  sound: true,
  naviStatus: {
    level: 1,
    exp: 0,
    cp: 3,
    hp:10,
    at:1,
    recovery: 100
  },
  wins: 0,
  losses: 0,
  stageClear: 0,
  isInBattle: false
}

const getters = {
}

const mutations = {
  updateNaviStatus: (state, status) => {
    state.naviStatus = status;
  },
  incrementWins: (state) => {
    state.wins++;
  },
  incrementLosses: (state) => {
    state.losses++;
  },
  setCurrentScene: (state, sceneName) => {
    state.lastScene = state.currentScene;
    state.currentScene = sceneName;
  },
  setTheme: (state, theme) => {
    state.theme = theme;
  },
  setTime: (state, time) => {
    state.time = time;
  },
  setSound: (state, value) => {
    state.sound = value;
  },
  addToMyChips (state, { index, item }) {
    state.myChips.splice(index, 0, item);
  },
  removeFromMyChips (state, index) {
    state.myChips.splice(index, 1);
  },
  setIsInBattle: (state, value) => {
    state.isInBattle = value;
  }
}

const actions = {
  // updateNaviStatus ({commit}) {
  //   commit('updateNaviStatus')
  // },
  // incrementWins ({commit}) {
  //   commit('incrementWins')
  // },
  // incrementLosses ({commit}) {
  //   commit('incrementLosses')
  // },
  // setTime ({ commit }, time) {
  //   commit("setTime", time);
  // },  
  // addToMyChips ({ commit }, item) {
  //   commit("addToMyChips", item);
  // },
  // removeFromMyChips ({ commit }, index) {
  //   commit("removeFromMyChips", index);
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}