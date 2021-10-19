import axiosInstance from '../../helpers/api';
import setSnackbar from './snackbar';

const removeUserFromStore = (payload) => (
  {
    type: 'REMOVE_USER_FROM_LIST',
    payload,
  }
);

const deleteUser = (userId) => (dispatch) => axiosInstance.delete(`/user/${userId}`)
  .then(() => {
    dispatch(removeUserFromStore(userId));
    dispatch(setSnackbar({
      snackbarOpen: true,
      snackbarType: 'success',
      snackbarMessage: 'User deleted successfully',
    }));
  });

export default deleteUser;
