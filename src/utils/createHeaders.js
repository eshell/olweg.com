import {OGTOKENKEY} from '../config'

export default function createHeaders (auth) {
  var headers = {}

  if (auth) {
    headers = Object.assign({'Authorization': 'Bearer ' + window.localStorage.getItem(OGTOKENKEY)})
  }

  return headers
}
