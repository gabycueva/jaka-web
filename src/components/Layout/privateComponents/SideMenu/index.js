import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu';
import { Div, List } from './styles';

function SideMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List>
        <MenuItem onClick={handleClose}><Link to="/portfolio">Portfolio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/collection">Collection</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/bio">Bio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
        </List>
      </Menu>
    </Div>
  );
}

export default SideMenu;
