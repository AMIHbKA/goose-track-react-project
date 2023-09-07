import { createSlice } from '@reduxjs/toolkit';
import {
  deleteReview,
  editReview,
  getReviewFromBackend,
  sendFeedbackToBackend,
} from './operations';

const initialState = {
  stars: null,
  reviewText: null,
  error: null,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    updateStars: (state, action) => {
      state.stars = action.payload;
    },
    updateReviewText: (state, action) => {
      state.reviewText = action.payload;
    },
  },
  extraredusers: builder => {
    builder
      .addCase(sendFeedbackToBackend.fulfilled, (state, action) => {
        state.stars = action.payload.stars;
        // console.log('starsSend', state.stars);
        state.reviewText = action.payload.reviewText;
        // console.log('textSend', state.reviewText);
        state.error = null;
      })
      .addCase(sendFeedbackToBackend.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getReviewFromBackend.fulfilled, (state, action) => {
        state.stars = action.payload.stars;
        // console.log('starsGet', state.stars);
        state.reviewText = action.payload.reviewText;
        // console.log('textGet', state.reviewText);
        state.error = null;
      })
      .addCase(getReviewFromBackend.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.stars = action.payload.stars;
        state.reviewText = action.payload.reviewText;
      })
      .addCase(editReview.fulfilled, (state, action) => {
        state.stars = action.payload.stars;
        state.reviewText = action.payload.reviewText;
      });
  },
});

export const { updateStars, updateReviewText } = reviewSlice.actions;

export const reviewReducer = reviewSlice.reducer;
