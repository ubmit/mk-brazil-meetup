import { combineReducers } from 'redux';
import keyboardsReducer from './keyboardsReducer';
import sizesReducer from './sizesReducer';

export default combineReducers({
  keyboards: keyboardsReducer,
  sizes: sizesReducer
});
