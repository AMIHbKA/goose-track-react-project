import { createSlice } from '@reduxjs/toolkit';
import { getMilliseconds } from 'date-fns';

const dateSlice = createSlice({
  name: 'date',
  initialState: Number(Date.now()),
  reducers: {
    setDate(state, {payload}) {
      return (state = getMilliseconds(payload));
    },
  },
});

export const { setDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;