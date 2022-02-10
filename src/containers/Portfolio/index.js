import React from 'react';
import {Container, Div, Flex, Header} from "./styles";
import TitleBar from "../../components/TitleBar";
import LinkCard from "../../components/LinkCard";
import Banner from "../../components/Banner";


function Portfolio() {
    return (
        <Div>
            <Header><span>Logo</span><span>PORTFOLIO</span></Header>
            <Container>
                <TitleBar title="ENTREPRENEUR:" />
                <Flex>
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                </Flex>
                <TitleBar title="INVESTMENTS:" />
                <Flex>
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                </Flex>
                <Flex>
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                </Flex>
                <TitleBar title="FUNDS:" />
                <Flex>
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                </Flex>
            </Container>
            <Banner
                content={<div>Contenido</div>}
            />
        </Div>
    );
}

export default Portfolio;