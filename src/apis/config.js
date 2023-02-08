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
  (response) => ({ isSuccess: true, data: response.data }),
  (error) => ({ isSuccess: false, error: error.response.data })
);

export default api;
