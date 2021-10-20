import React from 'react';
import {
  TableRow, TableCell, Button, Chip,
} from '@mui/material';
import { useHistory } from 'react-router';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  action: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

const userRow = ({ row, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push({
      pathname: '/dashboard/edit/',
      state: {
        user: row,
      },
    });
  };

  const classes = useStyles();
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
      <TableCell>
        {row.first_name}
      </TableCell>
      <TableCell>
        {row.last_name}
      </TableCell>
      <TableCell>
        {row.email}
      </TableCell>
      <TableCell>
        <Chip color={row.role.admin ? 'success' : 'secondary'} variant="outlined" label={row.role.name} />
      </TableCell>
      <TableCell className={classes.action}>
        <Button variant="outlined" color="primary" onClick={handleEdit}>edit</Button>
        <Button variant="outlined" color="error" onClick={handleDelete} className={`deleteBtn-${row.id}`}>delete</Button>
      </TableCell>
    </TableRow>
  );
};

export default userRow;
