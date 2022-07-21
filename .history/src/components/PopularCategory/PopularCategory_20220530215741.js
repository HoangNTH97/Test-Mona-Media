import React from 'react';
import classNames from 'classnames/bind';

import styles from './PopularCategory.module.scss';
import CardItem from '../CardItem/CardItem';
import { ResearchIcon, TextIcon, VectorIcon } from '../icons/icons';

const cx = classNames.bind(styles);

const popularCategory = [
    {
        id: 1,
        title: 'Article and Blog',
        desc: 'Write your dream SEO article short time.',
        icon: <TextIcon />,
        color: 'cardBlue',
    },
    {
        id: 2,
        title: 'Social Media',
        desc: 'Write compelling detailed product',
        icon: <VectorIcon />,
        color: 'cardGreen',
    },
    {
        id: 1,
        title: 'Keyword Research',
        desc: 'Pick your excet keyword for rank anything',
        icon: <ResearchIcon />,
        color: 'cardViolet',
    },
];

function PopularCategory() {
    return (
        <div className={cx('popular-category')}>
            <h2 className={cx('header-category')}>Popular Category</h2>
            <div className={cx('category-list')}>
                {popularCategory.map((item) => (
                    <CardItem
                        cardGreen
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
}

export default PopularCategory;
