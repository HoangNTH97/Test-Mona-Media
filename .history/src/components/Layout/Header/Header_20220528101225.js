import React from 'react';
import classNames from 'classnames/bind';

import logo from '../../../assets/images/Logo.png';
import avatar from './Avatar.jps'
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
                <div className={cx('header-bar')}>
                    <Button>All Project</Button>
                    <Button>Learn</Button>
                </div>
                <div className={cx('action')}>
                    <Button>Upgrade Plan</Button>
                    <div className={cx('header-info')}>
                        <span className={cx('header-credit')}>20/ left this week</span>
                    </div>
                    <div className={cx('header-name')}>
                        <span>Mahfuzul Islam Nabil</span>
                        <img src= alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
