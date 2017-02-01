import * as types from '../../mutation-types'
// import Vue from 'vue'

// Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('id_token')

const state = {
  token_id: 'oidtok',
  authorized: false,
  password: null,
  email: null,
  id: null
}

const mutations = {
  [types.AUTH_LOGIN] (state, {email, password}) {
    if (email === 'ericshell2010@gmail.com' && password === 'test') {
      window.localStorage.setItem(state.token_id, 'sometokenstuff')
      state.authorized = true
      state.email = email
      state.id = 1
    } else {
      state.authorized = false
      state.email = null
      state.id = null
    }
  },

  [types.AUTH_LOGOUT] (state) {
    window.localStorage.removeItem(state.token_id)
    state.authorized = false
    state.email = null
    state.id = null
  }
}

const actions = {
  login ({commit, state}, email, password) {
    return new Promise(function (resolve, reject) {
      commit(types.AUTH_LOGIN, email, password)
      if (state.authorized) {
        resolve()
      } else {
        reject()
      }
    })
  },

  logout ({commit, state}) {
    commit(types.AUTH_LOGOUT)
  },
  // getAuthHeader ({state}) {
  //   return {
  //     'Authorization': 'Bearer ' + window.localStorage.getItem(state.token_id)
  //   }
  // },

  check ({commit, state}) {
    return new Promise(function (resolve, reject) {
      console.log('checking')
      if (window.localStorage.getItem(state.token_id)) {
        resolve(true)
      } else {
        reject('unauthorized')
      }
      // setTimeout(() => {
      //   if (state.authorized) {
      //     console.log('authorized')
      //     resolve(true)
      //   } else {
      //     reject('unauthorized')
      //   }
      // }, 500)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
