import React from 'react';
import {Bar} from "./styles";
import PropTypes from "prop-types";

function TitleBar(props) {

    const { title } = props;

    return (
        <>
            <Bar>{title}</Bar>
        </>
    );
}

TitleBar.propTypes = {
    title: PropTypes.string,
}

TitleBar.defaultProps = {
    title: 'titulo',
}

export default TitleBar;