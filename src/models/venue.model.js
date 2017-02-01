import {GenreModel} from './genre.model'
import md5 from 'blueimp-md5'

class _VenueModel {
  constructor ({id, name, genres}) {
    this.id = id
    this.name = name
    this.genres = genres
  }
}

export default function (venueObj) {
  const venue = {
    id: md5(Date()),
    name: 'venue',
    genres: [GenreModel()]
  }

  const newVenue = Object.assign(venue, venueObj)

  return new _VenueModel(newVenue)
}
