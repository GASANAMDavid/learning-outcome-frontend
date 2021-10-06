import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  Box, ListItemText, Divider, Menu, Button, Typography, AppBar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';
import profilePhoto from '../assets/grad_cap.jpeg';
import Auth from '../../helpers/auth';

const auth0Client = new Auth();

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menu_items: {
    display: 'flex',
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
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

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth0Client.logout();
    handleClose();
  };

  return (
    <AppBar position="static">
      <Button className={classes.menuButton} id="user-info">
        <Avatar
          className={classes.avatar}
          alt="David"
          src={profilePhoto}
          onClick={handleClick}
          aria-controls="menu-items"
          aria-haspopup="true"
        />
      </Button>
      <Menu
        id="menu-items"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box component="div" className={classes.userProfile}>
          <Typography variant="subtitle2" component="h6" id="user-name">David Gasana Manzi</Typography>
          <Typography variant="subtitle2" component="h6" id="occupation">Software Engineer</Typography>
        </Box>
        <Divider />
        <Box>
          <Button href="/dashboard" aria-label="Profile" className={classes.menu_items} id="profile">
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
          <Button aria-label="logout" onClick={handleLogout}>Logout</Button>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
