import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com/',
});

// Add JWT
const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
