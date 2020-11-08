var UUID = require('uuid-random');
import {SceneNames, DeviceTypes, ElementTypes, NotificationTypes} from '../../global/constants'
import moment from 'moment'
import LevelupHelper from '../../components/game/common/levelupHelper';
import Notification from '../../components/game/common/notification';
import World from '../../components/game/common/world';


const state = {
  id: UUID(),
  version: "1.0.0",
  currentWorld: 1,
  currentStage: 1,
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
    hp:8,
    at:1,
    recovery: 100,
    element: ElementTypes.Neutral
  },
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
  },
  decrementStageClear: (state, value) => {
    state.stageClear -= value;
  },
  incrementStageClear: (state, value) => {
    state.stageClear += value;
  },
  decrementNaviRecovery: (state, value) => {
    state.navi.recovery -= value;
  },
  incrementNaviRecovery: (state, value) => {
    state.navi.recovery += value;
  },
  levelup: (state) => {
    var exp = state.navi.exp + 2;

    if(exp >= LevelupHelper.levelToTotalExp(state.navi.level + 1)) {
      state.navi.exp = 0;
      state.navi.level += 1;
      state.navi.cp += 1;
      state.navi.hp += 2;
      state.navi.at += 1;
    } else {
      state.navi.exp = exp;
    }
  },
}

const actions = {
  updateTime ({commit}) {
    commit('setTime', new moment().format("hh:mm"));
  }, 
  stageClear({commit, state}) {
    var currentStage = World.getCurrentStage(state.deviceType, state.currentWorld, state.currentStage);

    if(currentStage.stageClear === (state.stageClear + 1)) {
      commit('setNotification', new Notification("A EMAIL!", NotificationTypes.Tournament, currentStage.boss))
    } 
    commit('incrementStageClear', 1);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}