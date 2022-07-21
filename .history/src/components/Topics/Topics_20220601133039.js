import React from 'react';
import classNames from 'classnames/bind';

import styles from './Topics.module.scss';
import { categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';

const cx = classNames.bind(styles);

function Topics({ active }) {
    return (
        <div className={cx('topics')}>
            {categoryList.map(
                (item) =>
                    item.id === active && (
                        <CardItem
                            color={item.color}
                            className={cx('topics-item')}
                            key={item.data.idData}
                            icon={item.data.icon}
                            title={item.data.title}
                            desc={item.data.desc}
                        />
                    )
            )}
        </div>
    );
}

export default Topics;
