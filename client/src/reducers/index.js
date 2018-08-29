import { combineReducers } from 'redux';
import keyboardsReducer from './keyboardsReducer';
import activeTabReducer from './activeTabReducer';

export default combineReducers({
  keyboards: keyboardsReducer,
  activeTabSize: activeTabReducer
});
