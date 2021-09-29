import axios from 'axios';
import setSnackbar from './snackbar';

export const getCurrentMatrixSuccess = (payload) => ({
  type: 'GET_CURRENT_MATRIX_SUCCESS',
  payload,
});

const getCurrentMatrixStart = () => ({
  type: 'GET_CURRENT_MATRIX_START',
});

export const isLoading = (payload) => ({ type: 'IS_LOADING', payload });

export const makeLocalMatrixCopy = (payload) => ({
  type: 'MAKE_LOCAL_MATRIX_COPY',
  payload,
});

const getCurrentMatrix = () => (dispatch) => {
  dispatch(getCurrentMatrixStart());
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/learning_outcome_matrix`)
    .then(({ data }) => {
      dispatch(getCurrentMatrixSuccess(data));
      dispatch(makeLocalMatrixCopy(data));
    })
    .catch((error) => dispatch(setSnackbar(
      {
        snackbarOpen: true,
        snackbarType: 'error',
        snackbarMessage: error.message,
      },
    )));
};

export default getCurrentMatrix;
