import React from 'react';
import classNames from 'classnames/bind';

import styles from './PopularCategory.module.scss';
import CardItem from '../CardItem/CardItem';
import { TextIcon } from '../icons/icons';

const cx = classNames.bind(styles);

const popularCategory = [
    {
        id: 1,
        title: 'Article and Blog',
        desc: 'Write your dream SEO article short time.',
        icon: <TextIcon />,
    },
];

function PopularCategory() {
    return (
        <div className={cx('popular-category')}>
            {popularCategory.map((item) => (
                <CardItem />
            ))}
        </div>
    );
}

export default PopularCategory;
