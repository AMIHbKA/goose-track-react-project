import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { checkErrors, checkSuccesfull } from 'utilities/checks';

axios.defaults.baseURL = 'https://goose-track-backend-odyh.onrender.com/';
// Add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('auth/register', credentials);
      // After successful registration, add the token to the HTTP header
      // setAuthHeader(response.data.userData.token);
      toast.success(checkSuccesfull('auth/register', response.status));
      return response.data.userData;
    } catch (error) {
      toast.error(checkErrors('auth/register', error.response.status));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('auth/login', credentials);

      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.userData.token);
      toast.success(checkSuccesfull('auth/login', response.status));
      return response.data.userData;
    } catch (error) {
      toast.error(checkErrors('auth/login', error.response.status));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();

    toast.success(checkSuccesfull('auth/logout', 200));
  } catch (error) {
    toast.error(checkErrors('auth/logout', error.response.status));
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkApi) => {
    // Reading the token from the state via getState()
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    console.log('persistedToken refreshUser', persistedToken);

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      // toast.error('Unable to fetch user');
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('user/current');
      // toast.success(checkSuccesfull('users/current', response.status));

      return response.data;
    } catch (error) {
      toast.error(checkErrors('user/current', error.response.status));

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
