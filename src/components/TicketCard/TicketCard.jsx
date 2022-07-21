import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import bagageIcon from '../../assets/icons/baggageIcon.svg';
import mealIcon from '../../assets/icons/mealIcon.svg';
import lineIcon from '../../assets/icons/line.svg';
import bamboIcon from '../../assets/icons/bambo.svg';
import vnIcon from '../../assets/icons/vnIcon.svg';
import vjIcon from '../../assets/icons/vjIcon.svg';
import styles from './TicketCard.module.scss';
import Button from '../Button/Button';
import FlightDetail from '../FlightDetail/FlightDetail';
import FareInfo from '../FareInfo/FareInfo';

const cx = classnames.bind(styles);
TicketCard.propTypes = {};

function TicketCard({
  airLine,
  startTime,
  endTime,
  duration,
  baggage,
  startPoint,
  endPoint,
  flightNumber,
  plane,
  gclass,
  noRefund,
  priceAdult,
  chargeAdult,
  taxAdult,
}) {
  const [onDetail, setOnDetail] = useState(false);
  const [onFare, setOnFare] = useState(false);

  const handleDetail = () => {
    setOnDetail(!onDetail);
    setOnFare(false);
  };

  const handleInfo = () => {
    setOnFare(!onFare);
    setOnDetail(false);
  };

  const logoIcon = () => {
    if (airLine === 'VN') {
      return vnIcon;
    } else if (airLine === 'VJ') {
      return vjIcon;
    } else if (airLine === 'QH') {
      return bamboIcon;
    }
  };

  const name = () => {
    if (airLine === 'VN') {
      return 'Vietnam Airlines';
    } else if (airLine === 'VJ') {
      return 'Vietjet Air';
    } else if (airLine === 'QH') {
      return 'Bamboo Airways';
    }
  };

  const timeStart = () => {
    return startTime.slice(11, 16);
  };
  const timeEnd = () => {
    return endTime.slice(11, 16);
  };

  const priceNomal = () => {
    return priceAdult + chargeAdult + taxAdult;
  };

  return (
    <div className={cx('ticket-card')}>
      <div className={cx('ticket-card-content')}>
        <div className={cx('airline')}>
          <Button className={cx('airline-icon')}>
            <img src={logoIcon()} alt="" />
          </Button>
          <div className={cx('airline-name')}>
            <h4>{name()}</h4>
          </div>
        </div>

        <div className={cx('time-point')}>
          <div className={cx('start-time')}>
            <h4>{timeStart()}</h4>
            <Button className={cx('start-point')}>{startPoint}</Button>
          </div>
          <div className={cx('flight-time')}>
            <p>
              {Math.floor(duration / 60)}h {duration % 60}m
            </p>
            <img className={cx('line')} src={lineIcon} alt="" />
            <h5>Direct</h5>
          </div>
          <div className={cx('end-time')}>
            <h4>{timeEnd()}</h4>
            <Button className={cx('end-point')}>{endPoint}</Button>
          </div>
        </div>

        <div className={cx('service')}>
          <div className={cx('baggage')}>
            <img src={bagageIcon} alt="" /> Baggage <span>{baggage} </span>
          </div>
          <div className={cx('meal')}>
            <img src={mealIcon} alt="" /> In-flight <span>Meal </span>
          </div>
        </div>

        <div className={cx('price')}>
          <h4 className={cx('price-nomal')}>{priceNomal()} vnd</h4>
          <h4 className={cx('price-discount')}>{priceNomal() - 4000} vnd</h4>
        </div>

        <div className={cx('ticket-card-btn')}>
          <Button className={cx('ticket-card-btn-item')}>Choose</Button>
        </div>
      </div>
      <div className={cx('ticket-card-more')}>
        <h5
          onClick={handleDetail}
          style={
            onDetail === false
              ? { textDecoration: 'none' }
              : { textDecoration: 'underline', color: '#4d46fa' }
          }
          className={cx('flight-detail')}
        >
          FLIGHT DETAIL
        </h5>
        <h5
          onClick={handleInfo}
          style={
            onFare === false
              ? { textDecoration: 'none' }
              : { textDecoration: 'underline', color: '#4d46fa' }
          }
          className={cx('fare-info')}
        >
          FARE INFO
        </h5>
      </div>

      <div
        className={cx('flight-detail-content')}
        style={onDetail === true ? { display: 'block' } : { display: 'none' }}
      >
        <FlightDetail
          timeStart={timeStart()}
          timeEnd={timeEnd()}
          duration={duration}
          name={name()}
          logoIcon={logoIcon()}
          plane={plane}
          flightNumber={flightNumber}
          gclass={gclass}
          baggage={baggage}
          startPoint={startPoint}
          endPoint={endPoint}
          priceAdult={priceAdult}
          chargeAdult={chargeAdult}
          taxAdult={taxAdult}
        />
      </div>
      <div
        className={cx('fare-info-content')}
        style={onFare === true ? { display: 'block' } : { display: 'none' }}
      >
        <FareInfo
          logoIcon={logoIcon()}
          name={name()}
          flightNumber={flightNumber}
          gclass={gclass}
          noRefund={noRefund}
          priceNomal={priceNomal()}
          startPoint={startPoint}
          endPoint={endPoint}
        />
      </div>
    </div>
  );
}

export default TicketCard;
