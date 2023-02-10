import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => ({ isSuccess: true, data: response.data }),
  (error) => ({ isSuccess: false, error: error.response.data })
);

export default api;
