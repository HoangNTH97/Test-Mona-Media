import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import line3 from '../../assets/icons/line3.svg';
import styles from './FareInfo.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

FareInfo.propTypes = {};

function FareInfo({
  logoIcon,
  name,
  flightNumber,
  gclass,
  noRefund,
  priceNomal,
  startPoint,
  endPoint,
}) {
  const refund = () => {
    if (noRefund === true) {
      return 'Non';
    } else {
      return 'Yes';
    }
  };

  const locationStart = () => {
    if (startPoint === 'SGN') {
      return `Ho Chi Minh City`;
    } else if (startPoint === 'DAD') {
      return `Da nang `;
    } else if (startPoint === 'HPH') {
      return `Hai Phong `;
    }
  };

  const locationEnd = () => {
    if (endPoint === 'SGN') {
      return `Ho Chi Minh City `;
    } else if (endPoint === 'DAD') {
      return `Da nang `;
    } else if (endPoint === 'HPH') {
      return `Hai Phong `;
    }
  };

  return (
    <div className={cx('fare-info-content-item')}>
      <div className={cx('fare-info-content-conditions')}>
        <h4 className={cx('condition')}>Conditions</h4>
        <div className={cx('info-airline')}>
          <Button className={cx('info-airline-icon')}>
            <img src={logoIcon} alt="" />
          </Button>
          <div className={cx('info-airline-name')}>
            <h4>{name}</h4>
            <p>
              {flightNumber} -- {gclass}
            </p>
          </div>
        </div>

        <div className={cx('info-location')}>
          <p className={cx('info-start')}>{locationStart()}</p>
          <img src={line3} alt="" />
          <p className={cx('info-end')}>{locationEnd()}</p>
        </div>
        <div className={cx('g-class')}>{gclass}</div>

        <div className={cx('refund')}>
          <p>{refund()} - Refundable</p>
        </div>
      </div>
      <div className={cx('fare-info-content-price')}>
        <h4 className={cx('price')}>Price Details</h4>
        <div className={cx('adult-basic')}>
          <p>Adult Basic (x1)</p>
          <h4>{priceNomal} vnd</h4>
        </div>
        <div className={cx('tax')}>
          <p>Tax</p>
          <h4>included</h4>
        </div>
        <div className={cx('regular')}>
          <p>Regular Total Price</p>
          <h4>{priceNomal} vnd</h4>
        </div>
        <div className={cx('save')}>
          <p>save</p>
          <h4>-4000 vnd</h4>
        </div>

        <div className={cx('pay')}>
          <p>You pay</p>
          <h4>{priceNomal - 4000} vnd</h4>
        </div>
      </div>
    </div>
  );
}

export default FareInfo;
