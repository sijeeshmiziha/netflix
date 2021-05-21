import axios from 'axios';
import { baseUrl } from '../config/constants';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
