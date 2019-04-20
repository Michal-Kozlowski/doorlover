<template>
  <v-app>
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data () {
    return {
      //
    }
  },
  created() {
    this.$store.dispatch('load_state');
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.application {
  &--wrap {
    background: $background;
  }
}
</style>