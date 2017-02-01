import * as types from '../../mutation-types'

const state = {
  title: '',
  defaultTitle: 'Our local world entertainment guide.',
  showLogin: false
}

const mutations = {
  [types.UI_TOGGLE_LOGIN] (state) {
    state.showLogin = !state.showLogin
  },
  [types.UI_SHOW_LOGIN] (state) {
    state.showLogin = true
  },
  [types.UI_HIDE_LOGIN] (state) {
    state.showLogin = false
  },
  [types.UI_UPDATE_TITLE] (state, title) {
    state.title = title
  },
  [types.UI_RESET_TITLE] (state) {
    state.title = state.defaultTitle
  }
}

const actions = {
  toggleLogin ({commit}) {
    commit(types.UI_TOGGLE_LOGIN)
  },
  showLogin ({commit}) {
    commit(types.UI_SHOW_LOGIN)
  },
  hideLogin ({commit}) {
    commit(types.UI_HIDE_LOGIN)
  },
  updateTitle ({commit}, payload) {
    commit(types.UI_UPDATE_TITLE, payload)
  },
  resetTitle ({commit}) {
    commit(types.UI_RESET_TITLE)
  }
}

export default {
  state,
  mutations,
  actions
}
