<template lang="pug">
  p account
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    this.updateTitle('Account')
  },
  methods: {
    ...mapActions(['updateTitle'])
  },
  components: {}
}
</script>

<style lang="scss">
</style>
