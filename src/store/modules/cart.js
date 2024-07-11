const state = {
  items: []
};

const mutations = {
  INIT_CART_FROM_STORAGE(state, cartItems) {
    state.items = cartItems;
  },
  ADD_TO_CART(state, { product, quantity }) {
    const item = state.items.find(item => item.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      state.items.push({ product, quantity });
    }
    localStorage.setItem('cartItems', JSON.stringify(state.items));

  },
  UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
    const item = state.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      localStorage.setItem('cartItems', JSON.stringify(state.items));

    }
  },
  REMOVE_FROM_CART(state, productId) {
    state.items = state.items.filter(item => item.product.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }
};

const actions = {
  addToCart({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity });
  },
  updateCartItemQuantity({ commit }, { productId, quantity }) {
    commit('UPDATE_CART_ITEM_QUANTITY', { productId, quantity });
  },
  removeFromCart({ commit }, productId) {
    commit('REMOVE_FROM_CART', productId);
  }
};

const getters = {
  countCartitems: state => state.items.length,
  cartItems: state => state.items,
  cartTotal: state => state.items.reduce((total, item) => total + item.product.price * item.quantity, 0),
  getCartItems: state => state.items, // Getter utilisé dans le composant Cart.vue
  getCartSubtotal: state => state.items.reduce((total, item) => total + item.product.price * item.quantity, 0), // Getter utilisé dans le composant Cart.vue
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
