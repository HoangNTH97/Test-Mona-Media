import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem() {
    return (
        <div className="card-item">
            <div className={cx('card-icon')}>
              <TextIcon
            </div>
            <div className={cx('card-content')}>
                <h2 className={cx('card-header')}>Article and Blog</h2>
                <p className={cx('card-desc')}>Write your dream SEO article short time.</p>
            </div>
        </div>
    );
}

export default CardItem;
