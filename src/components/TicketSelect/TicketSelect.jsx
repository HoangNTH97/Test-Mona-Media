import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import lineIcon from '../../assets/icons/line.svg';
import vnIcon from '../../assets/icons/vnIcon.svg';
import styles from './TicketSelect.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

TicketSelect.propTypes = {};

function TicketSelect(props) {
    return (
        <div className={cx('select')}>
            <h4 className={cx('header')}>YOUR FLIGHTS</h4>
            <div className={cx('select-item')}>
                <div className={cx('turn')}>
                    <Button className={cx('turn-number')}>
                        <p>01</p>
                    </Button>
                    <div className={cx('infomation')}>
                        <p className={cx('time')}>Fri, 11 Feb, 2022</p>
                        <h4 className={cx('distance')}>Da Nang - Ho Chi Minh</h4>
                    </div>
                </div>

                <div className={cx('airline')}>
                    <Button className={cx('airline-icon')}>
                        <img src={vnIcon} alt="" />
                    </Button>
                    <div className={cx('airline-name')}>
                        <h4>Bamboo Airways</h4>
                        <a href="">Details</a>
                    </div>
                </div>

                <div className={cx('time-point')}>
                    <div className={cx('start-time')}>
                        <h4>21:40</h4>
                        <Button className={cx('start-point')}>DAD</Button>
                    </div>
                    <div className={cx('flight-time')}>
                        <p>1h 30m</p>
                        <img className={cx('line')} src={lineIcon} alt="" />
                        <h5>Direct</h5>
                    </div>
                    <div className={cx('end-time')}>
                        <h4>23:10</h4>
                        <Button className={cx('end-point')}>DAD</Button>
                    </div>
                </div>

                <div className={cx('select-btn')}>
                    <Button className={cx('btn-item')}>Change departure flight</Button>
                </div>

                <div className={cx('return')}>
                    <Button className={cx('return-number')}>
                        <p>02</p>
                    </Button>
                    <div className={cx('infomation')}>
                        <p className={cx('time')}>Sun, 13 Feb, 2022</p>
                        <h4 className={cx('distance')}>Ho Chi Minh - Da Nang</h4>
                    </div>
                </div>
            </div>

            <div className={cx('subtotal')}>
                <p>Subtotal</p>
                <h4>1,322,000 vnd</h4>
            </div>
        </div>
    );
}

export default TicketSelect;
