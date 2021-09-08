/* eslint-disable no-console */
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MenuItem, Menu, Button, TableRow, TableCell,
} from '@material-ui/core';

const SkillRow = ({ row, skillLevelOptions }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let value = 0;
  return (
    <TableRow hover tabIndex={-1} key={row.id}>
      <TableCell>
        {row.theme.title}
      </TableCell>
      <TableCell>
        {row.learning_outcome}
      </TableCell>
      <TableCell>
        {row.apprenticeship_level}
      </TableCell>
      <TableCell>
        <Button
          className="skills-level-btn"
          aria-controls="skills-options-menu"
          aria-haspopup="true"
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
        >
          {row.skills_level}
        </Button>

        <Menu
          id="skills-options-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            skillLevelOptions.map((option) => {
              value += 1;
              return (
                <MenuItem key={value} onClick={handleClose}>{option.description}</MenuItem>
              );
            })
          }
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default SkillRow;
