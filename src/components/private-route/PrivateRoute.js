import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.isLoggedInReducer.user.authenticated);

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest}>{children}</Route>;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
