import React from 'react';
import logo from '../../../assets/images/Logo.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header className={cx('header')}>
            <div className={cx('logo')}>
                <img src={logo} alt="logo" />
            </div>
            <bu
        </header>
    );
}

export default Header;
