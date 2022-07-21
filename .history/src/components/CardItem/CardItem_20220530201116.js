import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem({ cardIcon, cardTitle, cardDesc }) {
    return (
        <div className={cx('card-item')}>
            <div className={cx('card-icon')}>{cardIcon}</div>
            <div className={cx('card-content')}>
                <h2 className={cx('card-title')}>{cardTitle}</h2>
                <p className={cx('card-desc')}>{cardDesc}</p>
            </div>
        </div>
    );
}

export default CardItem;
