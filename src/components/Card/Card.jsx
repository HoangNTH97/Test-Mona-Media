import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import unCheckIcon from '../../assets/icons/unCheck.svg';
import checkIcon from '../../assets/icons/check.svg';
import arrowdownIcon from '../../assets/icons/arrowdown.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import nextIcon from '../../assets/icons/next.svg';

import styles from './Card.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

Card.propTypes = {};

function Card(props) {
    return (
        <div className={cx('card-item')}>
            <div className={cx('card-header')}>
                <div className={cx('option')}>
                    <div className={cx('uncheck')}>
                        <img src={unCheckIcon} alt="" />
                        <h4>One way / Round-trip</h4>
                    </div>
                    <div className={cx('check')}>
                        <img src={checkIcon} alt="" />
                        <h4>Multi-city</h4>
                    </div>
                </div>
                <div className={cx('person')}>
                    <span>02</span> Adult, <span>01</span> children{' '}
                    <div className={cx('more')}>
                        <img src={arrowdownIcon} alt="" />
                    </div>
                </div>
                <div className={cx('type')}>
                    Business Class{' '}
                    <div className={cx('more')}>
                        <img src={arrowdownIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={cx('departure')}>
                <div className={cx('departure-container')}>
                    <div className={cx('startplace')}>
                        <h4>From</h4>
                        <h2>Da Nang</h2>
                        <p>Quang Nam, Viet Nam</p>
                    </div>
                    <div className={cx('endplace')}>
                        <h4>To</h4>
                        <h2>Ho Chi Minh</h2>
                        <p>Viet Nam</p>
                    </div>
                </div>
                <div className={cx('time')}>
                    <div className={cx('departure-time')}>
                        <h4>Departure</h4>
                        <span>
                            Fri, 22 Mar, 2022
                            <img src={calendarIcon} alt="" />
                        </span>
                        <div className={cx('departure-swap')}>
                            <h5 className={cx('prev')}>Prev</h5>
                            <h5 className={cx('next')}>Next</h5>
                        </div>
                    </div>
                    <div className={cx('return-time')}>
                        <h4>Return</h4>
                        <span>
                            Fri, 22 Mar, 2022
                            <img src={calendarIcon} alt="" />
                        </span>
                        <div className={cx('return-swap')}>
                            <h5 className={cx('prev')}>Prev</h5>
                            <h5 className={cx('next')}>Next</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('card-btn')}>
                <Button to={'/list'} className={cx('btn')}>
                    <p>Search Flights</p>
                    <img src={nextIcon} alt="" />
                </Button>
            </div>
        </div>
    );
}

export default Card;
