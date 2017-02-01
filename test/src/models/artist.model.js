import {GenreModel} from './genre.model'
import md5 from 'blueimp-md5'

class _ArtistModel {
  constructor ({id, name, genres}) {
    this.id = id
    this.name = name
    this.genres = genres
  }
}

export default function (artistObj) {
  const artist = {
    id: md5(Date()),
    name: 'artist',
    genres: [GenreModel()]
  }

  const newArtist = Object.assign(artist, artistObj)

  return new _ArtistModel(newArtist)
}
