import React from 'react';
import {
  Drawer, Container, Divider,
  Avatar,
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
            <Avatar
              className={classes.avatar}
              alt="logo"
              src="https://images.squarespace-cdn.com/content/v1/5dfc0291e4c3b00157471aa8/1577157534461-VNAILQPNC56U9M51N5KP/horizontal_gradient%404x.png?format=1500w"
            />
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
