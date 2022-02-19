import React from 'react';
import {Container, Div, Flex, Header} from "./styles";
import TitleBar from "../../components/TitleBar";
import LinkCard from "../../components/LinkCard";
import jakaBlack from "../../images/jaka-black.svg";
import logoRound from "../../images/gifs/Portfolio_LearningMachine.gif";
import credilikeme from "../../images/credilikeme.svg";
import kobra from "../../images/kobra.svg";


function Portfolio() {
    return (
        <Div>
            <Header>
                <span><img alt="logo" src={jakaBlack} /></span>
                <span>PORTFOLIO</span>
            </Header>
            <Container>
                <TitleBar title="ENTREPRENEUR:" />
                <Flex>
                    <LinkCard image={credilikeme} text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard image={kobra} text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                </Flex>
                <TitleBar title="INVESTMENTS:" />
                <Flex>
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                </Flex>
                <Flex>
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                </Flex>
                <TitleBar title="FUNDS:" />
                <Flex>
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                    <LinkCard text="Is simply dummy text of the printing and typesetting industry. " />
                </Flex>
            </Container>
                <div className="banner">
                    <img alt="logo" src={logoRound} />
                </div>
        </Div>
    );
}

export default Portfolio;