<template lang='pug'>
  .container
    div
      Logo
      h1.title
        |Yeli Mota
      h2.subtitle
        |Youtuber / Streamer

      .links
        ButtonStreamer(nameTo='Lawyer' contentText='Abogada')
        ButtonStreamer(nameTo='Adviser' contentText='Asesora')

</template>

<script>

import ButtonStreamer from '~/components/ButtonStreamer'

export default {
  components: { ButtonStreamer }
}

</script>

<style lang='stylus' scoped>

  .container
    background-color: rgb(233, 161, 185)
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  .links
    display flex
    justify-content center
    align-items center
  .links > *
      margin 0 10px

</style>
