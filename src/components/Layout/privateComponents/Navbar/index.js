import React, {useState} from 'react';
import {Div} from "./styles";

function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <Div>
            {/*<div className="navigation">
                    <div className="logo">
                        Logotipo
                    </div>
            </div>
            <div className="links">
                <ul>
                    <li>Portfolio</li>
                    <li>Collection</li>
                    <li>Bio</li>
                    <li>Contact</li>


                </ul>
                <div onClick={toggleHamburger}>
                    <SideMenu isOpen={hamburgerOpen}/>
                </div>
            </div>*/}
        </Div>
    );
}

export default Navbar;