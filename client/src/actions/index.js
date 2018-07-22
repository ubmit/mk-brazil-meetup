import axios from 'axios';

export const FETCH_KEYBOARDS = 'FETCH_KEYBOARDS';

export const fetchKeyboards = () => {
  const request = axios.get('/api/keyboards');

  return {
    type: FETCH_KEYBOARDS,
    payload: request
  };
};
