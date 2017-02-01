<template lang="pug">
.row
  .col-xs-12
    h3 artists
    state-select
    artist-detail(v-for="e in artists", :artist="e")
</template>

<script>
// import {mapActions, mapState} from 'vuex'
import ArtistDetail from '../components/artist-detail'
import StateSelect from '../components/state-select'
export default {
  data: function () {
    return {
      artists: [1, 2, 3]
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
    ArtistDetail, StateSelect
  }
}
</script>

<style lang="scss">
</style>
