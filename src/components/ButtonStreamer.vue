<template lang="pug">
  .c-button-streamer
    NuxtLink(:to="{ name: nameTo }" :class="`${classText} button`")
      span {{contentText}}
</template>

<script lang="ts">

export default {
  name: 'ButtonStreamer',
  components: { },
  props: {
    nameTo: {
      type: String,
      default: ''
    },
    contentText: {
      type: String,
      default: 'Boton'
    },
    classText: {
      type: String,
      default: ''
    }
  }
}

</script>

<style lang="stylus" scoped>

.c-button-streamer
  .button
    display: block
    min-width 120px
    border-radius: 4px
    border: 1px solid #fff
    color: #fff
    text-decoration: none
    padding: 10px 30px

  .button:hover
    color: #FA9FB0;
    background-color: #fff;

</style>
