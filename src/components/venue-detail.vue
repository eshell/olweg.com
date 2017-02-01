<template lang="pug">
.row
  .col-xs-12
    div(style="border:1px #000 solid").
      id
        t.integer('ref_id')
        t.string('email')
        t.string('password')
        t.integer('type')
        t.string('display_name')
        t.string('address')
        t.string('city')
        t.string('state')
        t.string('zip')
        t.timestamps()

</template>

<script>
export default {
  name: 'venue-detail'
  // ,
  // props: ['event']
}
</script>

<style lang="css">
</style>
