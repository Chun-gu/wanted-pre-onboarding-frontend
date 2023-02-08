import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('jwt');

  if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => ({ data: response.data }),
  (error) => ({ error: error.response.data })
);

export default api;
