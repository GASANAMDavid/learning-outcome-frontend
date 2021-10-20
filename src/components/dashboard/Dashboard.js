import React from 'react';
import {
  Drawer, Container, Divider,
  Typography,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideBar from './SideBar';
import Header from './Header';

const drawerWidth = 258;
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
  logo: {
    height: '70px',
    display: 'flex',
  },
  root: {
    display: 'flex',
    spaceBetween: 'center',
  },
});
const Dashboard = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <Button className={classes.logo}>
            <Typography>
              One World Coders
            </Typography>
          </Button>
          <Divider />
          <SideBar />
        </Drawer>
        <div className={classes.page}>
          <div className={classes.header}>
            <Header />
          </div>
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
