import React from 'react';
import PropTypes from "prop-types";
import {Div, LogoContainer, Text} from "./styles";

function SimpleCard(props) {

    const { text, image } = props;

    return (
        <Div>
            <LogoContainer>
                <div><img src={image} /></div>
            </LogoContainer>
            <Text>{text}</Text>
        </Div>
    );
}

SimpleCard.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
}

SimpleCard.defaultProps = {
    text: 'texto',
    image: 'https://via.placeholder.com/150x50',
}

export default SimpleCard;