import { FETCH_KEYBOARDS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_KEYBOARDS:
      return action.payload.data;
    default:
      return state;
  }
}
