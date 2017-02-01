import md5 from 'blueimp-md5'

export function randomID () {
  return md5(Date() + Math.random())
}

export function isUndef (v) {
  return typeof v === undefined
}

export function setPageTitle (title) {
  document.title = title
}
