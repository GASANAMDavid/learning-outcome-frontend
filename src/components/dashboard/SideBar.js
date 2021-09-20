import React from 'react';
import { List, ListItem } from '@material-ui/core';
import MatrixTable from './MatrixTable';
import History from './History';

const SideBar = () => (
  <div>
    <List>
      <ListItem button key="current matrix">
        <MatrixTable />
      </ListItem>
      <ListItem button key="history">
        <History />
      </ListItem>
    </List>
  </div>
);

export default SideBar;
