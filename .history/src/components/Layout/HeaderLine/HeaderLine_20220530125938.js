import React from 'react';
import classNames from 'classnames/bind';

import partyImg from '../../../assets/images/Partypopper.png';
import styles from './HeaderLine.module.scss';

const cx = classNames.bind(styles);

function HeaderLine() {
    return (
        <div className={cx('header-line')}>
            <div className={cx('title')}>
                <img src={partyImg} alt="party" className=''/>
                <span>Mahfuzul, So, what exactly do you have in mind?</span>
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default HeaderLine;
