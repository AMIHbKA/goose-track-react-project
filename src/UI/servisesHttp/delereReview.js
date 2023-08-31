import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

export const deleteReview = async reviewId => {
  try {
    const response = await instance.delete(`/reviews/own/${reviewId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
