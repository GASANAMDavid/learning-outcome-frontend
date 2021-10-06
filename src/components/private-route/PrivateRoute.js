import React from 'react';
import { Route, Redirect } from 'react-router';
import { getItem } from '../../helpers/localStorage';

const PrivateRoute = ({ children, ...rest }) => {
  console.log('Hello');
  const isAuthenticated = getItem('accessToken') !== null;

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest}>{children}</Route>;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
