import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Div} from "./styles";


function SideMenu() {
    return (
        <Div>
            <div className="hamburguer">
                <MenuIcon/>
            </div>
        </Div>
    );
}

export default SideMenu;