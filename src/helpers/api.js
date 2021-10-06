import axios from 'axios';
import dotenv from 'dotenv';
import { getItem } from './localStorage';

dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getItem('accessToken');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
