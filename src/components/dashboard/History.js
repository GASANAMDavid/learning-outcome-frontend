import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import getMatricesHistory from '../../redux/actions/getMatricesHistory';
import Version from './Version';

const History = () => {
  const dispatch = useDispatch();
  const historyStore = useSelector((state) => state.getMatricesHistoryReducer);

  useEffect(() => {
    dispatch(getMatricesHistory());
  }, [dispatch]);

  const readableDate = (unixDate) => {
    const equivalentDate = fromUnixTime(unixDate);
    return format(equivalentDate, 'EEEE MMM do, yyyy hh:mm a');
  };
  return (
    <>
      <div style={{ width: '100%', overflow: 'auto', display: 'flex' }}>
        {
          historyStore.matrices.map((matrix, index) => (
            <Version date={readableDate(matrix.updated_at)} matrix={matrix.data} title={`Version ${index}`} key={matrix.updated_at} />
          ))
        }
      </div>
      <div>
        Hello
      </div>
    </>

  );
};

export default History;
