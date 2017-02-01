<template lang="pug">
.container-fluid
  nav.navbar.navbar-dark.bg-primary
    router-link(to='/', class='navbar-brand') Olweg
    ul.nav.navbar-nav.pull-xs-right
      li.nav-item(v-for="l in routes" v-if="l.ui")
        router-link(:to="l.path", class='nav-link') {{l.title}}
      li.nav-item(v-if="!this.auth.authorized")
        router-link.nav-link(to='/register') Register
      li.nav-item(v-if="this.auth.authorized")
        router-link.nav-link(to='/account') Account
      li.nav-item(v-if="!this.auth.authorized")
        a.nav-link(href='javascript:void(0)', @click="toggleLogin") Login
      li.nav-item(v-if="this.auth.authorized")
        a.nav-link(href='javascript:void(0)', @click="logout") Logout
  .card.card-block
    .row
      .col-xs-12.text-xs-center
        h3 {{this.ui.title}}
        hr
    Login(v-if="this.ui.showLogin")
    //- keep-alive
    router-view(v-if="!this.ui.showLogin")
</template>

<script>
import routes from './routes'
import router from './router'
import {mapState, mapActions} from 'vuex'
import Login from './pages/login'
// import * as types from './stores/mutation-types'

export default {
  data () {
    return {
      routes: routes,
      showLogin: false
    }
  },
  computed: mapState([
    'ui',
    'auth',
    'err'
  ]),
  // beforeCreate () {
  // },
  // created () {},
  beforeUpdate () {
    if (this.auth.authorized && this.$route.name === 'login') {
      router.push('/account')
    }
  },
  updated () {
    if (!this.auth.authorized && this.$route.name === 'account') {
      router.push({path: '/'})
    }
  },
  // beforeDestroy () {},
  destroyed () {
  },
  methods: {
    ...mapActions(['logout', 'toggleLogin'])
  },
  components: {
    Login
  }
}
</script>

<style lang="scss">
  @import './sass/bootstrap/bootstrap.scss'
</style>
