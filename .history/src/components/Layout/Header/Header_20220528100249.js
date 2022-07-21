import React from 'react';
import logo from '../../../assets/images/Logo.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header className={cx('header')}>
            <div className={cx('header')}>
                
                <Button>All Project</Button>
            </div>
        </header>
    );
}

export default Header;
