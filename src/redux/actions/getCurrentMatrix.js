import axiosInstance from '../../helpers/api';

export const getCurrentMatrixSuccess = (payload) => ({
  type: 'GET_CURRENT_MATRIX_SUCCESS',
  payload,
});

const getCurrentMatrix = () => (dispatch) => axiosInstance
  .get('/learning_outcome_matrix')
  .then(({ data }) => {
    dispatch(getCurrentMatrixSuccess(data));
  });

export default getCurrentMatrix;
