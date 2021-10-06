import axiosInstance from '../../helpers/api';
import setSnackbar from './snackbar';

const getMatricesHistoryStart = () => ({
  type: 'GET_MATRICES_HISTORY_START',
});
const getMatricesHistorySuccess = (payload) => ({
  type: 'GET_HISTORY_SUCCESS',
  payload,
});

export const setVersionIdToBeDisplayed = (payload) => ({
  type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
  payload,
});

const getMatricesHistory = () => (dispatch) => {
  dispatch(getMatricesHistoryStart());
  return axiosInstance
    .get('/history')
    .then(({ data }) => {
      dispatch(setVersionIdToBeDisplayed(data.matrices[0].id));
      dispatch(getMatricesHistorySuccess(data));
    })
    .catch((error) => dispatch(setSnackbar(
      {
        snackbarOpen: true,
        snackbarType: 'error',
        snackbarMessage: error.message,
      },
    )));
};

export default getMatricesHistory;
