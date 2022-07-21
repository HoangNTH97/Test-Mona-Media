import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ className }) {
    const [idActive, setIdActive] = useState(1);

    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button
                    className={className}
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
