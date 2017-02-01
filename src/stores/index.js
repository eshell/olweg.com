import Vue from 'vue'
import Vuex from 'vuex'
import ui from './og-ui'
import auth from './og-auth'
import artistProfile from './og-account-artist'
import accountGeneral from './og-account-general'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    auth,
    artistProfile,
    accountGeneral
  }
})
