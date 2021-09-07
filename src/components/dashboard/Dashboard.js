import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import getCurrentMatrix from '../../redux/actions/getCurrentMatrix';

const Dashboard = () => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.getCurrentMatrixReducer.matrix);
  useEffect(() => {
    dispatch(getCurrentMatrix());
  }, [dispatch]);

  // eslint-disable-next-line no-console
  console.log(matrix.data);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
