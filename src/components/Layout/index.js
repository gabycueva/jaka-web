import React from 'react';
import Navbar from "./privateComponents/Navbar";
import Footer from "./privateComponents/Footer";
import PropTypes from "prop-types";

function Layout(props) {

    const { children } = props;

    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;