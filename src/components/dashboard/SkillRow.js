
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MenuItem, Menu, Button, TableRow, TableCell,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateLocalMatrix } from '../../redux/actions/updateCurrentMatrix';

const SkillRow = ({ row, skillLevelOptions }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedLevel = (payload) => {
    dispatch(updateLocalMatrix(payload));
    handleClose();
  };

  const getSkillLevelDIsplayMessage = () => {
    const level = skillLevelOptions.find((skillLevel) => skillLevel.id === row.skills_level);
    return level.display;
  };
  return (
    <TableRow hover tabIndex={-1}>
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
          data-testid="skill-level-btn"
          aria-controls="skills-options-menu"
          aria-haspopup="true"
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
        >
          {getSkillLevelDIsplayMessage()}
        </Button>

        <Menu
          id="skills-options-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            skillLevelOptions.map((option) => (
              <MenuItem
                key={option.id}
                onClick={() => handleSelectedLevel(
                  {
                    newSkillLevel: {
                      id: row.id, skills_level: option.id,
                    },
                    flag: true,
                  },
                )}
              >
                {option.description}

              </MenuItem>
            ))
          }
        </Menu>
      </TableCell>
    </TableRow>

  );
};

export default SkillRow;
