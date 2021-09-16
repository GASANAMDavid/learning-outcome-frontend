import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import SkillRow from './SkillRow';
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
    width: '10%',
    display: 'flex',
    float: 'right',
  },
});

const MatrixTable = () => {
  const dispatch = useDispatch();

  const originalStore = useSelector((state) => state.getCurrentMatrixReducer);
  const updatesStore = useSelector((state) => state.updateMatrixReducer);
  useEffect(() => {
    dispatch(getCurrentMatrix());
  }, [dispatch]);

  const columns = [{
    id: 'theme',
    label: 'Theme',
  }, {
    id: 'learning_outcome',
    label: 'Learning Outcome',
  }, {
    id: 'apprenticeship_level',
    label: 'Apprenticeship Level',
  },
  {
    id: 'skill_level',
    label: 'Skill Level',
  },
  ];

  const handleUpdate = () => {
    const newUpdates = { matrix: [] };
    updatesStore.matrix.data.forEach((outcome) => {
      newUpdates.matrix.push({ id: outcome.id, skills_level_id: outcome.skills_level });
    });
    dispatch(updateDatabaseMatrix(newUpdates));
    dispatch(updateOriginalLocalMatrix(updatesStore.matrix));
  };

  const classes = useStyles();

  const createTable = () => (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {updatesStore.matrix.data
                .map((row, index) => (
                  <SkillRow
                    index={index}
                    key={row.id}
                    row={row}
                    skillLevelOptions={updatesStore.matrix.skill_level_options}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        // eslint-disable-next-line max-len
        disabled={(_(updatesStore.matrix.data).differenceWith(originalStore.matrix.data, _.isEqual).isEmpty())}
        data-testid="update-btn"
        className={classes.update_btn}
        onClick={() => handleUpdate()}
      >
        Update Matrix
      </Button>
    </>
  );
  return (
    <div>
      {createTable()}
    </div>
  );
};

export default MatrixTable;
