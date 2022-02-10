import React from 'react';
import PropTypes from "prop-types";
import {Container} from "./styles";

function Banner(props) {

    const { content } = props;

    return (
        <>
            <Container>{content}</Container>
        </>
    );
}

Banner.propTypes = {
    content: PropTypes.any,
}

export default Banner;