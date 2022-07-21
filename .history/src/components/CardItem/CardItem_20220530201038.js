import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';
import { TextIcon } from '../icons/icons';

const cx = classNames.bind(styles);

function CardItem({ cardIcon, cardTitle, cardDesc }) {
    return (
        <div className={cx('card-item')}>
            <div className={cx('card-icon')}>{cardIcon}</div>
            <div className={cx('card-content')}>
                <h2 className={cx('card-title')}>Article and Blog</h2>
                <p className={cx('card-desc')}>Write your dream SEO article short time.</p>
            </div>
        </div>
    );
}

export default CardItem;
