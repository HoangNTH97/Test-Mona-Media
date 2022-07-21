import React from 'react';
import classNames from 'classnames/bind';

import logo from '../../../assets/images/Logo.png';
import avatar from '../../../assets/images/Avatar.jpg';
import styles from './Header.module.scss';
import Button from '../../Button/Button';
import { Group3, ProjectIcon, TutorialsIcon } from '../../icons/icons';

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
                    <Button text leftIcon={<ProjectIcon />}>
                        All Project
                    </Button>
                    <Button text leftIcon={<TutorialsIcon />}>
                        Learn
                    </Button>
                </div>
                <div className={cx('action')}>
                    <Button text secondary>
                        Upgrade Plan
                    </Button>
                    <Button leftIcon={<Group3 />} className={cx('header-info')}>
                        <span className={cx('header-credit')}>20/ left this week</span>
                    </Button>
                    <Button  className={cx('header-name')}>Mahfuzul Islam Nabil</Button>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </header>
    );
}

export default Header;
