import Vue from 'vue'
import * as types from '../../mutation-types'

const state = {
  artists: []
}

const mutations = {
  [types.ARTISTS_FETCH_ALL] (state) {
    Vue.http.get('http://localhost:3000/members.json?type=1').then((r) => {
      if (r.body.length) {
        state.artists = r.body
      } else {
        console.log('no data')
      }
    }, (err) => {
      console.log(err)
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
