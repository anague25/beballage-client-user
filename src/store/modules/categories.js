import toast from '@/plugins/Notification';
import categoriesService from '@/services/categories/categoriesService';
import citiesService from '@/services/cities/citiesService';

const state = {
  categories: [],
  subCategoriesByCategory: {},
  allCategories: [],
};

const getters = {
  subCategoriesByCategory: (state) => state.subCategoriesByCategory,
  categories: (state) => state.categories,
  allCategories: (state) => state.allCategories,
  parentCategories: (state) => state.allCategories.filter(category => category.parent_id == null), // Filtre les catégories parentes
  categoryById: (state) => (id) => state.categories.find(attr => attr.id === id),
};

const mutations = {
  setSubCategoriesByCategory(state, { categoryId, subCategories }) {
    state.subCategoriesByCategory = {
      ...state.subCategoriesByCategory,
      [categoryId]: subCategories,
    };
  },

  setCategories(state, { data }) {
    state.categories = data;
  },
  setAllCategories(state, { data }) {
    state.allCategories = data;
  },

  setCurrentPageBeforeUpdate(state, page) {
    state.currentPageBeforeUpdate = page;
  },


  addCategory(state, category) {
    state.categories.push(category);
  },
  updateCategory(state, updatedCategory) {
    const index = state.categories.findIndex(attr => attr.id === updatedCategory.id);
    if (index !== -1) {
      state.categories.splice(index, 1, updatedCategory);
    }
  },
  deleteCategory(state, categoryId) {
    state.categories = state.categories.filter(attr => attr.id !== categoryId);
  }
};

const actions = {
  async fetchSubCategoriesByCategory({ commit }, categoryId) {
    try {
      const response = await categoriesService.fetchSubCategoriesByCategory(categoryId);
      console.log(response);
      commit('setSubCategoriesByCategory', { categoryId, subCategories: response.data.data.children });
    } catch (error) {
      console.error(error);
    }
  },


  async fetchCategories({ commit }, { page = 1, search }) {
    try {
      const response = await categoriesService.fetchCategories(page, search);
      commit('setCategories', { data: response.data.data, meta: response.data.meta });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async fetchAllCategories({ commit }) {
    try {
      const response = await categoriesService.fetchAllCategories();
      commit('setAllCategories', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all categories');
    }
  },

  async createCategory({ commit }, category) {
    try {
      const response = await categoriesService.createCategory(category);
      commit('addCategory', response.data);
      toast.success('Category created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      } else {
        console.log(error);
      }
    }
  },

  async updateCategory({ commit, dispatch, state }, category) {
    try {
      const response = await categoriesService.updateCategory(category);
      commit('updateCategory', response.data);

      await dispatch('fetchCategories', { page: state.currentPage, search: '' });
      return response.data; // Retourne les données mises à jour
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        console.log(error);
        throw error.response.data.errors;
      } else {
        console.log(error);

      }
    }
  }
  ,
  async deleteCategory({ commit }, categoryId) {
    try {
      await categoriesService.deleteCategory(categoryId);
      commit('deleteCategory', categoryId);
      toast.success('Category deleted successfully');
    } catch (error) {
      toast.error('Failed to delete attribute');
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
