<template lang="pug">
.container
  .row
    //- TODO: implement backups
    //- .col.s12
    //-   button.btn.red(@click="createBackup()") Backup Data
    //-   button.btn.red(@click="deleteBackup()") Remove Backup
    //-   button.btn.red(@click="restoreBackup()") Restore from backup data
    //-   .container.blue(v-if="hasBackup") You have a backup
    //-   .container.blue(v-if="!hasBackup") You not have a backup
    .col.s12
      ul.ul
        li
          strong general  account info
        li
          strong auth.authData
        li ID: {{auth.authData.id}}
        li TYPE: {{auth.authData.type}}
        li EMAIL: {{auth.authData.email}}
        li Referrer: {{auth.authData.refId}}
        li
          strong accountGeneral
        li Name: <input v-model="updated.name" :placeholder="accountGeneral.name" @keyup.enter="setGeneralData(updated);updated.name='';"/>
          button(@click="updated.name = ''; ") Reset
        li City: <input v-model="updated.city" :placeholder="accountGeneral.city" @keyup.enter="setGeneralData(updated);updated.city='';"/>
          button(@click="updated.city = ''; ") Reset
        li State: <input v-model="updated.state" :placeholder="accountGeneral.state" @keyup.enter="setGeneralData(updated);updated.state='';"/>
          button(@click="updated.state = ''; ") Reset
        li Zip <input v-model="updated.zip" :placeholder="accountGeneral.zip" @keyup.enter="setGeneralData(updated);updated.zip='';"/>
          button(@click="updated.zip = ''; ") Reset
        li events
          .container
            ul.ul
              li(v-for="event in accountGeneral.events") {{event}}
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {memberModel} from '../../models/member.model'
// import {Storage} from '../../utils/local-storage'
export default {
  data: function () {
    return {
      updated: {...memberModel}
    }
  },
  computed: {
    ...mapState(['accountGeneral', 'auth'])
    // hasBackup: function () {
    //   return Storage.hasBackup()
    // }
  },
  methods: {
    ...mapActions(['initGeneralData', 'setGeneralData'])
    // ...mapActions(['initGeneralData', 'setGeneralData', 'createBackup', 'restoreBackup', 'deleteBackup'])
  },
  created () {
    console.log('created account-general')
    this.initGeneralData().catch(function (e) {
      // TOAST
      console.log('errored ', e)
    })
  },
  beforeDestroy () {
    // this.backupProfileData()
  }
}
</script>
