import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem() {
    return <div className='card-item'>
      <div className={cx('card')}></div>
    </div>;
}

export default CardItem;
