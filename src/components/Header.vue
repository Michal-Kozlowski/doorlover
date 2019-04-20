<template>
  <div class="header">
    <v-container class="header__container" fluid pa-0>
      <v-layout align-center="" fill-height row>
        <v-flex xs3 sm7 md8 xl9>
          <a href="https://www.applover.pl/"  class="header__logo">
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
    </v-container>
  </div>
</template>

<script>
import ISO6391 from 'iso-639-1/build/index'
export default {
  name: 'Header',
  data: () => ({
    languages: ['English'],
    selectedLanguage: 'English',
    activeMenuColor: '#7E7E7E',
  }),
  created() {
    const browserLanguage = ISO6391.getName(navigator.language.match(/[a-z]+/g)[0]);
    this.selectedLanguage = browserLanguage;
    this.languages.push(browserLanguage);
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
  box-shadow: 0 3px 12px $header-shadow;
  height: 80px;
  display: flex;
  align-items: center; 

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
}

#language-select {
  .v-input {
    &__slot {
      min-height: 32px;
      box-shadow: none;
      border: 1px solid $header-border;
      margin: 0;
      padding: 0 5px 0 10px;
    }
  }

  .v-select {
    &__selection {
      margin: 0;
      color: $header-text;
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
  border: 1px solid $header-border;

  .v-list {
    padding: 0;

    &__tile {
      height: 32px;
      color: $header-text;
      padding: 0 8px 0 10px;

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
