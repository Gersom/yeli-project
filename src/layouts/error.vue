<template lang="pug">

  .Layout-error.o-container
    h1 Ups! Pagína no encontrada

</template>

<script>

export default {
  name: 'ErrorLayout',
  components: {
  },
  created: () => {
    // eslint-disable-next-line no-console
    console.log('Error: ', '404')
  }
}

</script>

<style>
</style>
