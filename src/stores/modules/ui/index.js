const state = {
  showMenu: false
}
const mutations = {
  toggleMenu (state) {
    state.showMenu = !state.showMenu
  }
}
const actions = {
  toggleMenu ({commit}) {
    commit('toggleMenu')
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
