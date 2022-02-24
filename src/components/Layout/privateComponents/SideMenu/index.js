import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Div, List } from './styles';
import { Link } from "react-router-dom";

function SideMenu() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
      </ul>
      </List>
    </Box>
  );

  return (
    <Div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><div className='hamburguer'><MenuIcon /></div></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Div>
  );
}

export default SideMenu;