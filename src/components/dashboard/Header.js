import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Box, ListItemText } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import profilePhoto from '../assets/grad_cap.jpeg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menu_items: {
    display: 'flex',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'flex-end',
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

  return (
    <AppBar position="static">
      <Button className={classes.avatar} id="user-info">
        <Avatar
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
        <Box component="div">
          <Typography variant="subtitle2" component="h6" id="user-name">David Gasana Manzi</Typography>
          <Typography variant="subtitle2" component="h6" id="occupation">Software Engineer</Typography>
        </Box>
        <Box>
          <Button href="/dashboard" aria-label="Profile" className={classes.menu_items} id="profile">
            <PersonIcon />
            <ListItemText>Profile</ListItemText>
          </Button>
          <Button href="/dashboard" aria-label="Settings" className={classes.menu_items} id="settings">
            <SettingsIcon />
            <ListItemText>Settings</ListItemText>
          </Button>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
