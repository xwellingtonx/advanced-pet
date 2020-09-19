const state = {
    id: null,
    player: null,
    enemy: null,
    turnType: "",
    currentTurn: 0,
    chips: [],
    isAttackHit: false,
    type: ""
  }
  
  const mutations = {
    startBattle: (state, payload) => {
      state.id = payload.id;
      state.player = payload.player;
      state.enemy = payload.enemy;
      state.type = payload.type;
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
    setPlayerHit: (state, attackPower) => {
      state.player.naviStatus.hp -= attackPower
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
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }