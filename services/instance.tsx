import axios from 'axios';
import { API_URL } from '../config/constants';

export const instance = axios.create({
  baseURL: `${API_URL}/`,
});

