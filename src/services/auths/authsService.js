import axios from '@/plugins/axios';

const API_URL = '/api/users';

export default {
  register(credentials) {
    return axios.post(`${API_URL}/register`, credentials);
  },
  login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  },
  authUser() {
    return axios.get(`${API_URL}/auth`);
  },
  logout() {
    return axios.post(`${API_URL}/logout`);
  }
};
