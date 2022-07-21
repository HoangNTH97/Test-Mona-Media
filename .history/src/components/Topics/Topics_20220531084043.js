import React from 'react';
import classNames from 'classnames/bind';

import styles from './Topics.module.scss';

const cx = classNames.bind(styles);

function Topics() {
    return <div className={cx('topics')}></div>;
}

export default Topics;
