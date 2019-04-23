<template>
  <div class="options">

    <div class="step-one" v-if="activeStep === 1">
      <div class="options__header">Door type</div>
      <v-radio-group v-model="wings">
        <v-radio label="Single door" value="1"></v-radio>
        <v-radio label="Double door" value="2"></v-radio>
      </v-radio-group>
      <div class="options__header">Door size</div>
      <div class="options__width">
        <label for="width" class="options__label">Width</label>
        <input type="number" id="width" v-model="width" class="options__input">
        <span>cm</span>
      </div>
      <div class="options__height">
        <label for="height" class="options__label">Height</label>
        <input type="number" id="width" v-model="height" class="options__input">
        <span>cm</span>
      </div>
    </div>

    <div class="step-one" v-if="activeStep === 2">
      <div class="options__header">Door division</div>
      <div class="options__beams">
        <label for="beams" class="options__label options__label--wide">Number of beams</label>
        <input type="number" min="0" id="beams" v-model="beams" class="options__input">
      </div>
      <div class="options__posts">
        <label for="posts" class="options__label options__label--wide">Number of posts</label>
        <input type="number" min="0" id="posts" v-model="posts" class="options__input">
      </div>
    </div>

    <div class="step-one" v-if="activeStep === 3">
      <div class="options__header">Choose color</div>
      <v-radio-group v-model="color">
        <v-radio label="Black" value="#000000"></v-radio>
        <v-radio label="Gray" value="#797474"></v-radio>
        <v-radio label="White" value="#F4F2F2"></v-radio>
      </v-radio-group>
    </div>

    <div class="options__control-steps">
      <v-btn depressed @click="backStep" v-if="activeStep !== 1" class="options__button options__back ma-0">Back</v-btn>
      <v-btn color="info" depressed @click="nextStep" v-if="activeStep !== 3" class="options__button options__next ma-0">Next step</v-btn>
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
      width: 140px;
    }
  }

  &__input {
    width: 50px;
    border: 1px solid $door;
    margin-right: 6px;
  }

  &__button {
    width: 45%;
  }

  &__back {
    background: $background !important;
    border: 3px solid $next-step;
  }

  &__next {
    background: $next-step !important;
  }

  &__control-steps {
    display: flex;
    justify-content: space-between
  }
}
</style>
