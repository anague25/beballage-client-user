import axios from '@/plugins/axios';

const API_URL = '/api/deliveries';
export default {
  fetchDeliveries(page = 1, search = '') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query: search
      }
    });
  },

  fetchDeliveryById(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  fetchAllDeliveries() {
    return axios.get(`${API_URL}/all`);
  },

  searchDeliveries(searchTerm) {
    return axios.get(API_URL, {
      params: {
        query: searchTerm
      }
    });
  },

  createDelivery(delivery) {
    return axios.post(API_URL, delivery);
  },

  updateDelivery(delivery) {
    const id = delivery.id;
    return axios.post(`${API_URL}/${id}`, delivery);
  },


  deleteDelivery(DeliveryId) {
    return axios.delete(`${API_URL}/${DeliveryId}`);
  },

};
