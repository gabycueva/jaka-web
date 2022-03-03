import React from "react";
import { Container, Div, Flex, Header } from "./styles";
import TitleBar from "../../components/TitleBar";
import LinkCard from "../../components/LinkCard";
import jakaBlack from "../../images/jaka-black.svg";
import logoRound from "../../images/gifs/Portfolio_LearningMachine.gif";
import credilikeme from "../../images/logos_portfolio/credilikeme.svg";
import kobra from "../../images/logos_portfolio/kobra.svg";
import guardianes from "../../images/logos_portfolio/JakaLogos_guardianes.png";
import zenda from "../../images/logos_portfolio/JakaLogos_zndl.png";
import trebel from "../../images/logos_portfolio/JakaLogos_trebel.png";
import sixtant from "../../images/logos_portfolio/JakaLogos_sixtant.png";
import finerio from "../../images/logos_portfolio/JakaLogos_FinerioConnect.png";
import fondeadora from "../../images/logos_portfolio/JakaLogos_fondeadora.png";
import wowdao from "../../images/logos_portfolio/JakaLogos_wowdao.png";
import prescrypto from "../../images/logos_portfolio/JakaLogos_prescrypto.png";
import fivehundred from "../../images/logos_portfolio/JakaLogos_500.png";

function Portfolio() {
  return (
    <Div>
      <Header>
        <span>
          <img alt="logo" src={jakaBlack} />
        </span>
        <span>PORTFOLIO</span>
      </Header>
      <Container>
        <TitleBar title="ENTREPRENEUR:" />
        <Flex>
          <LinkCard
            image={credilikeme}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            image={kobra}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            image={guardianes}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
        </Flex>
        <TitleBar title="INVESTMENTS:" />
        <Flex>
          <LinkCard
            bgColor="#dadada"
            image={zenda}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            image={trebel}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            bgColor="#dadada"
            image={sixtant}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
        </Flex>
        <Flex>
          <LinkCard
            image={finerio}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            image={fondeadora}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            image={wowdao}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
        </Flex>
        <div>
        <LinkCard
            width="33%"
            image={prescrypto}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
        </div>
        <TitleBar title="FUNDS:" />
        <Flex>
          <LinkCard
            width="33%"
            image={fivehundred}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          <LinkCard
            bgColor="#dadada"
            width="33%"
            image={sixtant}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
        </Flex>
      </Container>
      <div className="banner">
        <img alt="logo" src={logoRound} />
      </div>
    </Div>
  );
}

export default Portfolio;
