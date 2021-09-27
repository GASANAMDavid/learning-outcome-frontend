import React, { useEffect } from 'react';
import _ from 'lodash';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SkeletonTable from './SkeletonTable';
import MatrixTable from './MatrixTable';

import getCurrentMatrix from '../../redux/actions/getCurrentMatrix';
import { updateDatabaseMatrix, updateOriginalLocalMatrix } from '../../redux/actions/updateCurrentMatrix';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
  update_btn: {
    marginTop: '20px',
    marginRight: '60px',
    width: '17%',
    display: 'flex',
    float: 'right',
  },
});

const CurrentMatrix = () => {
  const dispatch = useDispatch();

  const originalStore = useSelector((state) => state.getCurrentMatrixReducer);
  const updatesStore = useSelector((state) => state.updateMatrixReducer);
  useEffect(() => {
    dispatch(getCurrentMatrix());
  }, [dispatch]);

  const handleUpdate = () => {
    const newUpdates = { matrix: [] };
    const changesMade = _.differenceWith(
      updatesStore.matrix.data,
      originalStore.matrix.data,
      _.isEqual,
    );

    changesMade.forEach((outcome) => {
      newUpdates.matrix.push({ id: outcome.id, skills_level_id: outcome.skills_level });
    });

    dispatch(updateDatabaseMatrix(newUpdates));
    dispatch(updateOriginalLocalMatrix(updatesStore.matrix));
  };

  const checkNewUpdates = () => {
    const updatedMatrix = updatesStore.matrix.data;
    const originalMatrix = originalStore.matrix.data;
    return _(updatedMatrix).differenceWith(originalMatrix, _.isEqual).isEmpty();
  };

  const classes = useStyles();

  return (
    <>
      {
        originalStore.isLoading ? <SkeletonTable skillLevelOptions={[]} /> : (
          <>
            <MatrixTable
              rows={updatesStore.matrix.data}
              skillLevelOptions={updatesStore.matrix.skill_level_options}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={checkNewUpdates()}
              data-testid="update-btn"
              className={classes.update_btn}
              onClick={() => handleUpdate()}
            >
              Update Matrix
            </Button>
          </>
        )
      }
    </>
  );
};

export default CurrentMatrix;
