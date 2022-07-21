import React from 'react';
import logo from '../../../assets/images/Logo.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header className={cx('header')}>
            <div className={cx('header-logo')}>
                <img src={logo} alt="logo" />
            </div>
            <div className={cx('header-main')}>
                <div></div>
            </div>
        </header>
    );
}

export default Header;
