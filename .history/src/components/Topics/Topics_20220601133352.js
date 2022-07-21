import React from 'react';
import classNames from 'classnames/bind';

import styles from './Topics.module.scss';
import { topics, categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';

const cx = classNames.bind(styles);

function Topics({ active }) {
    return (
        <div className={cx('topics')}>
            {categoryList.map((item) => (
                <div></div>
            ))}
        </div>
    );
}

export default Topics;
