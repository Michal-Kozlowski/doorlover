<template>
  <div class="door">
    <div class="door__wings">
      <div
        class="door__wing"
        v-for="wing in wings"
        :key="wing"
        :style="{width: `${width}px`, height: `${height - 2}px`}"
      >
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

    <!-- <div class="door__measurement door__measurement--height">{{height/1.2}}</div> -->

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
      return this.$store.getters.width * 1.2;
    },
    height() {
      return this.$store.getters.height * 1.2;
    },
    color() {
      return this.$store.getters.color;
    },
  },
  created() {

  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.door {
  width: 590px;
  border: 1px solid $step-border;
  position: relative;

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

  &__wings {
    display: flex;
    justify-content: center;
  }

  &__wing {
    margin: 100px 1px 100px 0;
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

  // &__measurement {
  //   background: $background;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border: 1px solid $door;
  //   width: 36px;
  //   height: 20px;
  //   position: relative;


  //   &--height {
  //     position: absolute;
  //     left: 100px;
  //     top: 48%;


  //     &::before {
  //       content: '';
  //       width: 2px;
  //       height: 300px;
  //       background: $door;
  //       border-top: 1px solid $door;
  //       position: absolute;
  //       right: 15px;
  //       z-index: -1;
  //     }
  //   }
  // }
}
</style>
