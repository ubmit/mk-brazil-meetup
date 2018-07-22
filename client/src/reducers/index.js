import { combineReducers } from 'redux';
import keyboardsReducer from './keyboardsReducer';

export default combineReducers({
  keyboards: keyboardsReducer
});
