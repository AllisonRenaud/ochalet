import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;

  if (!accessToken) {
    window.location.href = '/login';
  }

  return config;
});

export default axiosInstance;
