import React from 'react';
import classNames from 'classnames/bind';

import partyImg from '../../../assets/images/Partypopper.png';
import styles from './HeaderLine.module.scss';

const cx = classNames.bind(styles);

function HeaderLine() {
    return (
        <div className={cx('header-line')}>
            <div className={cx('title')}>
                <img src={partyImg} alt="party" className={cx('image')} />
                <span className={cx('text')}>Mahfuzul, So, what exactly do you have in mind?</span>
            </div>
            <div className={cx('content')}>
                <span>Begin with selecting the content type from the options below.</span>
            </div>
        </div>
    );
}

export default HeaderLine;
