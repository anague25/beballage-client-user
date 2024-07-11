import productsService from '@/services/products/productsService';

const state = {
  getAllProductsWithoutPagination: [],
  products: [],
  searchResults: [],
  noResultsFound: false,
  product: null,
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
};

const mutations = {
  SET_PRODUCTS_WITHOUT_PAGINATE(state, allProducts) {
    state.getAllProductsWithoutPagination = allProducts;
  },
  RESET_PAGE(state) {
    state.currentPage = 1;
  },
  CLEAR_SEARCH_RESULTS(state) {
    state.searchResults = [];
  },
  CLEAR_PRODUCTS(state) {
    state.products = [];
  },
  SET_NO_RESULTS_FOUND(state, noResults) {
    state.noResultsFound = noResults;
  },

  SET_SEARCH_RESULTS(state, results) {
    state.searchResults = results;
    state.noResultsFound = results.length === 0;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_PRODUCTS(state, products) {
    state.products = state.products.concat(products);
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_TOTAL_PAGES(state, totalPages) {
    state.totalPages = totalPages;
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  }
};

const actions = {
  async fetchProducts({ commit, state }, search = '') {
    commit('SET_LOADING', true);
    try {
      const response = await productsService.fetchProducts(state.currentPage, search);
      commit('ADD_PRODUCTS', response.data.data);
      console.log(response.data.data);
      commit('SET_TOTAL_PAGES', response.data.meta.last_page);
      commit('SET_CURRENT_PAGE', state.currentPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  async fetchAllProductsWithoutPaginate({ commit }) {
    try {
      const response = await productsService.fetchAllProducts();
      commit('SET_PRODUCTS_WITHOUT_PAGINATE', response.data.data);
    } catch (error) {
      console.error(error);
    }
  },

  async searchProducts({ commit, state }, searchTerm) {
    commit('SET_LOADING', true);
    try {
      const response = await productsService.searchProducts(searchTerm);
      commit('SET_SEARCH_RESULTS', response.data.data);
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  async fetchProduct({ commit }, id) {
    commit('SET_LOADING', true);
    try {
      const response = await productsService.fetchProductById(id);
      console.log(response.data.data);
      commit('SET_PRODUCT', response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      commit('SET_LOADING', false);
    }
  }




};



const getters = {
  searchResults: state => state.searchResults,
  noResultsFound: state => state.noResultsFound,
  recentProducts: state => state.getAllProductsWithoutPagination.slice(0, 2),
  allProducts: state => state.products,
  isMoreProducts: state => state.currentPage <= state.totalPages,
  isLoading: state => state.isLoading,
  getProductById: state => id => {
    // Recherchez d'abord le produit dans le tableau des produits
    let product = state.products.find(product => product.id === id);
    // Si le produit n'est pas trouvé dans le tableau des produits,
    // vérifiez s'il est dans l'état des produits individuels
    if (!product) {
      product = state.product && state.product.id === id ? state.product : null;
    }
    return product;
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
