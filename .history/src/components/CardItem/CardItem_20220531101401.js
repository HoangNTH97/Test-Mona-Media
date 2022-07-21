import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem({ icon, title, desc, className, color }) {
    const classes = cx('card-item', {
        [className]: className,
    });

    return (
        <div className={cx(classes)}>
            <div className={cx('card-icon')} style={{ backgroundColor: {} }}>
                {icon}
            </div>
            <div className={cx('card-content')}>
                <h2 className={cx('card-title')}>{title}</h2>
                <p className={cx('card-desc')}>{desc}</p>
            </div>
        </div>
    );
}

export default CardItem;
