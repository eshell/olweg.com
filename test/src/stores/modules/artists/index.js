import Vue from 'vue'
import * as types from '../../mutation-types'

const state = {
  artists: []
}

const mutations = {
  [types.ARTISTS_FETCH_ALL] (state) {
    Vue.http.get('http://localhost:3000/members/1.json').then((r) => {
      console.log(r)
      state.artists = r.body
    }, (err) => {
      state.artists = err
    })
  }
}

const actions = {
  artistsFetchAll ({commit}) {
    commit(types.ARTISTS_FETCH_ALL)
  }
}

export default {
  state,
  mutations,
  actions
}
