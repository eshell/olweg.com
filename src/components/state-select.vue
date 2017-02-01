<template lang="pug">
.row
  .col-xs-12
    |state select:&nbsp;
    span(v-for="state in states")
      | {{state}}&nbsp;
</template>

<script>
export default {
  name: 'state-select',
  data: function () {
    return {
      states: ['MI', 'OH', 'IN', 'IL']
    }
  }
}
</script>
<style lang="css">
</style>
