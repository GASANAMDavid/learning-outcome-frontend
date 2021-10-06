import axiosInstance from '../../helpers/api';
import setSnackbar from './snackbar';
import store from '../store/store';
import Auth from '../../helpers/auth';

const createUserStart = () => (
  {
    type: 'CREATE_USER_START',
  }
);

const removeUserInfo = () => ({
  type: 'REMOVE_USER_INFO',
});

export const addUserInfo = (payload) => (
  {
    type: 'ADD_USER_INFO',
    payload,
  }
);

const createUser = () => (dispatch) => {
  const { createUserReducer: { user: existingUser } } = store.getState();
  const body = {
    first_name: existingUser.first_name,
    last_name: existingUser.last_name,
    email: existingUser.email,
  };
  dispatch(createUserStart());
  return axiosInstance.post('/user', body)
    .then(({ data }) => {
      dispatch(removeUserInfo());
      dispatch(setSnackbar(data.message));
      new Auth().signIn({ email: existingUser.email, password: existingUser.password });
    })
    .catch(({ error }) => {
      console.log(error);
    });
};

export default createUser;
