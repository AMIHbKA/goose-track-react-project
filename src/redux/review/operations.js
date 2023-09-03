import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-odyh.onrender.com/';

export const sendFeedbackToBackend = createAsyncThunk(
  'reviews/own',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/reviews/own', credentials);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getReviewFromBackend = createAsyncThunk(
  'reviews/own',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.get('/reviews/own', credentials);
      const result = response.data.review[0];
      console.log('getReviewFromBackend.response', result);
      return result;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/own',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.delete('/reviews/own', credentials);
      const result = response.data.review;
      console.log('delete', result);
      return result;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editReview = createAsyncThunk(
  'reviews/own',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.patch('/reviews/own', credentials);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
