<template lang="pug">
.container
  .row
    .col.s12
      ul.ul
        li
          strong artist profile data
        li Url: <input v-model="updated.url" :placeholder="artistProfile.url" @keyup.enter="setProfileData(updated);updated.url='';"/>
          button(@click="updated.url = ''; ") Reset
        li Profile Image: <img :src="artistProfile.profileImage" />
        li audio
          .container
            ul.ul
              li(v-for="song in artistProfile.audio") {{song}}
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {artistModel} from '../models/artist.model'
// import {Storage} from '../utils/local-storage'
export default {
  data: function () {
    return {
      updated: {...artistModel}
    }
  },
  computed: {
    ...mapState(['artistProfile', 'auth'])
    // hasBackup: function () {
    //   return Storage.hasBackup()
    // }
  },
  methods: {
    ...mapActions(['initProfileData']),
    setProfileData: function (d) {
      console.log('setprofiledata: ', d)
    }
  },
  created () {
    this.initProfileData().catch(function (e) {
      // TOAST
      console.log('errored ', e)
    })
  },
  beforeDestroy () {
    // this.backupProfileData()
  }
}
</script>
