import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Ticket.module.scss';
import Filter from '../Filter/Filter';
import TicketSelect from '../TicketSelect/TicketSelect';
import TicketCard from '../TicketCard/TicketCard';
import flightsApi from '../../apis/flightsApi';

const cx = classNames.bind(styles);

Ticket.propTypes = {};

function Ticket(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const data = await flightsApi.getAll();
      setDataList(data.Flights);
    };

    fetchFlights();
  }, []);

  const flightsList = useMemo(() => {
    if (dataList && dataList.length > 0) {
      return dataList.map((item) => ({
        id: item.RelatedFlights[0].Index,
        airline: item.RelatedFlights[0].AirlineCode,
        startTime: item.RelatedFlights[0].StartTime,
        endTime: item.RelatedFlights[0].EndTime,
        duration: item.RelatedFlights[0].Duration,
        baggage: item.RelatedFlights[0].Freebag,
        freebag: item.RelatedFlights[0].Freebag,
        startPoint: item.RelatedFlights[0].StartPoint,
        endPoint: item.RelatedFlights[0].EndPoint,
        flightNumber: item.RelatedFlights[0].FlightNumber,
        plane: item.RelatedFlights[0].Plane,
        gclass: item.GroupClass,
        noRefund: item.NoRefund,
        priceAdult: item.PriceAdult,
        chargeAdult: item.ChargeAdult,
        taxAdult: item.TaxAdult,
      }));
    }

    return [];
  }, [dataList]);

  return (
    <div>
      <div className={cx('ticket')}>
        <div className={cx('ticket-list')}>
          <div className={cx('filter')}>
            <Filter />
          </div>
          <div className={cx('list')}>
            {flightsList.map((item) => (
              <TicketCard
                key={item.id}
                airLine={item.airline}
                startTime={item.startTime}
                endTime={item.endTime}
                duration={item.duration}
                baggage={item.baggage}
                startPoint={item.startPoint}
                endPoint={item.endPoint}
                flightNumber={item.flightNumber}
                plane={item.plane}
                gclass={item.gclass}
                noRefund={item.noRefund}
                priceAdult={item.priceAdult}
                chargeAdult={item.chargeAdult}
                taxAdult={item.taxAdult}
              />
            ))}
          </div>
        </div>
        <div className={cx('ticket-select')}>
          <TicketSelect />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
