import {GenreModel} from './genre.model'
import {LocationModel} from './location.model'
import moment from 'moment'
import {randomID} from '../utils'
// import _ from 'lodash'

class _EventModel {
  constructor ({id, title, time, where, genres}) {
    this.id = id
    this.title = title
    this.time = time
    this.where = where
    this.genres = genres
  }
}

/**
/ TODO:0 find better way to model data?
*/

export default function (eventObj) {
  const event = {
    id: randomID(),
    title: 'title',
    time: moment().format('M/D/YYYY h:mma'),
    where: LocationModel(),
    genres: [GenreModel(), GenreModel(), GenreModel()]
  }

  const newEvent = Object.assign(event, eventObj)
  return new _EventModel(newEvent)
}
