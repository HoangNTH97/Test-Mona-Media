import classNames from 'classnames/bind';
import React from 'react';
import { categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './Topics.module.scss';

const cx = classNames.bind(styles);

function Topics({ active }) {
    return (
        <div className={cx('topics')}>
            <div className={cx('topics-header')}>
                {categoryList.map(
                    (item) =>
                        item.id === active && <h2 className={cx('topics-heading')}>{item.label}</h2>
                )}
            </div>
            <div className={cx('topics-list')}>
                {categoryList.map(
                    (item) =>
                        item.id === active &&
                        item.data.map((list) => (
                            <CardItem
                                key={item.id}
                                color={list.color}
                                className={cx('topics-item')}
                                icon={list.icon}
                                title={list.title}
                                desc={list.desc}
                            />
                        ))
                )}
            </div>
        </div>
    );
}

export default Topics;
