<template>
  <div class="door">
    <div
      class="door__frame"
      :class="{'door__frame--threeDee': threeDee}"
      :style="{'background-image': `url(${threeDee ? require('@/assets/images/room.png') : ''}`}"
    >
      <div
        class="door__wings"
        :class="{'door__wings--threeDee': threeDee}"
        :style="{'background-image': `url(${threeDee ? require('@/assets/images/park.png') : ''}`}"
      >

        <div class="door__measurement door__measurement--all">
          <div
            class="door__line door__line--horizontal"
            :style="{width: `${wings * width}px`}"
          ></div>
          <div class="door__numbers door__numbers--horizontal">{{Math.round(wings * width/scale)}}</div>
        </div>

        <div class="door__measurement door__measurement--height">
          <div
            class="door__line door__line--vertical"
            :style="{height: `${height}px`}"
          ></div>
          <div class="door__numbers door__numbers--vertical">{{Math.round(height/scale)}}</div>
        </div>

        <div
          class="door__wing"
          v-for="wing in wings"
          :key="wing"
          :style="{width: `${width}px`, height: `${height - 2}px`}"
        >
          <div class="door__measurement door__measurement--width">
            <div
              class="door__line door__line--horizontal"
              :style="{width: `${width}px`}"
            ></div>
            <div class="door__numbers door__numbers--horizontal">{{Math.round(width/scale)}}</div>
          </div>

          <div class="door__beams">
            <div
              class="door__beam"
              :style="{background: color, width: `${width - 2}px`}"
              v-for="beam in beams + 2"
              :key="`wing${wing}beam${beam}`"
            >
            </div>
          </div>

          <div class="door__posts">
            <div
              class="door__post"
              :style="{background: color, height: `${height - 2}px`, top: `-${height - 2}px`}"
              v-for="post in posts + 2"
              :key="`wing${wing}post${post}`"
            >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="door__dimentions" @click="threeDee = !threeDee">
      <div
        class="door__dimention"
        :class="{'door__dimention--active': threeDee === true}"
      >3D</div>
      <div
        class="door__dimention"
        :class="{'door__dimention--active': threeDee === false}"
      >2D</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Door',
  data: () => ({
    threeDee: false,
    scale: 1.2
  }),
  computed: {
    wings() {
      return this.$store.getters.wings;
    },
    beams() {
      return this.$store.getters.beams;
    },
    posts() {
      return this.$store.getters.posts;
    },
    width() {
      return this.$store.getters.width * this.scale;
    },
    height() {
      return this.$store.getters.height * this.scale;
    },
    color() {
      return this.$store.getters.color;
    },
  },
  methods: {
    setScale() {
      this.scale = 0.4;
      if (window.innerWidth > 600) {
        this.scale = 0.6;
      }
      if (window.innerWidth > 960) {
        this.scale = 0.8;
      }
      if (window.innerWidth > 1260) {
        this.scale = 1.2;
      }
    },
  },
  mounted() {
    this.setScale();
    window.addEventListener('resize', this.setScale);
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.door {
  width: 130px;
  position: relative;

  @include media-breakpoint-up(sm) {
    width: 350px;
  }

  @include media-breakpoint-up(md) {
    border: 1px solid $step-border;
    width: 500px;
  }

  @include media-breakpoint-up(lg) {
    width: 590px;
  }

  &__dimentions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 30px;
  }

  &__dimention {
    text-transform: uppercase;
    color: $dimention;
    background: $dimention-inactive;
    padding: 2px 7px;
    border: 1px solid $dimention;
    cursor: pointer;
    user-select: none;

    &--active {
      background: $background;
      border-width: 2px;
      padding: 1px 6px;
    }
  }

  &__frame {
    display: flex;
    justify-content: center;

    &--threeDee {
      background-position: center -23px;
      background-size: cover;

      @include media-breakpoint-up(sm) {
        background-position: center -10px;
      }

      @include media-breakpoint-up(md) {
        background-position: center 3px;
      }

      @include media-breakpoint-up(lg) {
        background-size: 140%;
        background-position: center -27px;
      }
    }
  }

  &__wings {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 100px 0;

    &--threeDee {
      background-size: cover;
    }
  }

  &__wing {
    position: relative;
  }

  &__beams {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__beam {
    height: 7px;
  }

  &__posts {
    display: flex;
    justify-content: space-between;
  }

  &__post {
    width: 7px;
    position: relative;
  }

  &__measurement {
    height: 20px;
    display: flex;
    align-items: center;

    &--height {
      left: -25px;
      position: absolute;
      top: 48%;

      @include media-breakpoint-up(sm) {
        left: -40px;
      }
    }

    &--width {
      position: absolute;
      bottom: -40px;
    }

    &--all {
      position: absolute;
      top: -40px;
      left: 0;
    }
  }

  &__line {
    background: $dimention;
    width: 2px;
    height: 2px;
    position: relative;

    &--vertical {
      &::before,
      &::after {
        content: '';
        background: $dimention;
        width: 20px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: -10px;
      }

      &::before {
        top: 0;
      }
    }

    &--horizontal {
      &::before,
      &::after {
        content: '';
        background: $dimention;
        width: 2px;
        height: 20px;
        position: absolute;
        right: 0;
        bottom: -10px;
      }

      &::before {
        left: 0;
      }
    }
  }

  &__numbers {
    background: $background;
    border: 1px solid $door;
    padding: 0 5px;
    position: relative;

    &--vertical {
      right: 18px;
    }

    &--horizontal {
      right: 50%;
    }
  }
}
</style>
