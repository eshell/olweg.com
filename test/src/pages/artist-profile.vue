<template lang="pug">
.row
  .col-xs-12
    .row
      .col-xs-6
        | {{id}}
      .col-xs-6
        | \{\{artist.name\}\}
    //- .row
      .col-xs-12
        a.btn.btn-info(v-for="g in artist.genres", :href="g.id") {{g.name}}
</template>

<script>
// import {mapActions, mapState} from 'vuex'
// import ArtistDetail from '../components/artist-detail'

export default {
  data: function () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route.params.id': function (newp, oldp) {
      this.id = newp
    }
  },
  mounted () {
    console.log('updated ', this.id)
  },
//   computed: mapState(['artists']),
  created () {
    // this.updateTitle('Artists')
    // this.artistsFetch(this.id)
  }
//   methods: {
//     ...mapActions(['updateTitle', 'artistsFetchAll']),
//     updateData: function () {
//       this.artistsFetchAll()
//     }
//   },
//   components: {
//     ArtistDetail
//   }
}
</script>

<style lang="scss">
</style>
