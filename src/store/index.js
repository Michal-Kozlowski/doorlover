import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedLanguage: null,
    keepLoggedIn: false,
    userName: null,
    password: null,
  },
  mutations: {
    SET_SELECTED_LANGUAGE(state, data) {
      state.selectedLanguage = data;
    },
    SET_KEEP_LOGGED_IN(state, data) {
      state.dataToDisplay = data;
    },
    SET_USER_NAME(state, data) {
      state.dataToDisplay = data;
    },
    SET_PASSWORD(state, data) {
      state.dataToDisplay = data;
    },
    SAVE_STATE(state) {
      localStorage.setItem('state', JSON.stringify(state));
    },
    LOAD_STATE(state) {
      const local = localStorage.getItem('state');
      if(local) {
        state.selectedLanguage = JSON.parse(local).selectedLanguage;
        state.keepLoggedIn = JSON.parse(local).keepLoggedIn;
        state.userName = JSON.parse(local).userName;
        state.password = JSON.parse(local).password;
      }
    },
  },
  actions: {
    set_selected_language({ commit }, data) {
      commit('SET_SELECTED_LANGUAGE', data);
      commit('SAVE_STATE');
    },
    set_keep_logged_in({ commit }, data) {
      commit('SET_KEEP_LOGGED_IN', data);
    },
    set_user_name({ commit }, data) {
      commit('SET_USER_NAME', data);
    },
    set_password({ commit }, data) {
      commit('SET_PASSWORD', data);
    },
    save_state({ commit }) {
      commit('SAVE_STATE');
    },
    load_state({ commit }) {
      commit('LOAD_STATE');
    },
  },
  getters: {
    selectedLanguage: (state) => state.selectedLanguage,
    keepLoggedIn: (state) => state.keepLoggedIn,
    userName: (state) => state.userName,
    password: (state) => state.password,
  },
})
