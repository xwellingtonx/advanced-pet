import { BattleActionTypes } from "../../global/constants";

const state = {
    id: null,
    player: null,
    enemy: null,
    turnType: "",
    currentTurn: 1,
    chips: [],
    isAttackHit: false,
    type: "",
    battleActions: []
  }
  
  const mutations = {
    startBattle: (state, payload) => {
      state.id = payload.id;
      state.player = payload.player;
      state.enemy = payload.enemy;
      state.type = payload.type;
      state.currentTurn = 1;
      state.battleActions = []
    },
    setTurnType: (state, turnType) => {
      state.turnType = turnType;
    },
    addChip: (state, chip) => {
      state.chips.push(chip);
    },
    removeChip: (state, index) => {
      if(index >= 0) {
        state.chips.splice(index, 1)
      }
    },
    clearChips:(state) => {
      state.chips = [];
    },
    setCurrentTurn: (state, turn) => {
      state.currentTurn = turn;
    },
    setIsAttackHit: (state, isAttackHit) => {
      state.isAttackHit = isAttackHit;
    },
    addBattleAction:(state, action) => {
      state.battleActions.push(action);
    }
  }
  
  const actions = {
    startBattle ({commit}, payload) {
      commit('session/setIsInBattle', true, { root: true });
      commit('startBattle', payload);
    }
  }
  
  const getters = {
    getLastChip: state => {
      return state.chips[state.chips.length - 1];
    },
    getAllPlayerDamageActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.PlayerDamage);
    },
    getAllEnemyDamageActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.EnemyDamage);
    },    
    getAllChipsActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.ChipUsage);
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }