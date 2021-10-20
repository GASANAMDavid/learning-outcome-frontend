import { combineReducers } from 'redux';
import getCurrentMatrixReducer from './getCurrentMatrix';
import updateMatrixReducer from './updateMatrix';
import getMatricesHistoryReducer from './getMatricesHistory';
import versionToBeDisplayedReducer from './versionToBeDisplayed';
import snackbarReducer from './snackbar';
import createUserReducer from './createUser';
import isLoggedInReducer from './isLoggedIn';
import currentUserProfileReducer from './currentUserProfile';
import updateUserProfileReducer from './updateUserProfile';
import usersListReducer from './usersList';
import rolesReducer from './roles';

export default combineReducers({
  getCurrentMatrixReducer,
  updateMatrixReducer,
  getMatricesHistoryReducer,
  versionToBeDisplayedReducer,
  snackbarReducer,
  createUserReducer,
  isLoggedInReducer,
  currentUserProfileReducer,
  updateUserProfileReducer,
  usersListReducer,
  rolesReducer,
});
