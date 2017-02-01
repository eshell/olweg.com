<template lang="pug">
  form.container(@submit.prevent="doRegister(credentials)")
    .container.red Err: this.err.msg
    .row
      .col.s12
        h3 Register
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
        input.btn.btn-block(type="submit", value="Register")
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
  computed: mapState(['auth', 'err']),
  methods: {
    ...mapActions(['doRegister'])
    // doLogin: function () {
    //   this.errReset()
    //   this.login(this.credentials).then(() => {
    //     console.log('logging in')
    //     this.hideLogin()
    //   }, () => this.errBadLogin())
    // }
  },
  created () {
    console.log('account#created')
    if (this.auth.loggedIn) {
      console.log('already logged in')
      this.$router.push('account')
    }
  },
  // watch: {
  //   'auth.loggedIn': function (n, o) {
  //     if (n) {
  //       this.$router.go(-1)
  //     }
  //   }
  // },
  components: {}
}
</script>
