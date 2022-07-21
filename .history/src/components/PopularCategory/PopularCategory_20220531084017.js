import React from 'react';
import classNames from 'classnames/bind';

import styles from './PopularCategory.module.scss';
import CardItem from '../CardItem/CardItem';
import { ResearchIcon, TextIcon, VectorIcon } from '../icons/icons';
import { popularCategory } from '../../data/data';

const cx = classNames.bind(styles);

function PopularCategory() {
    return (
        <div className={cx('popular-category')}>
            <h2 className={cx('header-category')}>Popular Category</h2>
            <div className={cx('category-list')}>
                {popularCategory.map((item) => (
                    <CardItem
                        className={item.color}
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
