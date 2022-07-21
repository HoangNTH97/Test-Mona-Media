import React, { forwardRef, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const categoryList = [
    {
        id: 1,
        title: 'All',
    },
    {
        id: 2,
        title: 'Article and Blog',
    },
    {
        id: 3,
        title: 'Social Media',
    },
    {
        id: 4,
        title: 'Writing',
    },
    {
        id: 5,
        title: 'Keyword Research',
    },
    {
        id: 6,
        title: 'Ecommerce',
    },
    {
        id: 7,
        title: 'Website',
    },
];

const Category = forwardRef((ref) => {
    const [category, setCategory] = useState([]);

    const catRef = useRef();

    const handleClick = () => {
        console.log(catRef);
    };

    return (
        <div className={cx('category-list')}>
            {categoryList.map((item) => (
                <Button ref={ref} active key={item.id} getApp onClick={handleClick}>
                    {item.title}
                </Button>
            ))}
        </div>
    );
});

export default Category;
