import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

export const getReviews = async () => {
  try {
    const response = await instance.get('/reviews');
    // console.log(response.data.reviews);
    // console.log(response.data.reviews[6].owner);
    return response.data.reviews;
  } catch (error) {
    console.log(error);
    return [];
  }
};
