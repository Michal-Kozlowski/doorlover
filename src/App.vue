<template>
  <v-app>
    <div class="wrap" :class="{'blur': overlayStatus}">
      <Header/>
      <router-view/>
    </div>
    <Overlay v-if="overlayStatus"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Overlay from '@/components/Overlay.vue';
import router from '@/router'

export default {
  name: 'App',
  components: {
    Header,
    Overlay,
  },
  computed: {
    overlayStatus() {
      return this.$store.getters.overlayStatus;
    },
  },
  created() {
    this.$store.dispatch('load_state')
      .then(() => {
        if (
          !this.$store.getters.email ||
          !this.$store.getters.password ||
          !this.$store.getters.token ||
          !this.$store.getters.organization
        ) {
          router.push({name: 'login'});
        }
      });
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

body,
html {
  min-height: 100%;
}

.application {
  &--wrap {
    background: $background;
  }

  .blur {
    filter: blur(5px);
  }
}
</style>