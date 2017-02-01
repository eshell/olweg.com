import * as types from '../../mutation-types'

const state = {
  hasError: false,
  msg: ''
}

const mutations = {
  [types.ERR_BAD_LOGIN] (state) {
    state.hasError = true
    state.msg = 'Bad Login'
  },
  [types.ERR_RESET] (state) {
    state.hasError = false
    state.msg = ''
  }
}

const actions = {
  errBadLogin ({commit}) {
    commit(types.ERR_BAD_LOGIN)
  },
  errReset ({commit}) {
    commit(types.ERR_RESET)
  }
}

export default {
  state,
  mutations,
  actions
}
