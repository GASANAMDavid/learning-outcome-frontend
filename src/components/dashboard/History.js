import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromUnixTime, format } from 'date-fns';
import getMatricesHistory from '../../redux/actions/getMatricesHistory';
import Version from './Version';
import MatrixTable from './MatrixTable';
import SkeletonTable from './SkeletonTable';

const History = () => {
  const dispatch = useDispatch();
  const historyStore = useSelector((state) => state.getMatricesHistoryReducer);
  const store = useSelector((state) => state.versionToBeDisplayedReducer);

  useEffect(() => {
    dispatch(getMatricesHistory());
  }, [dispatch]);

  const getVersionRowsData = (matrices) => {
    const matrixVersionToBeDisplayed = matrices.find((matrix) => matrix.id === store.id);
    return matrixVersionToBeDisplayed.data;
  };

  const readableDate = (unixDate) => {
    const equivalentDate = fromUnixTime(unixDate);
    return format(equivalentDate, 'E MMM do, yyyy hh:mm a');
  };
  return (
    <>
      <div style={{ width: '100%', overflow: 'auto', display: 'flex' }}>
        {
          historyStore.matrices.map((matrix, index) => (
            <Version
              date={readableDate(matrix.updated_at)}
              matrix={matrix.data}
              versionId={matrix.id}
              title={`Version ${index}`}
              key={matrix.updated_at}
            />
          ))
        }
      </div>
      <div>
        {historyStore.isLoading ? <SkeletonTable skillLevelOptions={[]} /> : (
          <MatrixTable
            rows={getVersionRowsData(historyStore.matrices)}
            skillLevelOptions={historyStore.skill_level_options}
            disableSelect
          />
        )}
      </div>
    </>

  );
};

export default History;
