<template lang="pug">

  .c-logo
    figure
      img(src='~/assets/image/yeli-logo.png')

</template>

<script>

export default {
  name: 'Logo',
  components: { }
}

</script>

<style lang='stylus' scoped>

.c-logo
  align-items center
  display flex
  justify-content center
  figure
    background #fff
    display block
    border-radius 100%
    display flex
    justify-content center
    align-items center
    border 7px solid #fff
  img
    display block
    width 200px
    height 200px

</style>
