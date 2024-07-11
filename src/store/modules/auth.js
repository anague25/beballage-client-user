// src/store/modules/auth.js
import authsService from '@/services/auths/authsService';

const state = {
  accessToken: localStorage.getItem('access_token') || '',
  user: {}
};

const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },
  REMOVE_ACCESS_TOKEN(state) {
    state.accessToken = '';
  },
  REMOVE_AUTH_USER(state) {
    state.user = {};
  },
  SET_USER(state, user) {
    state.user = user;
  },
  LOGOUT(state) {
    state.accessToken = '';
    state.user = {};
  }
};

const actions = {

  async register({ commit }, userData) {
    try {
      const response = await authsService.register(userData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }
    }
  },


  async login({ commit, dispatch }, credentials) {
    try {
      const response = await authsService.login(credentials);
      const token = response.data.access_token;
      localStorage.setItem('access_token', token);
      commit('SET_ACCESS_TOKEN', token);
      return response;
    } catch (error) {

      throw error;

    }
  },

  async fetchUser({ commit }) {

    try {
      const response = await authsService.authUser();
      commit('SET_USER', response.data);
    } catch (error) {
      throw error
    }


  },


  async logout({ commit }) {
    try {
      await authsService.logout(); // Optionnel, si votre API supporte la déconnexion
      localStorage.removeItem('access_token');
      commit('REMOVE_ACCESS_TOKEN'); // Mutation pour supprimer le jeton du store
      commit('REMOVE_AUTH_USER'); // Mutation pour supprimer le user du store
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },

};

const getters = {
  isAuthenticated: state => !!state.accessToken,
  user: state => state.user
};

export default {
  namespaced: true, // Assurez-vous que namespaced est défini à true
  state,
  mutations,
  actions,
  getters
};
