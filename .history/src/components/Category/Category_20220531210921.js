import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    const [active, setActive] = useState(1);

    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button
                    className={active === item.id ? 'active' : ''}
                    key={item.id}
                    getApp
                    onClick={() => {
                        setActive(item.id);
                    }}
                >
                    {item.title}
                </Button>
            ))}
        </div>
    );
}

export default Category;
