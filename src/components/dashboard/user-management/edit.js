import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import saveProfileUpdates, { updateUserProfile } from '../../../redux/actions/updateUserProfile';
import UserInfo from './userInfo';

const Edit = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = location.state;

  const [profile, setProfile] = React.useState(user);
  const handleRoleSelected = (role) => {
    const field = 'role_id';
    const updates = {
      [field]: role.id,
    };
    dispatch(updateUserProfile(updates));
    setProfile({ ...profile, role });
  };

  const handleChange = (field) => (event) => {
    const updates = {
      [field]: event.target.value,
    };
    dispatch(updateUserProfile(updates));
    setProfile({ ...profile, ...updates });
  };

  const handleSaveChanges = () => {
    const userId = user.id;
    dispatch(saveProfileUpdates(userId));
  };

  return (
    <UserInfo
      profile={profile}
      onChange={handleChange}
      onSelectedRoleChange={handleRoleSelected}
      onSave={handleSaveChanges}
      title="Edit User"
      action="Save Changes"
    />
  );
};

export default Edit;
