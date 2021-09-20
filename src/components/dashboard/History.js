import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import getMatricesHistory from '../../redux/actions/getMatricesHistory';

const History = () => {
  useEffect(() => {
    dispatch(getMatricesHistory());
  });
  return (
    <Button color="primary" />
  );
};

export default History;
