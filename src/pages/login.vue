<template lang="pug">
  form.container(@submit.prevent="doLogin(credentials)")
    .container.red Err: this.err.msg
    .row
      .col.s12
        h3 Login
    .row
      .col.s12
        label(for="email1") Email
        input#email1(v-model="credentials.email")
    .row
      .col.s12
        label(for="password1") Password
        input#password1(type="password", v-model="credentials.password")
    .row
      .col.s12
        input.btn.btn-block(type="submit", value="Login")
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      credentials: {
        email: 'ericshell2010@gmail.com',
        password: 'test'
      }
    }
  },
  computed: mapState(['ui', 'auth', 'err']),
  methods: {
    ...mapActions(['doLogin'])
  },
  created () {
    // if (this.auth.loggedIn) {
    //   this.$router.push('account')
    // }
  },
  mounted () {
  }
}
</script>
