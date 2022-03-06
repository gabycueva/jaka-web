import React from "react";
import { Div, Logo, Divider, Text, Url } from "./styles";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
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

function PortfolioDetail() {
  const { id } = useParams();
  console.log("id", id);

  const credilikemeInfo = [
    {
      text: "texto",
      url: "url",
    },
  ];

  const getInfo = (id) => {
    switch (id) {
      case "credilikeme":
        return credilikemeInfo;
      case "kobra":
        return credilikemeInfo;
      case "guardianes":
        return credilikemeInfo;
      case "zenda":
        return credilikemeInfo;
      case "trebel":
        return credilikemeInfo;
      case "sixtant":
        return credilikemeInfo;
      case "finerio":
        return credilikemeInfo;
      case "fondeadora":
        return credilikemeInfo;
      case "wowdao":
        return credilikemeInfo;
      case "prescrypto":
        return credilikemeInfo;
      case "fivehundred":
        return credilikemeInfo;
      default:
        return credilikemeInfo;
    }
  };

  const getLogo = (id) => {
    switch (id) {
      case "credilikeme":
        return credilikeme;
      case "kobra":
        return kobra;
      case "guardianes":
        return guardianes;
      case "zenda":
        return zenda;
      case "trebel":
        return trebel;
      case "sixtant":
        return sixtant;
      case "finerio":
        return finerio;
      case "fondeadora":
        return fondeadora;
      case "wowdao":
        return wowdao;
      case "prescrypto":
        return prescrypto;
      case "fivehundred":
        return fivehundred;
      default:
        return credilikeme;
    }
  };

  return (
    <Div>
      {getInfo(id).map(item => (
          <>
          <Logo><img src={getLogo(id)} alt="logo" /></Logo>
          <Divider />
          <Text>{item.text}</Text>
          <Url>{item.url}</Url>
          </>
      ))}
    </Div>
  );
}

// PortfolioDetail.propTypes

export default PortfolioDetail;
