<template>
  <div class="home">
    <Current/>
    <div class="home__step">
      <Door/>
      <Options/>
    </div>
  </div>
</template>

<script>
import Current from '@/components/steps/Current.vue';
import Door from '@/components/steps/Door.vue';
import Options from '@/components/steps/Options.vue';

export default {
  name: 'home',
  components: {
    Current,
    Door,
    Options,
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/styles/styles.scss';

.home {
  &__step {
    display: flex;
    justify-content: center;
  }
}

</style>