import { BattleActionTypes, ChipTypes } from "../../global/constants";

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
      state.battleActions = [];
      state.chips = [];
    },
    setTurnType: (state, turnType) => {
      state.turnType = turnType;
    },
    addChip: (state, chip) => {
      state.chips.push(chip);
    },
    removeChip: (state, chip) => {
      if(chip) {
        state.chips = state.chips.filter(x => x.Id !== chip.Id);
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
    getAttackChip: state => {
      return state.chips.find(x => x.Type === ChipTypes.Attack);
    },
    getSupportChip: state => {
      return state.chips.find(x => x.Type === ChipTypes.Support);
    },
    getAllPlayerHPActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.PlayerHP);
    },
    getAllEnemyDamageActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.EnemyDamage);
    },    
    getAllChipsActions: state => {
      return state.battleActions.filter(x => x.type === BattleActionTypes.ChipUsage);
    },
    getPlayerCurrentHP: state => {
      var playerHP = state.player.hp;
      state.battleActions.filter(x => x.type === BattleActionTypes.PlayerHP).forEach((item) => {
        playerHP += item.value
      });

      return playerHP;
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }