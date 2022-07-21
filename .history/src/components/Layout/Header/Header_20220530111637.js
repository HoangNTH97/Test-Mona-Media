import React from 'react';
import classNames from 'classnames/bind';

import logo from '../../../assets/images/Logo.png';
import avatar from '../../../assets/images/Avatar.jpg';
import styles from './Header.module.scss';
import Button from '../../Button/Button';
import { InboxIcon, ProjectIcon } from '../../icons/icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-logo')}>
                <img src={logo} alt="logo" />
                <span> TexoAI</span>
            </div>
            <div className={cx('header-main')}>
                <div className={cx('header-bar')}>
                    <Button leftIcon={<projectIcon />} text>
                        All Project
                    </Button>
                    <Button primary>Learn</Button>
                </div>
                <div className={cx('action')}>
                    <Button>Upgrade Plan</Button>
                    <div className={cx('header-info')}>
                        <span className={cx('header-credit')}>20/ left this week</span>
                    </div>
                    <div className={cx('header-name')}>
                        <span>Mahfuzul Islam Nabil</span>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
