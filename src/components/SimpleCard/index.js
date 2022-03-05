import React from 'react';
import PropTypes from "prop-types";
import {Div, LogoContainer, Text} from "./styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

function SimpleCard(props) {

    const { text, image, width, position, instagram, youtube, web, srcIg, srcYoutube, srcWeb } = props;

    return (
        <Div width={width}>
            <LogoContainer image={image} position={position} />
            <Text>{text}</Text>
            <Text>
                {instagram && (
                    <>
                        <a href={srcIg} target="blank"><InstagramIcon /></a>
                    </>
                )}
                {youtube && (
                    <>
                    <a href={srcYoutube} target="blank"><YouTubeIcon /></a>
                </>
                )}
                {web && (
                    <>
                    <a href={srcWeb} target="blank"><LanguageIcon /></a>
                </>
                )}
            </Text>
        </Div>
    );
}

SimpleCard.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    instagram: PropTypes.bool,
    youtube: PropTypes.bool,
    web: PropTypes.bool,
    srcIg: PropTypes.string,
    srcYoutube: PropTypes.string,
    srcWeb: PropTypes.string,
}

SimpleCard.defaultProps = {
    text: 'texto',
    image: 'https://via.placeholder.com/150x50',
    instagram: false,
    youtube: false,
    web: false,
}

export default SimpleCard;