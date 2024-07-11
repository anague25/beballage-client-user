import axios from '@/plugins/axios';

const API_URL = '/api/productImages';
export default {
  fetchProductImages() {
    return axios.get(`${API_URL}/${productId}`);
  },

  fetchAllProductsImages(productId) {
    return axios.get(`${API_URL}/${productId}`);
  },

  createProductImage(product) {
    const id = product.get('id');
    return axios.post(`${API_URL}/${id}`, product);
  },

  updateProductImage(property) {
    return axios.post(`${API_URL}/${property.id}`, property);
  },


  deleteProductImage(propertyId) {
    return axios.delete(`${API_URL}/${propertyId}`);
  },

};
