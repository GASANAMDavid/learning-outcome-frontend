import { combineReducers } from 'redux';
import getCurrentMatrixReducer from './getCurrentMatrix';
import updateDatabaseMatrixReducer from './updateDatabaseMatrix';

export default combineReducers({ getCurrentMatrixReducer, updateDatabaseMatrixReducer });
