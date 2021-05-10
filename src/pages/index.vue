<template lang='pug'>
  .container
    div
      Logo
      h1.o-title
        |yeli-project

      .links
        NuxtLink(:to="{ name: 'Lawyer' }" class="button--green")
          span Abogada
        NuxtLink(:to="{ name: 'Adviser' }" class="button--green")
          span Asesora

</template>

<script>
export default {}
</script>

<style lang='stylus' scoped>

  .container
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  .subtitle
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;

  .links
    padding-top: 15px;
    & > *:nth-child(1)
      margin-right 15px

</style>
