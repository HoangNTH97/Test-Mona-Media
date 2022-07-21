import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import arrowdownIcon from '../../assets/icons/arrowdown.svg';
import Button from '../Button/Button';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

Filter.propTypes = {};

function Filter(props) {
    return (
        <div className={cx('ticket-filter')}>
            <h4>Filter</h4>
            <Button className={cx('filter-btn')}>
                <p>Transit</p>
                <img src={arrowdownIcon} alt="" />
            </Button>
            <Button className={cx('filter-btn')}>
                <p>Time</p>
                <img src={arrowdownIcon} alt="" />
            </Button>
            <Button className={cx('filter-btn')}>
                <p>Airline</p>
                <img src={arrowdownIcon} alt="" />
            </Button>
            <Button className={cx('filter-btn')}>
                <p>Low Price</p>
                <img src={arrowdownIcon} alt="" />
            </Button>
        </div>
    );
}

export default Filter;
