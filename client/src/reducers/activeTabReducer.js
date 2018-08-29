import { ACTIVE_TAB } from '../actions';

export default function(state = 0, action) {
  switch (action.type) {
    case ACTIVE_TAB:
      return action.payload;
    default:
      return state;
  }
}
