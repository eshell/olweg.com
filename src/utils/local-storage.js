import {OGBACKUP} from '../config'

export const Storage = {
  deleteBackup: function () {
    window.localStorage.removeItem(OGBACKUP.GENERAL)
  },
  createBackup: function (v) {
    window.localStorage.setItem(OGBACKUP.GENERAL, v)
  },

  getBackup: function () {
    return window.localStorage.getItem(OGBACKUP.GENERAL)
  },

  hasBackup: function () {
    return !!window.localStorage.getItem(OGBACKUP.GENERAL)
  }
}

export const ArtistStorage = Storage
