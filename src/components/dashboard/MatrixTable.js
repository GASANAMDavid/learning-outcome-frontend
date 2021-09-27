import React from 'react';
// import _ from 'lodash';
// import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SkillRow from './SkillRow';
import Help from '../Helpers/Help';

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

const MatrixTable = ({ rows, skillLevelOptions }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    help: <Help levels={skillLevelOptions} />,
  },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();

  const createTable = () => (
    <>
      <Paper className={classes.root} sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer className={classes.container} sx={{ maxHeight: 800 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.label}
                    {' '}
                    {column.help}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <SkillRow
                    index={index}
                    key={row.id}
                    row={row}
                    skillLevelOptions={skillLevelOptions}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
  return (
    <div>
      {createTable()}
    </div>
  );
};

export default MatrixTable;
