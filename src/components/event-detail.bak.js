// event-detail
// import {EventModel} from '../../models/event.model'
import Vue from 'vue'

export const EventDetail = Vue.component('event-detail', {
  functional: true,
  props: ['event'],
  render (h, ctx) {
    const event = ctx.props.event
    return (
      <div class="row">
      <div class="col-xs-12">
        <div class="row">
          <div class="col-xs-6">
            {event.time}
          </div>
          <div class="col-xs-6">
            {event.title}
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            {event.where.address}, {event.where.city}, {event.where.state} {event.where.zip}
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            {event.genres.map(g => (
              <a href={g.id} class="btn btn-info">{g.name}</a>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
  }
})
