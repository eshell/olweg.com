import * as types from './mutation-types'
import {merge} from 'lodash'

import axios from 'axios'
import API from './og-api'
import { OGTOKENKEY } from '../config'
import createHeaders from '../utils/createHeaders'

const resetAuthData = {
  id: null,
  refId: null,
  email: null,
  type: null,
  agent: null
}

const state = {
  loggedIn: false,
  authData: resetAuthData
}

const mutations = {
  [types.AUTH.LOGIN] (state, data) {
    state.loggedIn = true
    merge(state.authData, data.data)
    window.localStorage.setItem(OGTOKENKEY, data.token)
  },
  [types.AUTH.AUTH] (state, data) {
    state.loggedIn = true
    merge(state.authData, data.data)
  },
  [types.AUTH.LOGOUT] (state) {
    state.loggedIn = false
    state.authData = Object.assign({}, resetAuthData)
    window.localStorage.removeItem(OGTOKENKEY)
  },
  [types.AUTH.REGISTER] (state, member) {
    console.log('do register', member.email)
  }
}

const actions = {
  isAuthorized ({commit}) {
    return new Promise((resolve, reject) => {
      axios.request({
        method: 'get',
        url: API.AUTH,
        headers: createHeaders(true)
      }).then(function (r) {
        commit(types.AUTH.AUTH, r.data)
        resolve(true)
      }).catch(function (e) {
        commit(types.AUTH.LOGOUT)
        resolve(false)
      })
    })
  },
  doLogin ({commit}, credentials) {
    // add user agent to inject in jwt for extra user validation
    merge(credentials, {agent: window.navigator.userAgent})

    axios.request({
      method: 'post',
      url: API.LOGIN,
      data: {credentials},
      headers: createHeaders()
    }).then(function (r) {
      commit(types.AUTH.LOGIN, r.data)
    }).catch(function (e) {
      commit(types.AUTH.LOGOUT)
    })
  },
  doLogout ({commit}) {
    commit(types.AUTH.LOGOUT)
  },
  doRegister ({commit}, member) {
    commit(types.AUTH.REGISTER, member)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
