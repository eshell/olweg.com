<template lang="pug">
  .container
    accountGeneral
    artistProfile(v-if="auth.authData.type===1")
    venueProfile(v-if="auth.authData.type===2")
</template>

<script>
import {mapState} from 'vuex'
import artistProfile from './artist-profile'
import venueProfile from './venue-profile'
import accountGeneral from '../components/account/account-general'

// TODO: FIX LOCALSTORAGE DATA BACKUPS

export default {
  methods: {
    // ...mapActions(['setProfileData'])
  },
  // mounted () {
  // },
  computed: mapState(['auth']),
  components: {accountGeneral, artistProfile, venueProfile}
}
</script>
