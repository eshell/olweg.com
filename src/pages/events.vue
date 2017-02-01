<template lang="pug">
div
  h3 events
  state-select
  event-detail(v-for="e in events")
  //- event-detail(v-for="e in events", :event="e")
</template>

<script>
import EventDetail from '../components/event-detail'
import StateSelect from '../components/state-select'
// import EventModel from '../models/event.model'
// import {mapActions, mapState} from 'vuex'

export default {
  data: function () {
    return {
      events: [1, 2, 3]

    }
  },
  components: {
    EventDetail,
    StateSelect
  }
}
</script>

<style lang="scss">
</style>
