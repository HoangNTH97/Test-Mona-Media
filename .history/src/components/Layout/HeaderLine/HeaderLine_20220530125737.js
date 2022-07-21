import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderLine.module.scss';

const cx = classNames.bind(styles);

function HeaderLine() {
    return (
        <div className={cx('header-line')}>
            <div className={cx('title')}>
              
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default HeaderLine;
