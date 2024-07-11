import axios from '@/plugins/axios';

const API_URL = '/api/order-items';
export default {
  fetchOrderItems(page = 1, search = '') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query: search
      }
    });
  },

  fetchOrderItemById(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  fetchAllOrderItems() {
    return axios.get(`${API_URL}/all`);
  },

  searchOrderItems(searchTerm) {
    return axios.get(API_URL, {
      params: {
        query: searchTerm
      }
    });
  },

  createOrderItem(orderItem) {
    return axios.post(API_URL, orderItem);
  },

  updateOrderItem(orderItem) {
    const id = orderItemId.id;
    return axios.post(`${API_URL}/${id}`, orderItem);
  },


  deleteOrderItem(orderItemId) {
    return axios.delete(`${API_URL}/${orderItemId}`);
  },

};
