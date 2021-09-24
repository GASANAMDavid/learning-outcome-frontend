import axios from 'axios';

const getMatricesHistorySuccess = (payload) => ({
  type: 'GET_HISTORY_SUCCESS',
  payload,
});

export const setVersionIdToBeDisplayed = (payload) => ({
  type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
  payload,
});

const getMatricesHistory = () => (dispatch) => axios
  .get('http://localhost:3000/history')
  .then(({ data }) => {
    dispatch(setVersionIdToBeDisplayed(data.matrices[0].id));
    dispatch(getMatricesHistorySuccess(data));
  })
  .catch(({ error }) => console.log(error));

export default getMatricesHistory;
