import axiosInstance from '../../helpers/api';
import setSnackbar from './snackbar';
import store from '../store/store';

const createUserStart = () => (
  {
    type: 'CREATE_USER_START',
  }
);

const removeUserInfo = () => ({
  type: 'REMOVE_USER_INFO',
});

export const addUserInfo = (payload) => ({
  type: 'ADD_USER_INFO',
  payload,
});

const createUser = (history) => (dispatch) => {
  const { createUserReducer: { user: existingUser } } = store.getState();
  const body = {
    first_name: existingUser.first_name,
    last_name: existingUser.last_name,
    email: existingUser.email,
    role_id: existingUser.role.id,
  };
  dispatch(createUserStart());
  return axiosInstance.post('/user', body)
    .then(({ data }) => {
      dispatch(removeUserInfo());
      dispatch(setSnackbar(data.message));
      history.push('/dashboard/users');
    })
    .catch(({ error }) => {
      console.log(error);
    });
};

export default createUser;
