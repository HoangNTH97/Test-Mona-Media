import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ onReceiveData, active }) {
    const [idActive, setIdActive] = useState(1);
    console.log(active);
    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button
                    className={
                        (item.id === idActive ? 'active' : '') ||
                        (item.id === active ? 'active' : '')
                    }
                    key={item.id}
                    getApp
                    onClick={() => {
                        setIdActive(item.id);
                        onReceiveData(item.id);
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </div>
    );
}

export default Category;
