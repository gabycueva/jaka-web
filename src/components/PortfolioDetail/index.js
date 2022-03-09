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

const credilikemeInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "credilike.me",
    link: "https://credilike.me/",
  },
];

const kobraInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "kobra.red",
    link: "https://kobra.red/",
  },
];

const guardianesInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const zendaInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const trebelInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const sixtantInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const finerioInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const fondeadoraInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const wowdaoInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const prescryptoInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

const fivehundredInfo = [
  {
    text: "La visión es reflejar una marca que da esperanza y armonía, que resulta en libertad de crear, jugar y descubrir. Donde se sienta la energía de un Toro y la soltura de un improvisador haciendo música dentro de un todo que le contiene",
    url: "url",
    link: "https://www.google.com/",
  },
];

function PortfolioDetail() {
  const { id } = useParams();
  
  const getInfo = (id) => {
    switch (id) {
      case "credilikeme":
        return credilikemeInfo;
      case "kobra":
        return kobraInfo;
      case "guardianes":
        return guardianesInfo;
      case "zenda":
        return zendaInfo;
      case "trebel":
        return trebelInfo;
      case "sixtant":
        return sixtantInfo;
      case "finerio":
        return finerioInfo;
      case "fondeadora":
        return fondeadoraInfo;
      case "wowdao":
        return wowdaoInfo;
      case "prescrypto":
        return prescryptoInfo;
      case "fivehundred":
        return fivehundredInfo;
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
      {getInfo(id).map((item) => (
        <>
          <Logo>
            <img src={getLogo(id)} alt="logo" />
          </Logo>
          <Divider />
          <Text>{item.text}</Text>
          <Url><a href={item.link} target="blank">{item.url}</a></Url>
        </>
      ))}
    </Div>
  );
}

// PortfolioDetail.propTypes

export default PortfolioDetail;
