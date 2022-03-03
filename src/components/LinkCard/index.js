import React from 'react';
import PropTypes from "prop-types";
import {Div, LogoContainer, Text} from "./styles";

function LinkCard(props) {

    const { text, image, width, bgColor } = props;

    return (
        <Div width={width}>
            <LogoContainer bgColor={bgColor}>
                <div><img alt="card" src={image} /></div>
            </LogoContainer>
            <Text>{text}</Text>
        </Div>
    );
}

LinkCard.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
}

LinkCard.defaultProps = {
    text: 'texto',
    image: 'https://via.placeholder.com/150x50',
}

export default LinkCard;