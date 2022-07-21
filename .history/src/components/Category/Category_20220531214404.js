import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    const [idActive, setIdActive] = useState(1);

    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button
                    primary
                    className={item.id === idActive && 'active'}
                    key={item.id}
                    getApp
                    onClick={() => {
                        setIdActive(item.id);
                    }}
                >
                    {item.title}
                </Button>
            ))}
        </div>
    );
}

export default Category;
