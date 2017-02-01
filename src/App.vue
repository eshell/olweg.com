<template lang="pug">
.container
  .row
    .col.s12
      .container.center.wide.padding-0
        router-link.btn-block-wrap.blue(to='/') olweg.com| our local world entertainment guide
  .row
    .col.s12
      .btn-group.border
        router-link.btn.white.wide.hover-khaki(:to="l.path", v-for="l in routes" v-if="l.ui", :style="'width: ' + linkWidth + '%'") {{l.title}}
  .row
    .col.s12
      ul.navbar.border.round.text-center
        li.nav-item(v-if="!auth.loggedIn")
          router-link.nav-link(to='/register') Register
        li.nav-item(v-if="auth.loggedIn")
          router-link.nav-link(to='/account') Account
        li.nav-item
          router-link(to='/login' v-if="!auth.loggedIn") Login
        li.nav-item
          a.nav-link(@click.prevent="doLogout()", v-if="auth.loggedIn", href="javascript: void(0);") Logout
        li.nav-item
          router-link(to='/a') A
        li.nav-item
          router-link(to='/b') B
        li.nav-item
          router-link(to='/beqere') junk

      router-view
      .container.amber
        div(v-if="auth.loggedIn") Logged In
        div(v-if="!auth.loggedIn") Logged Out
      .container
        |browser: {{auth.agent}}
</template>

<script>
import routes from './config/routes'
import {mapState, mapActions} from 'vuex'

export default {
  data: function () {
    return {
      routes,
      linkWidth: 0
    }
  },
  computed: mapState(['ui', 'auth']),
  methods: {
    ...mapActions(['toggleMenu', 'doLogout', 'isAuthorized'])
  },
  updated: function () {
    if (this.auth.loggedIn) {
      if (this.$router.currentRoute.name === 'login') {
        this.$router.go(-1)
      }
    } else {
      if (this.$router.currentRoute.name === 'account') {
        this.$router.push('/login')
      }
    }
  },
  created: function () {
    this.isAuthorized().then(authorized => {
      if (authorized) {
        if (this.$router.currentRoute.name === 'login') {
          this.$router.go(-1)
        }
      } else {
        if (this.$router.currentRoute.name === 'account') {
          this.$router.push('/login')
        }
      }
    })
    let numMenuLinks = 0

    this.routes.map(l => {
      if (l.ui) {
        numMenuLinks++
      }
    })
    this.linkWidth = 100 / numMenuLinks
  }
}
</script>

<style lang="css">
  @import './assets/w3.css';
</style>
