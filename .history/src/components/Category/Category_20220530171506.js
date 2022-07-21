import React from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    return <div className={cx('category')}>

    </div>;
}

export default Category;
