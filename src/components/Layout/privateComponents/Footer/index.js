import React from 'react';
import {Div} from "./styles";
import jakaBlack from "../../../../images/jaka-black.svg";

function Footer() {

    return (
        <Div>
            <span><img src={jakaBlack} /></span>
            <span>Controladora JAKA SAPI de CV</span>
            <span>(C) JAKA 2022.</span>
        </Div>
    );
}

export default Footer;