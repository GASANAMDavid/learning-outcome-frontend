
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SkillRow from './SkillRow';
import getCurrentMatrix from '../../redux/actions/getCurrentMatrix';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const MatrixTable = () => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.getCurrentMatrixReducer.matrix);
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

  const classes = useStyles();
  // console.log(matrix);

  const createTable = () => (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {matrix.data
              .map((row) => (
                <SkillRow key={row.id} row={row} skillLevelOptions={matrix.skill_level_options} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
  return (
    <div>
      {createTable()}
    </div>
  );
};

export default MatrixTable;
