import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem() {
    return <div className='card-item'>
      <div className={cx('card-icon')}></div>
      <div className={cx('card-content')}>
        <h2 className={cx('card-header')}></h2>
        <p className=''></p>
      </div>
    </div>;
}

export default CardItem;
