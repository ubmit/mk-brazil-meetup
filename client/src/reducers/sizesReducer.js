import { FETCH_SIZES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SIZES:
      return action.payload.data;
    default:
      return state;
  }
}
