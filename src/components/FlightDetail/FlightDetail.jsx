import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import line2Icon from '../../assets/icons/line2.svg';
import styles from './FlightDetail.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);
FlightDetail.propTypes = {};

function FlightDetail({
  name,
  logoIcon,
  duration,
  timeStart,
  timeEnd,
  plane,
  flightNumber,
  gclass,
  baggage,
  startPoint,
  endPoint,
  priceAdult,
  chargeAdult,
  taxAdult,
}) {
  const locationStart = () => {
    if (startPoint === 'SGN') {
      return `Ho Chi Minh City (${startPoint})`;
    } else if (startPoint === 'DAD') {
      return `Da nang (${startPoint})`;
    } else if (startPoint === 'HPH') {
      return `Hai Phong (${startPoint})`;
    }
  };

  const locationEnd = () => {
    if (endPoint === 'SGN') {
      return `Ho Chi Minh City (${endPoint})`;
    } else if (endPoint === 'DAD') {
      return `Da nang (${endPoint})`;
    } else if (endPoint === 'HPH') {
      return `Hai Phong (${endPoint})`;
    }
  };

  const airportNameStart = () => {
    if (startPoint === 'SGN') {
      return 'Tansonnhat Intl';
    } else if (startPoint === 'DAD') {
      return 'Da Nang Airport';
    } else if (startPoint === 'HPH') {
      return 'Cat Bi Airport';
    }
  };

  const airportNameEnd = () => {
    if (endPoint === 'SGN') {
      return 'Tansonnhat Intl';
    } else if (endPoint === 'DAD') {
      return 'Da Nang Airport';
    } else if (endPoint === 'HPH') {
      return 'Cat Bi Airport';
    }
  };

  return (
    <div className={cx('flight-detail-content-item')}>
      <div className={cx('detail-content-left')}>
        <div className={cx('detail-time-point')}>
          <div className={cx('detail-start-time')}>
            <h4>{timeStart}</h4>
            <p>11 Feb</p>
          </div>
          <p className={cx('detail-flight-time')}>
            {Math.floor(duration / 60)}h {duration % 60}m
          </p>
          <div className={cx('detail-end-time')}>
            <h4>{timeEnd}</h4>
            <p>11 Feb</p>
          </div>
        </div>

        <div className={cx('detail-line-point')}>
          <img src={line2Icon} alt="" />
        </div>

        <div className={cx('detail-location-point')}>
          <div className={cx('detail-start-point')}>
            <h4>{locationStart()}</h4>
            <p>{airportNameStart()}</p>
          </div>
          <div className={cx('detail-end-point')}>
            <h4>{locationEnd()}</h4>
            <p>{airportNameEnd()}</p>
          </div>
        </div>
      </div>

      <div className={cx('detail-content-right')}>
        <div className={cx('detail-airline')}>
          <Button className={cx('detail-airline-icon')}>
            <img src={logoIcon} alt="" />
          </Button>
          <div className={cx('detail-airline-name')}>
            <h4>{name}</h4>
            <p>
              {flightNumber} -- {gclass}
            </p>
          </div>
        </div>

        <div className={cx('detail-airline-inf')}>
          <div className={cx('detail-airline-inf-l')}>
            <p>
              Baggage <span>{baggage}</span>{' '}
            </p>
            <p>
              In-flight <span>Meal</span>{' '}
            </p>
            <p>
              In-flight <span>Entertainment</span>{' '}
            </p>
          </div>
          <div className={cx('detail-airline-inf-r')}>
            <p>
              Aircraft <span>Airbus A{plane}</span>{' '}
            </p>
            <p>
              Seat layout <span>3-3</span>{' '}
            </p>
            <p>
              Seat pitch 29 inches (standard) <span>29 inches (standard)</span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetail;
