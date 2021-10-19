import axiosInstance from '../../helpers/api';
import store from '../store/store';
import setSnackbar from './snackbar';

export const updateUserProfile = (payload) => ({
  type: 'UPDATE_USER_PROFILE',
  payload,
});

const saveProfileUpdates = () => (dispatch) => {
  const { updateUserProfileReducer: { profileUpdates: existingProfileUpdates } } = store.getState();
  const body = { user: existingProfileUpdates };
  return axiosInstance.patch('user', body)
    .then(() => dispatch(setSnackbar({
      snackbarOpen: true,
      snackbarType: 'success',
      snackbarMessage: 'updated successfully',
    })))
    .catch((err) => console.error(err));
};

export default saveProfileUpdates;
