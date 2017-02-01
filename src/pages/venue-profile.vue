<template lang="pug">
.row
  .col.s12 venue profile: {{data}}
</template>

<script>
// import {mapActions, mapState} from 'vuex'
// import ArtistDetail from '../components/artist-detail'

export default {
  props: ['data']
}
</script>
