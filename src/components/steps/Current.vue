<template>
  <div class="current">
    <div
      v-for="(step, index) in steps"
      :key="step.title"
      class="current__step current__step--one"
      :class="{'current__step--last': index === steps.length - 1}"
    >
      <div
        class="current__circle"
        :class="{'current__circle--active': activeStep === index + 1}"
      ></div>
      <div class="current__title">{{ $t('step') }} {{index + 1}}</div>
      <div class="current__description">{{$t(step.description)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Current',
  data: () => ({
    steps: [
      { description: 'step1' },
      { description: 'step2' },
      { description: 'step3' },
    ]
  }),
  computed: {
    activeStep() {
      return this.$store.getters.activeStep;
    },
  },
  created() {

  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.current {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: $step-text;
  max-width: 450px;
  margin: 22px auto;
  display: flex;
  justify-content: space-between;

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 33.33%;
    position: relative;

    &::after {
      content: '';
      background: $current-line;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 50%;
      top: 22px;
    }

    &--last::after {
      display: none;
    }
  }

  &__circle {
    background: $current-spot;
    width: 6px;
    height: 6px;
    margin: 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 20px $current-inactive;
    z-index: 2;

    &--active {
      background: $background;
      box-shadow: 0 0 0 20px $current-active;
    }
  }

  &__title {
    margin-top: 11px;
  }
}
</style>
