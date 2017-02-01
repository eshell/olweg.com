// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './stores'
import router from './router'
import VueResource from 'vue-resource'
// import { sync } from 'vuex-router-sync'

// sync(store, router)

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  http: {},
  store,
  router,
  render: h => h(App)
})
