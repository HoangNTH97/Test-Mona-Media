import React from 'react';
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
        title: 'All',
    },
    {
        id: 3,
        title: 'All',
    },
    {
        id: 4,
        title: 'All',
    },
    {
        id: 5,
        title: 'All',
    },
    {
        id: 6,
        title: 'All',
    },
    {
        id: 1,
        title: 'All',
    },
];

function Category() {
    return (
        <div className={cx('category-list')}>
            <Button getApp>All</Button>
            <Button getApp>Article and Blog</Button>
            <Button getApp>Social Media</Button>
            <Button getApp>Writing</Button>
            <Button getApp>Keyword Research</Button>
            <Button getApp>Ecommerce</Button>
            <Button getApp>Website</Button>
        </div>
    );
}

export default Category;
