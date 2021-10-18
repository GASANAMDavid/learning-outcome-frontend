import React from 'react';
import {
  Card, CardContent, CardHeader,
  Divider, TextField, Box, InputLabel,
  MenuItem, FormControl, Select, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import saveProfileUpdates, { updateUserProfile } from '../../../redux/actions/updateUserProfile';

const useStyles = makeStyles({
  root: {
    width: '50em',
    border: '1px solid rgba(0, 20, 0)',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '15px',
  },
  item: {
    width: '20em',
    margin: '5% auto',
  },
  saveChanges: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: '10px 50px 10px 0',
  },
  saveBtn: {
    borderRadius: '15px',
    backgroundColor: 'rgb(86, 100, 210)',
    color: 'white',
    '&:hover': {
      background: 'rgb(86, 100, 90)',
    },
  },
});

const Profile = () => {
  const [role, setRole] = React.useState(10);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.currentUserProfileReducer.profile);
  const classes = useStyles();
  const isEmpty = false;
  const isError = false;

  const handleRoleSelected = (event) => {
    setRole(event.target.value);
  };

  const handleChange = (field) => (event) => {
    const updates = {
      [field]: event.target.value,
    };
    dispatch(updateUserProfile(updates));
  };

  const handleSaveChanges = () => dispatch(saveProfileUpdates());

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title="Profile" />
      <Divider />
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={classes.content}
        >
          <TextField
            className={classes.item}
            error={isError}
            label="first_name"
            variant="outlined"
            id="first_name"
            placeholder="first name *"
            value={profile.first_name}
            focused
            helperText={isEmpty ? 'first name is required.' : ''}
            onChange={handleChange('first_name')}
          />
          <TextField
            className={classes.item}
            error={isError}
            label="last_name"
            variant="outlined"
            id="outlined-error-helper-text"
            placeholder="last name *"
            value={profile.last_name}
            focused
            helperText={isEmpty ? 'last name is required.' : ''}
            onChange={handleChange('last_name')}
          />
          <TextField
            className={classes.item}
            error={isError}
            label="email"
            variant="outlined"
            id="outlined-error-helper-text"
            placeholder="email *"
            value={profile.email}
            focused
            helperText={isEmpty ? 'email is required.' : ''}
            onChange={handleChange('email')}
          />
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            className={classes.item}
            disabled
          >
            <InputLabel id="demo-simple-select-required-label">role</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={role}
              label="role"
              onChange={handleRoleSelected}
            >
              <MenuItem value={10}>Apprentice</MenuItem>
              <MenuItem value={20}>Admin</MenuItem>
              <MenuItem value={30}>Coder</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider />
        <Box className={classes.saveChanges}>
          <Button className={classes.saveBtn} onClick={handleSaveChanges} id="save-changes"> Save Changes</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Profile;
