import {combineReducers} from 'redux';
import DataReducer from './reducer-data.js';
import ActiveDataReducer from './reducer-data-action.js';

const allReducers= combineReducers({
  data: DataReducer,
  activeData: ActiveDataReducer
});
export default allReducers;
