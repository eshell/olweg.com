import Home from './pages/home'
import Events from './pages/events'
import Account from './pages/account'
import Artists from './pages/artists'
import ArtistProfile from './pages/artist-profile'
import Venues from './pages/venues'
import VenueProfile from './pages/venue-profile'
// import Login from './pages/login'
import Register from './pages/register'
import {accountGuard} from './guards/account-guard'

export default [
  {name: 'home', path: '/', component: Home},
  {name: 'events', path: '/events', component: Events, title: 'Events', ui: 'menu'},
  {name: 'artists', path: '/artists', component: Artists, title: 'Artists', ui: 'menu'},
  {name: 'venues', path: '/venues', component: Venues, title: 'Venues', ui: 'menu'},
  {name: 'account', path: '/account', component: Account, title: 'Account', beforeEnter: accountGuard},
  {name: 'artist-profile', path: '/artist/:id', component: ArtistProfile, title: 'Artist profile'},
  {name: 'venueProfile', path: '/venue/:id', component: VenueProfile, title: 'Venue profile'},
  // {path: '/login', component: Login, title: 'Login'},
  {path: '/register', component: Register, title: 'Register'}
]
