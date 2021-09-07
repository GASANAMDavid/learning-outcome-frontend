import axios from 'axios';

export const getCurrentMatrixSuccess = (payload) => ({
  type: 'GET_CURRENT_MATRIX_SUCCESS',
  payload,
});

const getCurrentMatrix = () => (dispatch) => axios
  .get('http://localhost:3000/learning_outcome_matrix')
  .then(({ data }) => {
    dispatch(getCurrentMatrixSuccess(data));
  });

export default getCurrentMatrix;
