import React from 'react';
import classNames from 'classnames/bind';

import styles from './Topics.module.scss';
import { topics } from '../../data/data';
import CardItem from '../CardItem/CardItem';

const cx = classNames.bind(styles);

function Topics() {
    return (
        <div className={cx('topics')}>
            {topics.map((item) => (
                <CardItem
                    className={item.color}
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
}

export default Topics;
