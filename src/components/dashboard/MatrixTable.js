import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Table, TableHead, TableBody, TableRow, TableCell, TableContainer, TablePagination, Paper,
} from '@mui/material';
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

const MatrixTable = ({ rows, skillLevelOptions, disableSelect }) => {
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
                    disableSelect={disableSelect}
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

MatrixTable.defaultProps = {
  disableSelect: false,
};

export default MatrixTable;
