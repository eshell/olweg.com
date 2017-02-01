<template lang="pug">
span
  venue-detail(v-for="e in venues.venues", :venue="e")
</template>

<script>
import {mapActions, mapState} from 'vuex'
import VenueDetail from '../components/venue-detail'

export default {
  data () {
    return {}
  },
  computed: mapState(['venues']),
  mounted () {
    this.updateTitle('Venues')
    this.venuesFetchAll()
    console.log(this.venues)
  },
  methods: {
    ...mapActions(['updateTitle', 'venuesFetchAll'])
  },
  components: {
    VenueDetail
  }
}
</script>

<style lang="scss">
</style>
