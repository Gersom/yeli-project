<template lang='pug'>
  .container(:class='nameTheme')
    Menu
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

import { mapGetters } from 'vuex'
import ButtonStreamer from '~/components/ButtonStreamer'
import Menu from '~/components/Menu'
import Logo from '~/components/Logo'

export default {
  name: 'HomePage',
  components: {
    ButtonStreamer, Menu, Logo
  },
  computed: {
    ...mapGetters({
      nameTheme: 'theme/nameTheme'
    })
  }
}

</script>

<style lang='stylus' scoped>

  .container
    background-color: $clr-primary
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  .container.light
    background: radial-gradient(circle, $clr-primary 0%, $clr-primary2 100%);
   .container.dark
    background: radial-gradient(circle, $clr-primary-dark 0%, $clr-primary-dark2 50%, $clr-primary-dark3 100%);

  .links
    display flex
    justify-content center
    align-items center
  .links > *
      margin 0 10px

</style>
