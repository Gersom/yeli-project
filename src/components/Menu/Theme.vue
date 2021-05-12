<template lang='pug'>

  .c-theme
    .c-theme__text
      span {{textTheme}}
    button(
      class='c-theme__button'
      @click='toggleTheme')
      span Cambiar tema

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Theme',
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

  .c-theme
    height 100%
    display flex
    justify-content flex-end
    align-items center
    color #fff

    &__text
      margin-right 20px

    &__button
      border 2px solid #fff
      padding 10px 15px
      border-radius 10px
      color #fff
      display block
      margin-right 20px

</style>
