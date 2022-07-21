import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    const [active, setActive] = useState();
    console.log(categoryList);
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
