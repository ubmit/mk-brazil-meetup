import axios from 'axios';

export const FETCH_KEYBOARDS = 'FETCH_KEYBOARDS';

export const fetchKeyboards = activeTabSize => {
  const rootUrl = '/api/keyboards';
  const url = activeTabSize ? `${rootUrl}/size/${activeTabSize}` : rootUrl;
  const request = axios.get(url);

  return {
    type: FETCH_KEYBOARDS,
    payload: request
  };
};

export const FETCH_SIZES = 'FETCH_SIZES';

export const fetchSizes = () => {
  const request = axios.get('/api/keyboards/distinct/sizes');

  return {
    type: FETCH_SIZES,
    payload: request
  };
};
