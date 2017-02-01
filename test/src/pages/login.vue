<template lang="pug">
  form.alert.alert-success(@submit.prevent="doLogin")
    .alert.alert-danger(v-if="this.err.hasError") {{this.err.msg}}
    .row
      .col-xs-10
        h3 Login
      .col-xs-2.text-xs-right
        button.btn.btn-danger(@click.prevent="hideLogin") X

    .form-group
      label(for="email1") Email
      input#email1.form-control(v-model="credentials.email")
    .form-group
      label(for="password1") Password
      input#password1.form-control(type="password", v-model="credentials.password")
    .form-group
      input.btn.btn-success.pull-xs-right(type="submit", value="Login")
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
    ...mapActions(['login', 'errBadLogin', 'errReset', 'hideLogin']),
    doLogin: function () {
      this.errReset()
      this.login(this.credentials).then(() => {
        console.log('logging in')
        this.hideLogin()
      }, () => this.errBadLogin())
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
