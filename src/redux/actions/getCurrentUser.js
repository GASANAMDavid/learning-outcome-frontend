import axiosInstance from '../../helpers/api';

const getCurrentStart = () => ({
  type: 'GET_CURRENT_USER_START',
});

const getCurrentUserSuccess = (payload) => ({
  type: 'GET_CURRENT_USER_SUCCESS',
  payload,
});

export const updateUserProfile = (payload) => ({
  type: 'UPDATE_USER_PROFILE',
  payload,
});

const getCurrentUser = () => (dispatch) => {
  dispatch(getCurrentStart());
  return axiosInstance.get('/user')
    .then(({ data }) => {
      dispatch(getCurrentUserSuccess(data));
    })
    .catch((error) => console.error(error));
};

export default getCurrentUser;
