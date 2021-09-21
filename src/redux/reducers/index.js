import { combineReducers } from 'redux';
import getCurrentMatrixReducer from './getCurrentMatrix';
import updateMatrixReducer from './updateMatrix';
import getMatricesHistoryReducer from './getMatricesHistory';

export default combineReducers({
  getCurrentMatrixReducer,
  updateMatrixReducer,
  getMatricesHistoryReducer,
});
