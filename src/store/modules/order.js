// src/store/modules/order.js
const state = {
    shippingInfo: {},
    paymentMethod: '',
    cartItems: []
};

const mutations = {
    SET_SHIPPING_INFO(state, info) {
        state.shippingInfo = info;
    },
    SET_PAYMENT_METHOD(state, method) {
        state.paymentMethod = method;
    },
    SET_CART_ITEMS(state, items) {
        state.cartItems = items;
    },
    CLEAR_ORDER(state) {
        state.shippingInfo = {};
        state.paymentMethod = '';
        state.cartItems = [];
    }
};

const actions = {
    setShippingInfo({ commit }, info) {
        console.log(info);
        commit('SET_SHIPPING_INFO', info);
    },
    setPaymentMethod({ commit }, method) {
        commit('SET_PAYMENT_METHOD', method);
    },
    setCartItems({ commit }, items) {
        commit('SET_CART_ITEMS', items);
    },
    clearOrder({ commit }) {
        commit('CLEAR_ORDER');
    }
};

const getters = {
    shippingInfo: state => state.shippingInfo,
    paymentMethod: state => state.paymentMethod,
    orderCartItems: state => state.cartItems,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
