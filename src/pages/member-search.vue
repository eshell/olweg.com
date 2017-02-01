<template lang="pug">
.container
  div(v-if="type===404")
    h1 404, {{q}} Not Found
  og-artist-profile(v-if="type==='ARTIST'", :artist="{id, type}")
  og-venue-profile(v-if="type==='VENUE'", :venue="{id, type}")
</template>

<script>
import ogVenueProfile from './venue-profile'
import ogArtistProfile from './artist-profile'
// import router from 'vue-router'

// function formatUserUrl (id, type) {
//   return '/' + type + '/' + id
// }

const urls = [
  {url: 'a', id: 1, type: 'ARTIST'},
  {url: 'b', id: 2, type: 'VENUE'}
]

export default {
  data: function () {
    return {
      q: '',
      type: 404,
      id: 0
    }
  },
  components: {ogArtistProfile, ogVenueProfile},
  methods: {
    checkUrl (query) {
      let found = false
      urls.map(u => {
        if (u.url === query) {
          found = true
          this.q = u.url
          this.type = u.type
          this.id = u.id
          // this.$router.push(formatUserUrl(u.id, u.type))
        }
      })
      if (!found) {
        this.type = 404
      }
    }
  },
  watch: {
    '$route' () {
      this.q = this.$route.params.query
      this.checkUrl(this.$route.params.query)
      // console.log(this.$route)
    }
  },
  created () {
    this.q = this.$route.params.query
    this.checkUrl(this.$route.params.query)
  }
}
</script>
