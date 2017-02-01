import * as types from './mutation-types'
// import {merge} from 'lodash'
import axios from 'axios'
import API from './og-api'
import createHeaders from '../utils/createHeaders'
// import {OGPROFILEBACKUP} from '../config'
// import {merge} from 'lodash'
import {memberModel} from '../models/member.model'
import {Storage} from '../utils/local-storage'

// var Artist = new ArtistModel({name: 'eric', url: '/eric'})

const state = {...memberModel}
var stateChangeCount = 0
function logState () {
  stateChangeCount++
}
function getStateCount () {
  return stateChangeCount
}
const mutations = {
  [types.ACCOUNT.RESTOREBACKUP] (state) {
    if (Storage.hasBackup()) {
      var newState = Storage.getBackup()
      Object.assign(state, JSON.parse(newState))
    } else {
      window.alert('no backup to restore!')
    }
  },
  [types.ACCOUNT.CREATEBACKUP] (state) {
    Storage.createBackup(JSON.stringify(state))
    console.log('Backup Saved!')
  },
  [types.ACCOUNT.DELETEBACKUP] (state) {
    Storage.deleteBackup()
    console.log('removed')
  },
  [types.ACCOUNT.SETGENERALDATA] (state, data, key) {
    logState()
    console.log(getStateCount())
    if (typeof data === 'object') {
      // ASSIGN BY OBJECT
      var newData = {}
      Object.keys(data).map(function (k) {
        if (data[k] !== '') {
          newData = {[k]: data[k]}
          Object.assign(state, newData)
        }
      })
      axios.request({
        method: 'post',
        url: API.GENERAL,
        headers: createHeaders(true),
        data: data
      }).then(function (r) {
        console.log(r)
      }).catch(function (e) {
        // TOAST
        console.warn(e)
      })
    } else {
      // ASSIGN DIRECTLY BY KEY/VAL
      if (state.hasOwnProperty(key)) {
        state[key] = data
      } else {
        // TOAST
        console.log('setgeneraldata: error with ', data)
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
  initGeneralData ({commit}) {
    // var savedData = false
    // if (Storage.hasBackup()) savedData = Storage.getBackup()
    // if (savedData) {
    //   commit(types.ACCOUNT.SETGENERALDATA, JSON.parse(savedData))
    // } else {
    return new Promise((resolve, reject) => {
      axios.request({
        method: 'get',
        url: API.GENERAL,
        headers: createHeaders(true)
      }).then(function (r) {
        commit(types.ACCOUNT.SETGENERALDATA, r.data)
      }).then(function () {
        resolve(true)
      }).catch(function (e) {
        // TOAST
        resolve(false)
      })
    })
    // }
  },
  setGeneralData ({commit}, data, key) {
    if (typeof data === 'object') {
      commit(types.ACCOUNT.SETGENERALDATA, data)
    } else {
      commit(types.ACCOUNT.SETGENERALDATA, data, key)
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
