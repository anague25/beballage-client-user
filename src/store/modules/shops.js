import toast from '@/plugins/Notification';
import shopsService from '@/services/shops/shopsService';

const state = {
  shops: [],
  shop: [],
  allShops: [],

};

const getters = {
  shops: (state) => state.shops,
  shop: (state) => state.shop,
  allShops: (state) => state.allShops,
  shopById: (state) => (id) => state.shops.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setShops(state, { data, meta }) {
    state.shops = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },

  setShop(state, data) {
    state.shop = data.data;

  },
  setAllShops(state, { data }) {
    state.allShops = data;
  },

  setCurrentPageBeforeUpdate(state, page) {
    state.currentPageBeforeUpdate = page;
  },


  addShop(state, shop) {
    state.shops.push(shop);
  },
  updateShop(state, updatedShop) {
    const index = state.shops.findIndex(attr => attr.id === updatedShop.id);
    if (index !== -1) {
      state.shops.splice(index, 1, updatedShop);
    }
  },
  deleteShop(state, ShopId) {
    state.shops = state.shops.filter(attr => attr.id !== ShopId);
  }
};

const actions = {
  async fetchShops({ commit }, { page = 1, search }) {
    try {
      const response = await shopsService.fetchShops(page, search);
      commit('setShops', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchShop({ commit }, id) {
    try {
      const response = await shopsService.fetchShop(id);
      commit('setShop', { data: response.data.data });
      return response;

    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllShops({ commit }) {
    try {
      const response = await shopsService.fetchAllShops();
      commit('setAllShops', response.data);
    } catch (error) {
    }
  },

  async createShop({ commit }, shop) {
    try {
      const response = await shopsService.createShop(shop);
      commit('addShop', response.data);
      toast.success('Shops created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      } else {
      }
    }
  },

  async updateShop({ commit, dispatch, state }, shop) {
    try {
      const response = await shopsService.updateShop(shop);
      commit('updateShop', response.data);

      // Mettre à jour la liste des attributs pour refléter les changements
      await dispatch('fetchShops', { page: state.currentPage, search: '' });
      return response.data; // Retourne les données mises à jour
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }
    }
  }
  ,
  async deleteShop({ commit }, shop) {
    try {
      await shopsService.deleteShop(shop);
      commit('deleteShop', shop);
      toast.success('Shops deleted successfully');
    } catch (error) {
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
