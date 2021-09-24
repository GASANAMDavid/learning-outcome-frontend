import axios from 'axios';

const updateLocalMatrixSuccess = (payload) => ({
  type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
  payload,
});

export const setNewUpdateFlag = (payload) => ({
  type: 'SET_NEW_UPDATE_FLAG',
  payload,
});

export const updateOriginalLocalMatrix = (payload) => ({
  type: 'UPDATE_ORIGINAL_MATRIX',
  payload,
});

const updateDatabaseMatrixSuccess = (payload) => ({
  type: 'UPDATE_DATABASE_MATRIX_SUCCESS',
  payload,
});

export const updateLocalMatrix = (payload) => (dispatch) => {
  dispatch(updateLocalMatrixSuccess(payload.newSkillLevel));
};

export const updateDatabaseMatrix = (updates) => (dispatch) => {
  dispatch(setNewUpdateFlag(false));
  return axios
    .put('http://localhost:3000/learning_outcome_matrix', updates)
    .then(() => {
      dispatch(updateDatabaseMatrixSuccess({ message: 'Updated successfully' }));
    })
    .catch((error) => { console.log(error); });
};
