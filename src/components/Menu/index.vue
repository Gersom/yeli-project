<template lang='pug'>

  .c-menu
    <ThemeComponent />

</template>

<script>

import ThemeComponent from './Theme'

export default {
  name: 'Menu',
  components: { ThemeComponent },
  data: () => {
    return {
    }
  }
}

</script>

<style lang='stylus' scoped>

  .c-menu
    position fixed
    top 0
    left 0
    width 100%
    height 70px
    // background rgba(0,0,0, 0.58)

</style>
