import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton aria-label="menu" onClick={() => setOpen(true)}>
        <MenuIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="drawer-div">
          <Link to="/">
            <p className='link'>Home</p>
          </Link>
          <Link to="/compare">
            <p className='link'>Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className='link'>Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <p className='link'>Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
