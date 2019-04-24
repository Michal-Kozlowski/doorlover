import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from "./store/index"
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  English: {
    selectLang: 'Select language',
    myOrganization: 'My Organization',
    step: 'step',
    step1: 'choose door',
    step2: 'choose door division',
    step3: 'choose color',
    singleDoor: 'Single door',
    doubleDoor: 'Double door',
    doorType: 'Door type',
    doorSize: 'Door size',
    doorDivision: 'Door division',
    width: 'Width',
    height: 'Height',
    numberOfBeams: 'Number of beams',
    numberOfPosts: 'Number of posts',
    black: 'Black',
    gray: 'Gray',
    white: 'White',
    back: 'Back',
    nextStep: 'Next Step',
    keepMeLoggedIn: 'Keep me logged in',
    emailAddress: 'Email Address',
    password: 'Password',
    english: 'English',
    polish: 'Polish',
    processing: 'Processing',
  },
  Polish: {
    selectLang: 'Wybierz język',
    myOrganization: 'Moja Organizacja',
    step: 'krok',
    step1: 'Wybór drzwi',
    step2: 'Wybór podziału drzwi',
    step3: 'Wybór koloru',
    singleDoor: 'Pojedyńcze drzwi',
    doubleDoor: 'Podwójne drzwi',
    doorType: 'Typ drzwi',
    doorSize: 'Rozmiar drzwi',
    doorDivision: 'Podział drzwi',
    width: 'Szerokość',
    height: 'Wysokość',
    numberOfBeams: 'Liczba belek',
    numberOfPosts: 'Liczba słupków',
    black: 'Czarny',
    gray: 'Szary',
    white: 'Biały',
    back: 'Wstecz',
    nextStep: 'Dalej',
    keepMeLoggedIn: 'Nie wylogowywuj mnie',
    emailAddress: 'Adres email',
    password: 'Hasło',
    english: 'Anghielski',
    polish: 'Polski',
    processing: 'Przetwarzanie',
  }
}

const i18n = new VueI18n({
  locale: 'English',
  fallbackLocale: 'English',
  messages,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
