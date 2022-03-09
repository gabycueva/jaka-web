import React from "react";
import { Container, Div, Flex, Header, Flex2 } from "./styles";
import { Link } from "react-router-dom";
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
          <Link to='/portfolio-detail/credilikeme'>
          <LinkCard
            image={credilikeme}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/kobra'>
          <LinkCard
            image={kobra}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/guardianes'>
          <LinkCard
            image={guardianes}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
        </Flex>
        <TitleBar title="INVESTMENTS:" />
        <Flex>
        <Link to='/portfolio-detail/zenda'>
          <LinkCard
            bgColor="#dadada"
            image={zenda}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/trebel'>
          <LinkCard
            image={trebel}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/sixtant'>
          <LinkCard
            bgColor="#dadada"
            image={sixtant}
            text="Is simply dummy text of the printing and typesetting industry."
          />
          </Link>
        </Flex>
        <Flex>
        <Link to='/portfolio-detail/finerio'>
          <LinkCard
            image={finerio}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/fondeadora'>
          <LinkCard
            image={fondeadora}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/wowdao'>
          <LinkCard
            image={wowdao}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
        </Flex>
        <div className="flex1">
        <Link to='/portfolio-detail/prescrypto'>
          <LinkCard
            width="33%"
            image={prescrypto}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
        </div>
        <TitleBar title="FUNDS:" />
        <Flex2>
        <Link to='/portfolio-detail/fivehundred'>
          <LinkCard
            image={fivehundred}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
          <Link to='/portfolio-detail/sixtant'>
          <LinkCard
            bgColor="#dadada"
            image={sixtant}
            text="Is simply dummy text of the printing and typesetting industry. "
          />
          </Link>
        </Flex2>
      </Container>
      <div className="banner">
        <img alt="logo" src={logoRound} />
      </div>
    </Div>
  );
}

export default Portfolio;
