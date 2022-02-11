import React from 'react';
import {BigTitle, ContactInfo, Div, Flex, Line, Logo, Subtitle} from "./styles";
import jakaBlack from "../../images/jaka-black.svg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
    return (
            <Div>
                <BigTitle>Contact</BigTitle>
                <Subtitle>flow in business</Subtitle>
                <Flex>
                    <Logo>
                        <img src={jakaBlack} />
                    </Logo>
                    <Line />
                    <ContactInfo>
                        <span>contact@jaka.com</span>
                        <span><WhatsAppIcon /> +52 1 685 432 2053</span>
                    </ContactInfo>
                </Flex>
            </Div>
    );
}

export default Contact;