import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import Button from '../Button/Button';
import { categoryList } from '../../data/data';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button active key={item.id} getApp>
                    {item.title}
                </Button>
            ))}
        </div>
    );
}

export default Category;
