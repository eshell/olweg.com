<template lang="pug">
.row
  .col-xs-12
    div(style="border:1px #000 solid").
      id
      t.integer('owner_id')
      t.integer('venue_id')
      t.dateTime('date')
      t.string('title')
      t.string('description')
      t.string('address')
      t.string('city')
      t.string('state')
      t.string('zip')

</template>

<script>
export default {
  name: 'event-detail'
  // ,
  // props: ['event']
}
</script>

<style lang="css">
</style>
