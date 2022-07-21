import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import swapIcon from '../../assets/icons/swap.svg';
import searchIcon from '../../assets/icons/search.svg';
import styles from './SearchList.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

SearchList.propTypes = {};

function SearchList(props) {
    return (
        <div className={cx('search-list')}>
            <div className={cx('derpatute')}>
                <div className={cx('start-point')}>
                    <h4 className={cx('start')}>Da Nang (DAD)</h4>
                    <p className={cx('date')}>Fri, 22 Mar, 2022</p>
                </div>
                <img className={cx('swap-point')} src={swapIcon} alt="" />
                <div className={cx('end-point')}>
                    <h4 className={cx('start')}>Ho Chi Minh (SGN)</h4>
                    <p className={cx('date')}>Fri, 22 Mar, 2022</p>
                </div>
            </div>

            <div className={cx('person')}>
                <div className={cx('person-inf')}>Round-trip</div>
                <div className={cx('person-inf')}>
                    <span>02</span> Adult, <span>01</span> children
                </div>
                <div className={cx('person-inf')}>Business Class</div>
            </div>
            <div className={cx('search-button')}>
                <Button className={cx('btn')}>
                    <p>Change Flights</p>
                    <img src={searchIcon} alt="" />
                </Button>
            </div>
        </div>
    );
}

export default SearchList;
