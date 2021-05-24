var UUID = require('uuid-random');
import {DeviceTypes, ElementTypes, NotificationTypes, SceneNames} from '../../global/constants'
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
  currentScene: SceneNames.NaviSelection,
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
  setupPET: (state, pet) => {
    state.deviceType = pet.deviceType;
    state.navi.element = pet.element;
  },
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
  setCurrentStage: (state, value) => {
    state.currentStage = value;
  },
  setCurrentWorld: (state, value) => {
    state.currentWorld = value;
  },
  levelup: (state) => {
    var exp = state.navi.exp + 2;

    if(exp >= LevelupHelper.levelToTotalExp(state.navi.level + 1)) {
      state.navi.exp = 0;
      state.navi.level += 1;
      if(state.navi.level % 2 === 0) {
        state.navi.cp += 1;
        state.navi.hp += 2;

        if(state.navi.at < 10) {
          state.navi.at += 1;
        }
      }
    } else {
      state.navi.exp = exp;
    }
  },
  resetGame: (state) => {
    state.navi.level = 1;
    state.navi.exp = 0;
    state.navi.cp = 3;
    state.navi.hp = 8;
    state.navi.at = 1;
    state.currentStage = 1;
    state.stageClear = 0;
  }
}

const actions = {
  updateTime ({commit}) {
    commit('setTime', new moment().format("hh:mm"));
  }, 
  stageClear({commit, state}) {
    var currentStage = World.getCurrentStage(state.deviceType, state.currentWorld, state.currentStage);

    if((state.stageClear + 1) >= currentStage.stageClear) {
      commit('setNotification', new Notification("A EMAIL!", NotificationTypes.Tournament, currentStage.boss))
    } 
    commit('incrementStageClear', 1);
  },
  stageComplete({commit, state}) {
    var currentWorld = World.getCurrentWorld(state.deviceType, state.currentWorld);
    var nextStage = state.currentStage + 1;

    if(nextStage > currentWorld.stages.length) {
      var nextWorld = state.currentWorld + 1;
      if(nextWorld > World.getWorldsCount()) {
        commit('nextWorld', 1);
      } else {
        commit('nextWorld', nextWorld);
      }
      commit('resetGame');
    } else {
      commit('setCurrentStage', nextStage);
      commit('decrementStageClear', state.stageClear);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}