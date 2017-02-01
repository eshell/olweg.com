import store from '../stores'

export function accountGuard (to, from, next) {
  return new Promise((resolve, reject) => {
    store.dispatch('check').then(() => {
      next()
    }, (e) => {
      console.log(e)
      next('/')
    })
  })
}
