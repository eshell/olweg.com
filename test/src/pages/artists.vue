<template lang="pug">
span
  button(@click="updateData") update
  hr
  artist-detail(v-for="e in artists.artists", :artist="e")
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ArtistDetail from '../components/artist-detail'

export default {
  computed: mapState(['artists']),
  created () {
    this.updateTitle('Artists')
    this.artistsFetchAll()
  },
  methods: {
    ...mapActions(['updateTitle', 'artistsFetchAll']),
    updateData: function () {
      this.artistsFetchAll()
    }
  },
  components: {
    ArtistDetail
  }
}
</script>

<style lang="scss">
</style>
