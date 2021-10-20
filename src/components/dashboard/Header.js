import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Menu, Button, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import profilePhoto from '../assets/grad_cap.jpeg';
import { logout } from '../../redux/actions/login';
import getCurrentUser from '../../redux/actions/getCurrentUser';
import getRoles from '../../redux/actions/getRoles';
import Dropdown from './Dropdown';

import Auth from '../../helpers/auth';

const auth0Client = new Auth();

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 0,
    height: '70px',
    marginBottom: '12px',
    backgroundColor: '#4a938f',
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
});

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profile = useSelector((state) => state.currentUserProfileReducer.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getRoles());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth0Client.logout();
    dispatch(logout());
    handleClose();
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Button
        className={classes.menuButton}
        id="user-info"
      >
        <Avatar
          className={classes.avatar}
          alt="David"
          src={profilePhoto}
          aria-controls="menu-items"
          aria-haspopup="true"
          onClick={handleClick}
        />
      </Button>
      <Menu
        id="menu-items"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Dropdown handleLogout={handleLogout} profile={profile} />
      </Menu>
    </AppBar>
  );
};

export default Header;
