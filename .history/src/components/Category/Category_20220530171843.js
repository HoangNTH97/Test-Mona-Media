import React from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('category')}>
            <div className={cx('category-list')}>
              <Button/>
            </div>
        </div>
    );
}

export default Category;
