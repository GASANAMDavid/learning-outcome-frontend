import axios from 'axios';

export const getCurrentMatrixSuccess = (payload) => ({
  type: 'GET_CURRENT_MATRIX_SUCCESS',
  payload,
});

export const makeLocalMatrixCopy = (payload) => ({
  type: 'MAKE_LOCAL_MATRIX_COPY',
  payload,
});

const getCurrentMatrix = () => (dispatch) => axios
  .get('http://localhost:3000/learning_outcome_matrix')
  .then(({ data }) => {
    dispatch(getCurrentMatrixSuccess(data));
    dispatch(makeLocalMatrixCopy(data));
  })
  .catch((error) => { console.log(error); });

export default getCurrentMatrix;
