import * as types from './mutation-types'
// import {merge} from 'lodash'
import axios from 'axios'
import API from './og-api'
import createHeaders from '../utils/createHeaders'
// import {OGPROFILEBACKUP} from '../config'
// import {merge} from 'lodash'
import {artistModel} from '../models/artist.model'
// import {Storage} from '../utils/local-storage'

// var Artist = new ArtistModel({name: 'eric', url: '/eric'})

const state = {...artistModel}

const mutations = {
  // [types.ACCOUNT.RESTOREBACKUP] (state) {
  //   if (Storage.hasBackup()) {
  //     var newState = Storage.getBackup()
  //     Object.assign(state, JSON.parse(newState))
  //   } else {
  //     window.alert('no backup to restore!')
  //   }
  // },
  // [types.ACCOUNT.CREATEBACKUP] (state) {
  //   Storage.createBackup(JSON.stringify(state))
  //   console.log('Backup Saved!')
  // },
  // [types.ACCOUNT.DELETEBACKUP] (state) {
  //   Storage.deleteBackup()
  //   console.log('removed')
  // },
  [types.ACCOUNT.SETPROFILEDATA] (state, data, key) {
    if (typeof data === 'object') {
      // ASSIGN BY OBJECT
      var newData = {}
      Object.keys(data).map(function (k) {
        if (data[k] !== '') {
          newData = {[k]: data[k]}
          Object.assign(state, newData)
        }
      })
    } else {
      // ASSIGN DIRECTLY BY KEY/VAL
      if (state.hasOwnProperty(key)) {
        state[key] = data
      } else {
        // TOAST
        console.log('setprofiledata: error with ', data)
      }
    }
  }
}

const actions = {
  deleteBackup ({commit}) {
    commit(types.ACCOUNT.DELETEBACKUP)
  },
  createBackup ({commit}) {
    var yn = window.confirm('Are you sure you want to backup this data?')
    if (yn) {
      commit(types.ACCOUNT.CREATEBACKUP)
    }
  },
  restoreBackup ({commit}) {
    commit(types.ACCOUNT.RESTOREBACKUP)
    console.log('restored!')
  },
  initProfileData ({commit}) {
    // TODO: init from backup if it exists
    // var savedData = false
    // if (Storage.hasBackup()) savedData = Storage.getBackup()
    // if (savedData) {
    //   commit(types.ACCOUNT.SETPROFILEDATA, JSON.parse(savedData))
    // } else {
    return new Promise((resolve, reject) => {
      axios.request({
        method: 'get',
        url: API.PROFILE,
        headers: createHeaders(true)
      }).then(function (r) {
        commit(types.ACCOUNT.SETPROFILEDATA, r.data)
      }).then(function () {
        resolve(true)
      }).catch(function (e) {
        // TOAST
        resolve(false)
      })
    })
    // }
  },
  setProfileData ({commit}, data, key) {
    if (typeof data === 'object') {
      commit(types.ACCOUNT.SETPROFILEDATA, data)
    } else {
      commit(types.ACCOUNT.SETPROFILEDATA, data, key)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
