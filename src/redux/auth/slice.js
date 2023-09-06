import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    skype: null,
    phone: null,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        // state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        // state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
