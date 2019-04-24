<template>
  <div class="overlay">
    <div class="overlay__title">Processing...</div>
    <div class="overlay__progress-bar">
      <div class="overlay__bar" :style="`margin-right: ${progressFunction}`"></div>
      <div class="overlay__percentage">{{progressInPercent}}%</div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Overlay',
  data: () => ({
    progressInPercent: 0,
    loadingTime: 2,
  }),
  computed: {
    progressFunction() {
      return `calc(${100 - this.progressInPercent}% - ${(100 - this.progressInPercent) / 100 * 65 }px)`;
    },
  },
  created() {
    this.$store.dispatch('set_overlay_status', true);
    const startTimer = Date.now();
    const timer = setInterval(() => {
      this.progressInPercent = Math.floor((Date.now() - startTimer) / (10 * this.loadingTime));
      if (this.progressInPercent >= 100) {
        this.progressInPercent = 100;
        this.$store.dispatch('set_overlay_status', false);
        window.clearInterval(timer);
      }
    }, 0);
  },
  destroyed() {
    this.$store.dispatch('set_overlay_status', false);
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.overlay {
  color: $background;
  background: rgba($overlay, 0.83);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;

  &__title {
    font-size: 24px;
  }

  &__progress-bar {
    height: 32px;
    width: 80%;
    border: 1px solid $background;
    border-radius: 40px;
    margin-top: 50px;
    display: flex;
    align-items: center;

    @include media-breakpoint-up(sm) {
      width: 65%;
    }
  
    @include media-breakpoint-up(md) {
      width: 50%;
    }
  }

  &__bar {
    background: $background;
    height: 18px;
    border-radius: 40px;
    margin-left: 5px;
    flex-grow: 1;
  }

  &__percentage {
    padding: 0 15px 0 8px;
  }
}
</style>
