import React from 'react';
import {
    BigTitle,
    BioDescription,
    Columns,
    Details,
    Div,
    Flex, Information,
    Line, Logo, MaxTitle,
    Picture,
    Quote,
    Section,
    Title
} from "./styles";
import BioImage from "../../images/bio-image.png";
import logo from "../../images/logo-image.svg";
import doodles from "../../images/doodles.svg";

function Bio() {
    return (
        <Div>
            <Flex>
                <Picture>
                    <img alt="bio" src={BioImage} />
                </Picture>
                <BioDescription>
                    <Title>Armando Kuroda</Title>
                    <Details>
                        Fintech-Crypto Entrepreneur,
                        Artist, and Investor.
                    </Details>
                    <Line />
                    <Quote>
                        <span>
                            “To be present and empowered so that i can help others grow and create more trust.
                        </span>
                        <span>
                            I want  to remove barriers for latam people so that can access opportunities to develop themselves.”
                        </span>
                    </Quote>
                </BioDescription>
            </Flex>
            <Section>
                <BigTitle>Leadership</BigTitle>
                <Columns>
                    <div>
                        <ul>
                            <li>To create trust </li>
                            <li>Financial education </li>
                            <li>Improv </li>
                            <li>Gratitude </li>
                            <li>Recognition </li>
                            <li>Biohacking </li>
                        </ul>
                        <ul className="no-bullets">
                            <li>DEVCON 5 JAPAN </li>
                            <li>ETHDENVER </li>
                            <li>ETH PARIS DAOS </li>
                        </ul>
                        <ul className="no-bullets">
                            <li>* Blockchain </li>
                            <li>Early Crypto adopter 2013 </li>
                            <div className="doodles">
                                <img alt="doodle" src={doodles} width={150} />
                            </div>
                        </ul>
                    </div>
                    <div>
                        <span>+ 15 YEARS DEVELOPING TECH PRODUCTS</span>
                        <ul>
                            <li>UX Designer </li>
                            <li>Gamification </li>
                            <li>Financial regulation </li>
                            <li>Financial engineering </li>
                            <li>System architect </li>
                        </ul>
                        <ul className="no-bullets">
                            <li>Public speaker</li>
                            <li>Active crypto community member</li>
                        </ul>
                        <span>METHODOLOGIES</span>
                        <ul>
                            <li>Traction </li>
                            <li>Profit first </li>
                            <li>Flow in business </li>
                            <li>scrum </li>
                            <li>Octalysis </li>
                        </ul>
                    </div>
                </Columns>
            </Section>
            <MaxTitle>THE WAR OF ART</MaxTitle>
            <Information>
                <span>Since 2011 Armando has been creating and investing in Fintech/crypto companies.</span>
                <span>
                    Partner and co-investor with Corporate groups: Kaluz, Credito Real.
                    Colaborated in projects for Banco VePorMas, Citibanamex, BBVA Bancomer, Coppel, Scotiabank.
                </span>
                <span>Early crypto adopter – with a network accross LATAM, Armando is an active builder and advisor to companies that are building the web3 and DeFi.</span>
                <span>Board member and investor at https://Sixtant.io a Market Making and Prop trading firm that traded +5 B USD in September 2021 across BITSO, DY/DX, and FTX.</span>
                <span>
                    Armando has received numerous industry awards including:
                    <div>Gamification World Conference award Barcelona 2015. </div>
                    <div>Open Talent BBVA 2016. </div>
                    <div>Google Fintech program in Brazil 2017. </div>
                </span>
                <span>
                    Armando has been a speaker at conferences Money 2020, Finnosummit, BitConf, Creavolution, and Ripple Labs.
                </span>
                <span>Currently building web3 and play-to-earn ventures.</span>
            </Information>
            <Logo>
                <img alt="logo" src={logo} />
            </Logo>
        </Div>
    );
}

export default Bio;