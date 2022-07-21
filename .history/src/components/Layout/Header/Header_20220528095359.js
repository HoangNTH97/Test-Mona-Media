import React from 'react';
import logo from '../../../assets/images/Logo.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header className=''>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;
