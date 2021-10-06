import { combineReducers } from 'redux';
import getCurrentMatrixReducer from './getCurrentMatrix';
import updateMatrixReducer from './updateMatrix';
import getMatricesHistoryReducer from './getMatricesHistory';
import setVersionIdToBeDisplayedReducer from './setVersionIDToBeDisplayed';
import snackbarReducer from './snackbar';
import createUserReducer from './createUser';
import isLoggedInReducer from './isLoggedIn';

export default combineReducers({
  getCurrentMatrixReducer,
  updateMatrixReducer,
  getMatricesHistoryReducer,
  setVersionIdToBeDisplayedReducer,
  snackbarReducer,
  createUserReducer,
  isLoggedInReducer,
});
