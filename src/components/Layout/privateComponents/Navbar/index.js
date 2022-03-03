import React from 'react';
import {Div, Hamburguer, Logo} from "./styles";
import jakaBlack from "../../../../images/jaka-black.svg";
import SideMenu from "../SideMenu";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Div>
            <Logo>
                <Link to="/">
                    <img alt="logo" src={jakaBlack} />
                </Link>
            </Logo>
            <Hamburguer>
                <SideMenu />
            </Hamburguer>
        </Div>
    );
}

export default Navbar;