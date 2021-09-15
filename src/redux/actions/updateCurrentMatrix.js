import axios from 'axios';

const updateLocalMatrixSuccess = (payload) => ({
  type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
  payload,
});

const setNewUpdateFlag = (payload) => ({
  type: 'SET_NEW_UPDATE_FLAG',
  payload,
});

const updateDatabaseMatrixSuccess = (payload) => ({
  type: 'UPDATE_DATABASE_MATRIX_SUCCESS',
  payload,
});

const updateLocalMatrix = (payload) => (dispatch) => {
  dispatch(updateLocalMatrixSuccess(payload.newSkillLevel));
  dispatch(setNewUpdateFlag(payload.flag));
};

export const updateDatabaseMatrix = (updates) => (dispatch) => {
  dispatch(setNewUpdateFlag(false));
  return axios
    .put('http://localhost:3000/learning_outcome_matrix', updates)
    .then(({ data }) => {
      dispatch(updateDatabaseMatrixSuccess(data));
    })
    .catch((error) => { console.log(error); });
};

export default updateLocalMatrix;
