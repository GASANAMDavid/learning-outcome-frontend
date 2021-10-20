import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import UserInfo from './userInfo';
import Auth from '../../../helpers/auth';
import setSnackbar from '../../../redux/actions/snackbar';
import createUser, { addUserInfo } from '../../../redux/actions/createUser';

const auth0Client = new Auth();

const CreateUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.createUserReducer.user);
  const handleRoleSelected = (role) => {
    const field = 'role';
    const newUserInfo = {
      [field]: role,
    };
    dispatch(addUserInfo(newUserInfo));
  };

  const handleChange = (field) => (event) => {
    const newUserInfo = {
      [field]: event.target.value,
    };
    dispatch(addUserInfo(newUserInfo));
  };

  const handleRegister = () => {
    auth0Client.register(user, (error) => {
      if (error) {
        console.log(user, error);
      } else {
        dispatch(setSnackbar(
          {
            snackbarOpen: true,
            snackbarType: 'success',
            snackbarMessage: 'Successfuly created an account',
          },
        ));
        dispatch(createUser(history));
      }
    });
  };

  return (
    <UserInfo
      profile={user}
      onChange={handleChange}
      onSelectedRoleChange={handleRoleSelected}
      onSave={handleRegister}
      title="Create User"
      action="Create User"
      isCreateAccount
    />
  );
};

export default CreateUser;
