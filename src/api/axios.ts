import axios from 'axios';

const BASE_URL = 'https://movie-challenge-api-xpand.azurewebsites.net/api';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
