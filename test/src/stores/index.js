import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui/index'
import auth from './modules/auth/index'
import err from './modules/error/index'
import events from './modules/events/index'
import artists from './modules/artists/index'
import venues from './modules/venues/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    events,
    auth,
    artists,
    venues,
    err
  }
})
