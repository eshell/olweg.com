import Vue from 'vue'
import * as types from '../../mutation-types'

const state = {
  events: []
}

const mutations = {
  [types.EVENTS_FETCH_ALL] (state) {
    Vue.http.get('http://localhost:3000/events.json').then((r) => {
      state.events = r
    }, (err) => {
      state.events = err
    })
  }
}

const actions = {
  eventsFetchAll ({commit}) {
    commit(types.EVENTS_FETCH_ALL)
  }
}

export default {
  state,
  mutations,
  actions
}
