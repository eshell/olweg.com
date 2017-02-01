<template lang="pug">
.row
  .col-xs-12
    .row
      .col-xs-6
        | {{venue.id}}
      .col-xs-6
        | {{venue.name}}
    .row
      .col-xs-12
        a.btn.btn-info(v-for="g in venue.genres", :href="g.id") {{g.name}}
</template>

<script>
export default {
  name: 'venue-detail',
  props: ['venue'],
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
