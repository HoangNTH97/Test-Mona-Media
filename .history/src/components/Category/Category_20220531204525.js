import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import Button from '../Button/Button';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category(props) {
    const [active, setActive] = useState(1);

    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button
                    {item.id === active ? {active} : 0}
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
