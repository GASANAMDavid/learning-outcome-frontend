import React from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  List, ListItem, ListItemText,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  active: {
    backgroundColor: 'f4f4f4',
  },
});

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const isAdmin = useSelector((state) => state.currentUserProfileReducer.profile.role.admin);

  return (
    <div>
      <List dense>
        <ListItem
          button
          onClick={() => history.push('/dashboard/current_matrix')}
          className={location.pathname === '/dashboard/matrix_table' ? classes.active : null}
        >
          <ListItemText primary="Current Matrix" />
        </ListItem>
        <ListItem
          button
          onClick={() => history.push('/dashboard/history')}
          className={location.pathname === '/dashboard/history' ? classes.active : null}
        >
          <ListItemText primary="History" />
        </ListItem>
        <ListItem
          button
          onClick={() => history.push('/dashboard/account')}
          className={location.pathname === '/dashboard/account' ? classes.active : null}
        >
          <ListItemText primary="Account" />
        </ListItem>

        {isAdmin && (
          <ListItem
            button
            onClick={() => history.push('/dashboard/users')}
            className={location.pathname === '/dashboard/users' ? classes.active : null}
          >
            <ListItemText primary="Users" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default SideBar;
