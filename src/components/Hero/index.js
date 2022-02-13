import React from 'react';
import {Div, Logo} from "./styles";
import logoRound from "../../images/logo-round.svg";

function Hero() {

    return (
        <Div>
            <Logo>
                <img alt="hero" src={logoRound} />
            </Logo>
        </Div>
    );
}

export default Hero;