import React from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  List, ListItem, ListItemText,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  active: {
    backgroundColor: 'f4f4f4',
  },
});

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

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
      </List>
    </div>
  );
};

export default SideBar;
