import axios from 'axios';
import { FETCH_KEYBOARDS } from './types';

export const fetchKeyboards = () => {
  const request = axios.get('/api/keyboards');

  return {
    type: FETCH_KEYBOARDS,
    payload: request
  };
};
