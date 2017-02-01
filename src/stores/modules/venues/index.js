import Vue from 'vue'
import * as types from '../../mutation-types'

const state = {
  venues: []
}

const mutations = {
  [types.VENUES_FETCH_ALL] (state) {
    Vue.http.get('http://localhost:3000/venues.json').then((r) => {
      console.log(r)
      state.venues = r.body
    }, (err) => {
      state.venues = err
    })
  }
}

const actions = {
  venuesFetchAll ({commit}) {
    commit(types.VENUES_FETCH_ALL)
  }
}

export default {
  state,
  mutations,
  actions
}
