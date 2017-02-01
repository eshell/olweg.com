import {randomID} from '../utils/random'

class _GenreModel {
  constructor ({id, name}) {
    this.id = id
    this.name = name
  }
}

export function GenreModel (genreObj) {
  const genre = {
    id: randomID(),
    name: 'genre'
  }

  const newGenre = Object.assign(genre, genreObj)

  return new _GenreModel(newGenre)
}
