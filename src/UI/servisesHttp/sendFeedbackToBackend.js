import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

export const sendFeedbackToBackend = async (rating, review) => {
  try {
    const response = await instance.put('/reviews/own', {
      rating,
      review,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
