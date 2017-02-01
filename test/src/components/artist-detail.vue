<template lang="pug">
.row
  .col-xs-12
    .row
      .col-xs-6
        | {{artist.id}}
      .col-xs-6
        | {{artist.name}}
    .row
      .col-xs-12
        a.btn.btn-info(v-for="g in artist.genres", :href="g.id") {{g.name}}
</template>

<script>
export default {
  name: 'artist-detail',
  props: ['artist'],
  computed: {},
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
