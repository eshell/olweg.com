<template lang="pug">
.row
  .col-xs-12
    h3 venues
    state-select
    venue-detail(v-for="e in venues")
</template>

<script>
// import {mapActions, mapState} from 'vuex'
import VenueDetail from '../components/venue-detail'
import StateSelect from '../components/state-select'
export default {
  data: function () {
    return {
      venues: [1, 2, 3]
    }
  },
  // computed: mapState(['artists']),
  // created () {
  //   this.updateTitle('Artists')
  //   this.artistsFetchAll()
  // },
  // methods: {
  //   ...mapActions(['updateTitle', 'artistsFetchAll']),
  //   updateData: function () {
  //     this.artistsFetchAll()
  //   }
  // },
  components: {
    VenueDetail, StateSelect
  }
}
</script>
