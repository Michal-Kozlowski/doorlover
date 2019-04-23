import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedLanguage: null,
    keepLoggedIn: false,
    email: null,
    password: null,
    organization: null,
    token: null,
    error: false,
    overlayStatus: false,
    activeStep: 1,
    door: {
      wings: 1,
      beams: 4,
      posts: 2,
      width: 120,
      height: 250,
      color: '#000000',
    },
  },
  mutations: {
    SET_SELECTED_LANGUAGE(state, data) {
      state.selectedLanguage = data;
    },
    SET_KEEP_LOGGED_IN(state, data) {
      state.keepLoggedIn = data;
    },
    SET_EMAIL(state, data) {
      state.email = data;
    },
    SET_PASSWORD(state, data) {
      state.password = data;
    },
    SET_ORGANIZATION(state, data) {
      state.organization = data;
    },
    SET_TOKEN(state, data) {
      state.token = data;
    },
    SET_ERROR(state, data) {
      state.error = !!data;
    },
    SET_OVERLAY_STATUS(state, data) {
      state.overlayStatus = data;
    },
    SET_ACTIVE_STEP(state, data) {
      state.activeStep = data;
    },
    SET_WINGS(state, data) {
      state.door.wings = data;
    },
    SET_HEIGHT(state, data) {
      state.door.height = data;
    },
    SET_WIDTH(state, data) {
      state.door.width = data;
    },
    SET_BEAMS(state, data) {
      state.door.beams = data;
    },
    SET_POSTS(state, data) {
      state.door.posts = data;
    },
    SET_COLOR(state, data) {
      state.door.color = data;
    },
    LOAD_STATE(state, local) {
      state.selectedLanguage = JSON.parse(local).selectedLanguage;
      state.keepLoggedIn = JSON.parse(local).keepLoggedIn;
      state.email = JSON.parse(local).email;
      state.password = JSON.parse(local).password;
      state.organization = JSON.parse(local).organization;
      state.token = JSON.parse(local).token;
    },
  },
  actions: {
    set_selected_language({ commit }, data) {
      commit('SET_SELECTED_LANGUAGE', data);
    },
    set_keep_logged_in({ commit }, data) {
      commit('SET_KEEP_LOGGED_IN', data);
    },
    set_email({ commit }, data) {
      commit('SET_EMAIL', data);
    },
    set_password({ commit }, data) {
      commit('SET_PASSWORD', data);
    },
    set_organization({ commit }, data) {
      commit('SET_ORGANIZATION', data);
    },
    set_token({ commit }, data) {
      commit('SET_TOKEN', data);
    },
    set_error({ commit }, data) {
      commit('SET_ERROR', data);
    },
    set_overlay_status({ commit }, data) {
      commit('SET_OVERLAY_STATUS', data);
    },
    set_active_step({ commit }, data) {
      commit('SET_ACTIVE_STEP', data);
    },
    set_wings({ commit }, data) {
      commit('SET_WINGS', data);
    },
    set_width({ commit }, data) {
      commit('SET_WIDTH', data);
    },
    set_height({ commit }, data) {
      commit('SET_HEIGHT', data);
    },
    set_beams({ commit }, data) {
      commit('SET_BEAMS', data);
    },
    set_posts({ commit }, data) {
      commit('SET_POSTS', data);
    },
    set_color({ commit }, data) {
      commit('SET_COLOR', data);
    },
    save_state() {
      const stateToSave = {
        selectedLanguage: this.state.selectedLanguage,
        keepLoggedIn: this.state.keepLoggedIn,
        email: this.state.email,
        password: this.state.password,
        organization: this.state.organization,
        token: this.state.token,
      }
      localStorage.setItem('state', JSON.stringify(stateToSave));
    },
    load_state({ commit }) {
      const local = localStorage.getItem('state');
      if (local) {
        commit('LOAD_STATE', local);
      }
    },
    log_in({commit}, loginData) {
      axios({
        url: 'https://bench-api.applover.pl/api/v1/session',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          'email': loginData.email,
          'password': loginData.password,
        },
      }).then((res) => {
        commit('SET_EMAIL', loginData.email);
        commit('SET_PASSWORD', loginData.password);
        commit('SET_KEEP_LOGGED_IN', loginData.keepLoggedIn);
        commit('SET_TOKEN', res.data.token);
        commit('SET_ORGANIZATION', res.data.organization);
        if (loginData.keepLoggedIn) {
          this.dispatch('save_state');
        }
      }).catch((error) => {
        commit('SET_ERROR', error);
      });
    }
  },
  getters: {
    selectedLanguage: (state) => state.selectedLanguage,
    keepLoggedIn: (state) => state.keepLoggedIn,
    email: (state) => state.email,
    password: (state) => state.password,
    organization: (state) => state.organization,
    token: (state) => state.token,
    error: (state) => state.error,
    overlayStatus: (state) => state.overlayStatus,
    activeStep: (state) => state.activeStep,
    wings: (state) => state.door.wings,
    beams: (state) => state.door.beams,
    posts: (state) => state.door.posts,
    width: (state) => state.door.width,
    height: (state) => state.door.height,
    color: (state) => state.door.color,
  },
})
