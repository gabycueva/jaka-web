import React from 'react';
import {Div, Hamburguer, Logo} from "./styles";
import jakaBlack from "../../../../images/jaka-black.svg";
import SideMenu from "../SideMenu";
import { Link } from "react-router-dom";

function Navbar() {
/*    const [hamburgerOpen, setHamburgerOpen] = useState(false);*/

/*    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }*/

    return (
        <Div>
            <Logo>
                <Link to="/">
                    <img alt="logo" src={jakaBlack} />
                </Link>
            </Logo>
            <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Hamburguer>
                <SideMenu />
            </Hamburguer>
        </Div>
    );
}

export default Navbar;