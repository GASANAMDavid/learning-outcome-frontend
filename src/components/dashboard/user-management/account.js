import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import saveProfileUpdates, { updateUserProfile } from '../../../redux/actions/updateUserProfile';
import UserInfo from './userInfo';

const Account = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.currentUserProfileReducer.profile);

  const handleRoleSelected = (role) => {
    const field = 'role_id';
    const updates = {
      [field]: role.id,
    };
    dispatch(updateUserProfile(updates));
  };

  const handleChange = (field) => (event) => {
    const updates = {
      [field]: event.target.value,
    };
    dispatch(updateUserProfile(updates));
  };

  const handleSaveChanges = () => {
    const userId = profile.id;
    dispatch(saveProfileUpdates(userId));
  };

  return (
    <UserInfo
      profile={profile}
      onChange={handleChange}
      onSelectedRoleChange={handleRoleSelected}
      onSave={handleSaveChanges}
      title="My Account"
      action="Save Changes"
      disableRoleField={!profile.role.admin}
      userAccount
    />
  );
};

export default Account;
