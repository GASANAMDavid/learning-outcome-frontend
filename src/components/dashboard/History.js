import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMatricesHistory from '../../redux/actions/getMatricesHistory';
import Version from './Version';

const History = () => {
  const dispatch = useDispatch();
  const historyStore = useSelector((state) => state.getMatricesHistoryReducer);

  useEffect(() => {
    dispatch(getMatricesHistory());
  }, [dispatch]);
  return (
    <>
      {
        historyStore.matrices.map((matrix, index) => (
          <Version date={matrix.updated_at} title={`Version ${index}`} key={matrix.updated_at} />
        ))
      }
    </>

  );
};

export default History;
