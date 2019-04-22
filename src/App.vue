<template>
  <v-app>
    <div :class="{'blur': overlayStatus}">
      <Header/>
      <router-view/>
    </div>
    <Overlay v-if="overlayStatus"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Overlay from '@/components/Overlay.vue';

export default {
  name: 'App',
  components: {
    Header,
    Overlay,
  },
  computed: {
    overlayStatus() {
      return this.$store.getters.overlayStatus;
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

  .blur {
    filter: blur(5px);
  }
}
</style>