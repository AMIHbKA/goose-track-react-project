import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'utilities';
import { notify } from 'utilities/notify';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await api.instance.post('auth/register', credentials);

      // After successful registration, add the token to the HTTP header
      notify('success', response.data.message);
      return response.data.userData;
    } catch (error) {
      notify(
        'error',
        error.response.data.message || 'Oops! Something goes wrong'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await api.instance.post('auth/login', credentials);

      // After successful login, add the token to the HTTP header
      api.setAuthHeader(response.data.userData.token);
      notify('success', response.data.message);
      return response.data.userData;
    } catch (error) {
      notify(
        'error',
        error.response.data.message || 'Oops! Something goes wrong'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.instance.post('auth/logout');

    // After a successful logout, remove the token from the HTTP header
    api.clearAuthHeader();

    notify('success', 'Successfully logged out');
  } catch (error) {
    notify('error', 'Oops! Something were wrong! Please try again later');

    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkApi) => {
    // Reading the token from the state via getState()
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      api.setAuthHeader(persistedToken);
      const response = await api.instance.get('user/current');

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
