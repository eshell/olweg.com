import md5 from 'blueimp-md5'

export function randomID () {
  return md5(Date() + Math.random())
}
