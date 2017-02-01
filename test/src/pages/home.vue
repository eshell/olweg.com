<template lang="pug">
  div
    p home
    hr
</template>

<script>
import {mapActions} from 'vuex'
// import moment from 'moment'

export default {
  data () {
    return {
    }
  },
  computed: {},
  mounted () {
    this.resetTitle()
  },
  methods: {
    ...mapActions(['resetTitle'])
  },
  components: {}
}
</script>

<style lang="scss">
</style>
