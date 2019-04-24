<template>
  <div class="options">

    <div class="step-one" v-if="activeStep === 1">
      <div class="options__header">{{ $t('doorType') }}</div>
      <v-radio-group v-model="wings">
        <v-radio :label="$t('singleDoor')" value="1"></v-radio>
        <v-radio :label="$t('doubleDoor')" value="2"></v-radio>
      </v-radio-group>
      <div class="options__header">{{ $t('doorSize') }}</div>
      <div class="options__width">
        <label for="width" class="options__label">{{ $t('width') }}</label>
        <input type="number" id="width" v-model="width" class="options__input">
        <span>cm</span>
      </div>
      <div class="options__height">
        <label for="height" class="options__label">{{ $t('height') }}</label>
        <input type="number" id="width" v-model="height" class="options__input">
        <span>cm</span>
      </div>
    </div>

    <div class="step-two" v-if="activeStep === 2">
      <div class="options__header">{{ $t('doorDivision') }}</div>
      <div class="options__beams">
        <label for="beams" class="options__label options__label--wide">{{ $t('numberOfBeams') }}</label>
        <input type="number" min="0" id="beams" v-model="beams" class="options__input options__input--small">
        <button @click="beams++" class="options__button options__button--small">+</button>
        <button @click="beams--" class="options__button options__button--small">-</button>
      </div>
      <div class="options__posts">
        <label for="posts" class="options__label options__label--wide">{{ $t('numberOfPosts') }}</label>
        <input type="number" min="0" id="posts" v-model="posts" class="options__input options__input--small">
        <button @click="posts++" class="options__button options__button--small">+</button>
        <button @click="posts--" class="options__button options__button--small">-</button>
      </div>
    </div>

    <div class="step-three" v-if="activeStep === 3">
      <div class="options__header">{{ $t('chooseDoor') }}</div>
      <v-radio-group v-model="color" class="options__colors">
        <div class="options__color-box">
          <div class="options__color" :style="{background: black}" @click="color = black"></div>
          <v-radio :label="$t('black')" :value="black"></v-radio>
        </div>
        <div class="options__color-box">
          <div class="options__color" :style="{background: grey}" @click="color = grey"></div>
          <v-radio :label="$t('gray')" :value="grey"></v-radio>
          </div>
        <div class="options__color-box">
          <div class="options__color" :style="{background: white}" @click="color = white"></div>
          <v-radio :label="$t('white')" :value="white" ref="white"></v-radio>
        </div>
      </v-radio-group>
    </div>

    <div class="options__control-steps">
      <v-btn depressed @click="backStep" v-if="activeStep !== 1" class="options__button options__back ma-0">{{ $t('back') }}</v-btn>
      <v-btn color="info" depressed @click="nextStep" v-if="activeStep !== 3" class="options__button options__next ma-0">{{ $t('nextStep') }}</v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Options',
  data: () => ({
    wings: null,
    width: null,
    height: null,
    beams: null,
    posts: null,
    color: null,
    black: '#000000',
    grey: '#797474',
    white: '#F4F2F2',
  }),
  computed: {
    activeStep() {
      return this.$store.getters.activeStep;
    },
  },
  watch: {
    wings: function() {
      this.$store.dispatch('set_wings', Number(this.wings));
    },
    width: function() {
      this.$store.dispatch('set_width', Number(this.width));
    },
    height: function() {
      this.$store.dispatch('set_height', Number(this.height));
    },
    beams: function() {
      this.$store.dispatch('set_beams', Number(this.beams));
    },
    posts: function() {
      this.$store.dispatch('set_posts', Number(this.posts));
    },
    color: function() {
      this.$store.dispatch('set_color', this.color);
    },
  },
  methods: {
    backStep() {
      this.$store.dispatch('set_active_step', this.activeStep - 1);
    },
    nextStep() {
      this.$store.dispatch('set_active_step', this.activeStep + 1);
    },
  },
  created() {
    this.wings = this.$store.getters.wings.toString();
    this.width = this.$store.getters.width.toString();
    this.height = this.$store.getters.height.toString();
    this.beams = this.$store.getters.beams.toString();
    this.posts = this.$store.getters.posts.toString();
    this.color = this.$store.getters.color;
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.options {
  font-size: 14px;
  color: $step-text;
  min-width: 12%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .v-label {
    font-size: 14px;
  }

  &__header {
    border-bottom: 1px solid rgba($current-inactive, 0.4);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  &__label {
    display: inline-block;
    width: 70px;
    margin-bottom: 10px;

    &--wide {
      width: 100%;

      @include media-breakpoint-up(md) {
      width: 140px;
      }
    }
  }

  &__input {
    width: 50px;
    border: 1px solid $options-border;
    margin-right: 6px;
    padding-left: 5px;

    &--small {
      text-align: center;
      padding: 0;
      width: 24px;
      height: 24px;
      margin: 0 2px;
    }
  }

  &__button {
    width: 45%;

    &--small {
      background: $current-inactive;
      width: 24px;
      height: 24px;
      margin: 0 2px;
    }
  }

  &__back {
    background: $background !important;
    border: 3px solid $next-step;
    position: relative;
    top: 5px;

    @include media-breakpoint-up(md) {
      top: 0;
    }
  }

  &__next {
    background: $next-step !important;

    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
  }

  &__control-steps {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;

    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
  }

  &__color {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin: 0 auto 10px;
    cursor: pointer;
  }
}

@include media-breakpoint-up(md) {
  .step-three .v-input--radio-group--column .v-input--radio-group__input {
    flex-direction: row !important;
  }
}
</style>
