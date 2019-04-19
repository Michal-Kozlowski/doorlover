<template>
  <v-app>
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/assets/styles/styles.scss';

</style>