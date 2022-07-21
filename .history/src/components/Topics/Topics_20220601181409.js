import classNames from 'classnames/bind';
import React from 'react';
import { categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './Topics.module.scss';

const cx = classNames.bind(styles);

function Topics({ active }) {
    return (
        <div className={cx('topics-list')}>
            {categoryList.map(
                (item) =>
                    item.id === active &&
                    item.data.map((list) => (
                        <CardItem
                            color={list.color}
                            className={cx('topics-item')}
                            key={list.id}
                            icon={list.icon}
                            title={list.title}
                            desc={list.desc}
                        />
                    ))
            )}
        </div>
    );
}

export default Topics;
