<template lang='pug'>
  .container(:class='mode[statusMode]')
    div
      Logo
      h1.title
        |Yeli Mota
      h2.subtitle
        |Youtuber / Streamer

      .links
        button(@click='toogleMode')
          span Alternar Modo
        ButtonStreamer(nameTo='Lawyer' contentText='Abogada')
        ButtonStreamer(nameTo='Adviser' contentText='Asesora')

</template>

<script>

import ButtonStreamer from '~/components/ButtonStreamer'

export default {
  components: { ButtonStreamer },
  data () {
    return {
      mode: ['white', 'black'],
      statusMode: 0
    }
  },
  methods: {
    toogleMode () {
      this.statusMode += 1
      if (this.statusMode > (this.mode.length - 1)) {
        this.statusMode = 0
      }
    }
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
  .container.white
    background: radial-gradient(circle, $clr-primary 0%, $clr-primary2 100%);
   .container.black
    background: radial-gradient(circle, $clr-primary-dark 0%, $clr-primary-dark2 50%, $clr-primary-dark3 100%);

  .links
    display flex
    justify-content center
    align-items center
  .links > *
      margin 0 10px

</style>
