import React, { useEffect } from 'react';
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
import { updateDatabaseMatrix } from '../../redux/actions/updateCurrentMatrix';

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
    backgroundColor: '#4a938f',
    border: '2px solid black',
    display: 'flex',
    float: 'right',
  },
});

const MatrixTable = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.getCurrentMatrixReducer);
  const newStore = useSelector((state) => state.updateDatabaseMatrixReducer);
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
    store.matrix.data.forEach((outcome) => {
      newUpdates.matrix.push({ id: outcome.id, skills_level_id: outcome.skills_level });
    });
    dispatch(updateDatabaseMatrix(newUpdates));

    // eslint-disable-next-line no-console
    console.log(newStore.message);
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
              {store.matrix.data
                .map((row) => (
                  <SkillRow
                    key={row.id}
                    row={row}
                    skillLevelOptions={store.matrix.skill_level_options}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {
        store.newUpdates ? (
          <Button
            data-testid="update-btn"
            className={classes.update_btn}
            onClick={() => handleUpdate()}
          >
            Update Matrix
          </Button>
        ) : <div />
      }
    </>
  );
  return (
    <div>
      {createTable()}
    </div>
  );
};

export default MatrixTable;
