import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

export const getReviews = async () => {
  try {
    const response = await instance.get('/reviews');
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
