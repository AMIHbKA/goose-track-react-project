import { Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';

export const PopUpStateMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>In Progress</MenuItem>
        <MenuItem onClick={handleClose}>Done</MenuItem>
      </Menu>
    </div>
  );
};
