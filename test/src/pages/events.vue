<template lang="pug">
span
  event-detail(v-for="e in events.events", :event="e")
</template>

<script>
import EventDetail from '../components/event-detail'
// import EventModel from '../models/event.model'
import {mapActions, mapState} from 'vuex'

export default {
  computed: mapState(['events']),
  methods: {
    ...mapActions(['updateTitle', 'eventsFetchAll'])
  },
  mounted () {
    this.updateTitle('Events')
    this.eventsFetchAll()
  },
  components: {
    EventDetail
  }
}
</script>

<style lang="scss">
</style>
