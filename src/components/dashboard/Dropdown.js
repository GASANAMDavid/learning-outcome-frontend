import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from 'react-router';
import {
  Box, ListItemText, Divider, Button, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  menuItemText: {
    paddingLeft: '4px',
    textTransform: 'none',
  },
  avatar: {
    border: '8px solid white',
  },
  userProfile: {
    padding: '8px',
  },
});

const Dropdown = ({ profile, handleLogout }) => {
  const history = useHistory();

  const classes = useStyles();
  return (
    <div>
      <Box component="div">
        <Typography variant="subtitle2" component="h6" id="user-name">
          {`${profile.first_name} ${profile.last_name}`}
        </Typography>
        <Typography variant="subtitle2" component="h6" id="occupation">Software Engineer</Typography>
      </Box>
      <Divider />
      <Box>
        <Button onClick={() => history.push('/dashboard/account')} aria-label="Profile" id="profile">
          <PersonIcon />
          <ListItemText className={classes.menuItemText}>Profile</ListItemText>
        </Button>
        <Button href="/dashboard" aria-label="Settings" className={classes.menu_items} id="settings">
          <SettingsIcon />
          <ListItemText className={classes.menuItemText}>Settings</ListItemText>
        </Button>
      </Box>
      <Divider />
      <Box>
        <Button aria-label="logout" onClick={handleLogout} id="logout">Logout</Button>
      </Box>
    </div>
  );
};

export default Dropdown;
