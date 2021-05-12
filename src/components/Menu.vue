<template lang='pug'>

  .c-menu
    div
      span {{textTheme}}
    button(@click='toggleTheme')
      span Cambiar tema

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Menu',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters({
      textTheme: 'theme/textTheme'
    })
  },
  methods: {
    ...mapActions({
      toggleTheme: 'theme/toggleTheme'
    })
  }
}

</script>

<style lang='stylus' scoped>

</style>
