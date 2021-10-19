import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { useHistory } from 'react-router';

const userRow = ({ row }) => {
  const history = useHistory();
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
        {row.role.id}
      </TableCell>
      <TableCell>
        <Button variant="outlined" color="primary" onClick={() => history.push('/dashboard/edit')}>edit</Button>
        <Button variant="outlined" color="error">delete</Button>
      </TableCell>
    </TableRow>
  );
};

export default userRow;
