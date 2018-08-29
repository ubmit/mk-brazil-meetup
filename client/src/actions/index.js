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

export const ACTIVE_TAB = 'ACTIVE_TAB';

export const activeTab = size => {
  return {
    type: ACTIVE_TAB,
    payload: size
  };
};
