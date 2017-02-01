import * as types from './mutation-types'

const state = {
  showMenu: false,
  history: []
}

const mutations = {
  [types.UI.TOGGLE_MENU] (state) {
    state.showMenu = !state.showMenu
  },
  [types.UI.PUSH_HISTORY] (state, page) {
    state.history.push(page)
  }
}

const actions = {
  toggleMenu ({commit}) {
    commit(types.UI.TOGGLE_MENU)
  },
  pushHistory ({commit}, page) {
    commit(types.UI.PUSH_HISTORY, page)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
