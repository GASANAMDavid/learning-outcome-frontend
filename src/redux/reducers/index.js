import { combineReducers } from 'redux';
import getCurrentMatrixReducer from './getCurrentMatrix';
import updateMatrixReducer from './updateMatrix';

export default combineReducers({ getCurrentMatrixReducer, updateMatrixReducer });
