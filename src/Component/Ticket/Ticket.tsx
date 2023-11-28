import React from 'react';
import s from './style.module.scss';
import { TicketType } from '../../store/Reducers/ticketsReducer';
import { DurationTime, FormatTime, PriceEdit } from './helpers/helpers';

type PropsType = {
  tickets: TicketType;
};
const Ticket: React.FC<PropsType> = ({
  tickets: { price, segments, carrier },
}) => {
  function routesRender() {
    return segments.map((el) => {
      return (
        <div key={el.duration * Math.random() * 10} className={s.ticket_routes}>
          <div className={s.ticket_routes_route}>
            <div className={s.ticket_routes_title}>
              {el.origin} - {el.destination}
            </div>
            <div className={s.ticket_routes_route_time}>
              {FormatTime(segments)}
            </div>
          </div>
          <div className={s.ticket_routes_leght}>
            <div className={s.ticket_routes_title}>В пути</div>
            <div className={s.ticket_routes_leght_time}>
              {DurationTime(el.duration)}
            </div>
          </div>
          {el.stops.length !== 0 ? (
            <div className={s.ticket_routes_stops}>
              <div className={s.ticket_routes_title}>
                {el.stops.length} пересадки
              </div>
              <div className={s.ticket_routes_stops_info}>
                {el.stops.join(',')}
              </div>
            </div>
          ) : (
            <div className={s.ticket_routes_stops}>
              <div className={s.ticket_routes_title_not}>без пересадок</div>
              <div className={s.ticket_routes_stops_info} />
            </div>
          )}
        </div>
      );
    });
  }
  return (
    <div className={s.ticket}>
      <div className={s.ticket_header}>
        <div className={s.ticket_header_price}>{PriceEdit(String(price))}</div>
        <div className={s.ticket_header_logo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="" />
        </div>
      </div>
      {routesRender()}
    </div>
  );
};

export default Ticket;
