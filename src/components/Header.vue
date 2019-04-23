<template>
  <div class="header" :class="{'header--dark-shadow': notLoginPage}">
    <v-container class="header__container" fluid pa-0>
      <v-layout align-center fill-height row>
        <v-flex xs3 sm7 md8 xl9 mt-1>
          <a href="https://www.applover.pl/" class="header__logo">
            <img src="../assets/images/logo.png" alt="Applover logo">
          </a>
        </v-flex>
        <v-flex class="header__language mt-3" id="language-select" xs9 sm5 md4 xl3>
          <div class="pr-3 mb-3 pb-1">Select language:</div>
          <v-select
            :items="languages"
            v-model="selectedLanguage"
            solo
            outline
            :color="activeMenuColor"
            class="header__select"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout 
        align-center
        fill-height
        class="header__error"
        :class="{'header__error--visible': errorOnLogin}"
      >
        <v-flex>
          <div class="header__error-message">Invalid email or password</div>
          <i 
            class="material-icons header__error-close"
            @click="closeError()"
            >
          close</i>
        </v-flex >
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ISO6391 from 'iso-639-1/build/index';
export default {
  name: 'Header',
  data: () => ({
    languages: ['English'],
    selectedLanguage: 'English',
    activeMenuColor: '#7E7E7E',
  }),
  computed: {
    errorOnLogin() {
      return this.$store.getters.error;
    },
    notLoginPage() {
      return this.$route.name !== 'login';
    }
  },
  watch: {
    selectedLanguage: function(val) {
      this.$store.dispatch('set_selected_language', val);
    },
    errorOnLogin: function(val) {
      if (val) {
        setTimeout(() => {
          this.closeError();
        }, 5000);
      }
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('set_error', false);
    },
  },
  created() {
    const browserLanguage = ISO6391.getName(navigator.language.match(/[a-z]+/g)[0]);
    this.languages.unshift(browserLanguage);
    if (this.$store.getters.selectedLanguage) {
      this.selectedLanguage = this.$store.getters.selectedLanguage;
    }
  },
  mounted() {
    const caret = document.querySelector('.v-icon.material-icons.theme--light');
    caret.innerHTML = 'keyboard_arrow_down';
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.header {
  color: $header-text;
  display: flex;
  align-items: center;
  transition: $transition-time;
  box-shadow: 0 3px 12px $header-shadow;

  &--dark-shadow {
    box-shadow: 0 3px 6px $header-shadow--dark;
  }

  &__container {
    height: 80px;
  }

  &__logo {
    margin-left: 10%;
  }

  &__language {
    display: flex;
    align-items: center;
  }

  &__select {
    max-width: 112px;
  }

  &__error {
    color: $background;
    background: $error;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    transition: $transition-time;
    opacity: 0;
    display: none;
    z-index: 10;

    &--visible {
      display: flex;
      opacity: 1;
    }
  }

  &__error-message {
    text-align: center;
  }

  &__error-close {
    font-size: 20px;
    color: $background;
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }
}

#language-select {
  .v-input {
    &__slot {
      min-height: 32px;
      box-shadow: none;
      border: 1px solid $border;
      margin: 0;
      padding: 0 5px 0 10px;
    }
  }

  .v-select {
    &__selection {
      margin: 0;
      color: $header-text;
      font-size: 14px;
    }

    &__selections {
      input {
        height: 30px;
      }
    }
  }
}

.v-menu__content {
  margin-top: 31px;
  box-shadow: none;
  border: 1px solid $border;

  .v-list {
    padding: 0;

    &__tile {
      height: 32px;
      color: $header-text;
      padding: 0 8px 0 10px;
      font-size: 14px;

      &--active {
        &::after {
          font-family: "Material Icons";
          font-size: 18px;
          content: '\e5ca';
        }
      }
    }
  }
}
</style>
