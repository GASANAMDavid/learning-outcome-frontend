import axios from 'axios';

const getMatricesHistorySuccess = (payload) => ({
  type: 'GET_HISTORY_SUCCESS',
  payload,
});

const getMatricesHistory = () => (dispatch) => axios
  .get('http://localhost:3000/history')
  .then(({ data }) => {
    dispatch(getMatricesHistorySuccess(data));
  })
  .catch(({ error }) => console.log(error));

export default getMatricesHistory;
