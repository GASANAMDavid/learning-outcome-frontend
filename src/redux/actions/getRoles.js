import axiosInstance from '../../helpers/api';

const getRolesSuccess = (payload) => ({
  type: 'GET_ROLES_SUCCESS',
  payload,
});

const getRoles = () => (dispatch) => axiosInstance.get('/roles')
  .then(({ data }) => { dispatch(getRolesSuccess(data)); })
  .catch((error) => console.log(error));

export default getRoles;
