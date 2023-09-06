import axios from 'axios';
import { clearToken } from 'redux/auth/slice';
import { store } from 'redux/store';
import { notify } from './notify';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com/',
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      store.dispatch(clearToken());
      return Promise.reject(error);
    }
    return Promise.reject(notify('error', error.response.message));
  }
);

// Add JWT
const setAuthHeader = token => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

// Remove JWT
const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const api = {
  instance,
  setAuthHeader,
  clearAuthHeader,
};
