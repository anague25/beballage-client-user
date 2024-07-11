import axios from '@/plugins/axios';

const API_URL = '/api/orders';
export default {
    fetchOrders(page = 1, search = '') {
        return axios.get(API_URL, {
            params: {
                page: page,
                query: search
            }
        });
    },

    fetchOrderById(id) {
        return axios.get(`${API_URL}/${id}`);
    },

    fetchAllOrders() {
        return axios.get(`${API_URL}/all`);
    },

    searchOrders(searchTerm) {
        return axios.get(API_URL, {
            params: {
                query: searchTerm
            }
        });
    },

    createOrder(order) {
        // console.log(product.get('image'));
        return axios.post(API_URL, order);
    },

    updateOrder(order) {
        const id = order.id;
        return axios.post(`${API_URL}/${id}`, order);
    },


    deleteOrder(orderId) {
        return axios.delete(`${API_URL}/${orderId}`);
    },

};
