import axiosInstance from '../../helpers/api';

const getUsersStart = () => ({
  type: 'GET_USERS_START',
});

const getUsersSuccess = (payload) => ({
  type: 'GET_USERS_SUCCESS',
  payload,
});

const getUsers = () => (dispatch) => {
  dispatch(getUsersStart());

  return axiosInstance.get('/user/list_users')
    .then(({ data }) => dispatch(getUsersSuccess(data)))
    .catch((error) => console.log(error));
};

export default getUsers;
