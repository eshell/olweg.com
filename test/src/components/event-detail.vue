<template lang="pug">
.row
  .col-xs-12
    .row
      .col-xs-6
        | {{event.time}}
      .col-xs-6
        | {{event.title}}
    .row
      .col-xs-12
        | {{event.where.address}}, {{event.where.city}}, {{event.where.state}} {{event.where.zip}}
    .row
      .col-xs-12
        a.btn.btn-info(v-for="g in event.genres", :href="g.id") {{g.name}}
</template>

<script>
export default {
  name: 'event-detail',
  props: ['event'],
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
