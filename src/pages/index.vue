<template lang='pug'>
  .HomePage(:class='nameTheme')
    div
      .logito
        <Logo />
      h1.title
        |Yeli Mota
      h2.subtitle
        |Streamer / Youtuber / Influencer

      .links
        ButtonStreamer(nameTo='Lawyer' contentText='Abogada')
        ButtonStreamer(nameTo='Adviser' contentText='Asesora')

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters({
      nameTheme: 'theme/nameTheme'
    })
  }
}

</script>

<style lang='stylus' scoped>

  .HomePage
    background-color: $clr-primary
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  .HomePage.light
    background: radial-gradient(circle, $clr-primary 0%, $clr-primary2 100%);
  .HomePage.dark
    background: radial-gradient(circle, $clr-primary-dark 0%, $clr-primary-dark2 50%, $clr-primary-dark3 100%);

  .HomePage
    .logito
      margin-bottom 20px
    .title
      font-size 50px
      margin-bottom 0

  .links
    align-items center
    display flex
    justify-content center
    margin-top 30px
  .links > *
      margin 0 10px

</style>
