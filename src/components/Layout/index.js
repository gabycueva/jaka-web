import React, {useState} from 'react';
import SideMenu from "./privateComponents/SideMenu";

function Layout() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className="navigation">
                <ul>
                    <li>Portfolio</li>
                    <li>Collection</li>
                    <li>Bio</li>
                    <li>Contact</li>


                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <SideMenu isOpen={hamburgerOpen}/>
                </div>
            </div>
        </div>
    );
}

export default Layout;