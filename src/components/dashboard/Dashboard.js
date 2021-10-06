import React from 'react';
import { Drawer, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideBar from './SideBar';
import Header from './Header';

const drawerWidth = 200;
const useStyles = makeStyles({
  page: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: 'flex',
  },
});
const Dashboard = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <div>
            <Typography variant="h5">
              Dashboard
            </Typography>
          </div>
          <SideBar />
        </Drawer>
        <div className={classes.page}>
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
