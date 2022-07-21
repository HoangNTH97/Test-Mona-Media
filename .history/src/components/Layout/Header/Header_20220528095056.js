import React from 'react';
import logo from '../../../assets/images/Logo.png';

Header.propTypes = {};

function Header(props) {
    return (
        <div>
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Header;
