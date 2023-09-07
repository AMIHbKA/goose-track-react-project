import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, notify } from 'utilities';

const getToken = thunkApi => {
  const state = thunkApi.getState();
  return state.auth.token;
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (credentials, thunkApi) => {
    try {
      const token = getToken(thunkApi);
      api.setAuthHeader(token);
      const response = await api.instance.get('tasks', {
        params: { ...credentials },
      });
      const result = response.data.tasks;
      return result;
    } catch (error) {
      notify('error', error.response.data.data || 'Oops! Something goes wrong');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, thunkApi) => {
    try {
      const token = getToken(thunkApi);
      api.setAuthHeader(token);
      const response = await api.instance.post('tasks', newTask);
      const result = response.data.task;
      return result;
    } catch (error) {
      notify('error', error.response.data.data || 'Oops! Something goes wrong');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (credentials, thunkApi) => {
    const { id, updatedTask } = credentials;
    try {
      const token = getToken(thunkApi);
      api.setAuthHeader(token);
      const response = await api.instance.patch(`tasks/${id}`, updatedTask);
      const result = response.data.taskData;
      return result;
    } catch (error) {
      notify('error', error.response.data.data || 'Oops! Something goes wrong');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (_id, thunkApi) => {
    try {
      const token = getToken(thunkApi);
      api.setAuthHeader(token);
      await api.instance.delete(`tasks/${_id}`);
      // const result = response.data;
      return _id;
    } catch (error) {
      notify('error', error.response.data.data || 'Oops! Something goes wrong');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
