import React from 'react';
import classNames from 'classnames/bind';

import vnIcon from '../../../assets/icons/vietnam.svg';
import usIcon from '../../../assets/icons/unitedStates.svg';
import styles from './Header.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header({ className, btnList, navBarList }) {
  const classes = cx('header', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className={cx('header-item')}>
        <div className={cx('logo')}>
          <h2 className={cx('text')}>Baycungban</h2>
          <img src={vnIcon} alt="" />
          <img src={usIcon} alt="" />
        </div>

        <div className={cx('navbar', navBarList)}>
          <a href="">Promotion</a>
          <a href="">Flight Schedule</a>
          <a href="">About us</a>
          <a href="">Payment Guide</a>
        </div>

        <div className={cx('button')}>
          <Button className={cx('header-btn', btnList)}>Booking now</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
