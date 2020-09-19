var UUID = require('uuid-random');
import {SceneNames, DeviceTypes, ElementTypes} from '../../global/constants'
import moment from 'moment'

const state = {
  id: UUID(),
  version: "1.0.0",
  currentWorld: 1,
  deviceType: DeviceTypes.Megaman,
  currentScene: SceneNames.MadeBy,
  lastScene: "",
  time: new moment().format("hh:mm"),
  myChips: [],
  sound: true,
  navi: {
    level: 1,
    exp: 0,
    cp: 3,
    hp:10,
    at:1,
    recovery: 100,
    element: ElementTypes.Neutral
  },
  stageId: 1,
  wins: 0,
  losses: 0,
  stageClear: 0,
  isInBattle: false,
  notification: null
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
  },
  setNotification: (state, value) => {
    state.notification = value;
  }
}

const actions = {
  updateTime ({commit}) {
    commit('setTime', new moment().format("hh:mm"));
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}