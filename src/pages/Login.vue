<template>
  <v-container class="login" fluid pa-0>
    <v-layout justify-center align-center row fill-height>
      <v-flex xs12 sm8 md6 lg5 xl4>
        <div class="login__title">Log in</div>
        <form class="login__form" id="login-form">
          <v-text-field
            class="login__email"
            v-model="email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            label="Email address"
            data-vv-name="email"
            solo
            required
          ></v-text-field>
          <v-text-field
            class="login__password"
            type="password"
            v-model="password"
            v-validate="'required'"
            :error-messages="errors.collect('password')"
            label="Password"
            data-vv-name="password"
            solo
            required
          ></v-text-field>
          <v-checkbox
            class="login__checkbox"
            v-model="keepLogged"
            label="Keep me logged in"
          ></v-checkbox>
          <v-btn
            @click="onSubmit"
            class="login__send ma-0 mt-2 right"
            depressed
          >Login</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'login',
  $_veeValidate: {
    validator: 'new',
  },
  data: () => ({
    messageSend: false,
    email: '',
    password: '',
    keepLogged: false,
    dictionary: {
      attributes: {
        email: 'E-mail Address',
      },
    },
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },
  methods: {
    onSubmit () {
      this.$validator.validate().then(valid => {
        if (!valid) {
          return;
        }
        this.messageSend = true;
      });
    },
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/styles.scss';

.login {
  margin-bottom: 30vh;

  &__title {
    font-size: 24px;
    color: $login-title;
    text-align: center;
  }

  &__form {
    color: $login-text;
    font-size: 18px;
    padding: 10% 5% 35px;

    @include media-breakpoint-up(xsm) {
      padding: 10% 10% 35px;
    }
  
    @include media-breakpoint-up(sm) {
      padding: 10% 20% 35px;
    }
  }

  &__checkbox {
    margin-top: 0;
  }

  &__send.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    color: $background;
    background: $login-accent;
    width: 100%;
    height: 48px;
    border-radius: 6px;
  }
}

#login-form {
  .v-input {
    &__slot {
      border-radius: 6px;
      border: 1px solid $border-light;
      padding: 0 23px;
      box-shadow: none;

      label {
        font-size: 18px;
        color: $login-text;
      }
    }
  }

  .v-input--checkbox {
    .v-input {
      &__slot {
        border: none;
        padding: 0;

        i {
          color: $login-text;
        }
      }
    }
  }

  .accent--text {
    color: $login-accent !important;
  }
}
</style>
