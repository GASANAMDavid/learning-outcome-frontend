import React from 'react';
import { Popover, Typography, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const Help = ({ levels }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <HelpIcon
        color="primary"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 1 }} style={{ textAlign: 'center' }}>Skill levels</Typography>
        <Divider />
        {levels.map((level) => (
          <Typography key={level.id}>
            {level.display}
            {' '}
            {level.description}
          </Typography>
        ))}
      </Popover>
    </>
  );
};

export default Help;
