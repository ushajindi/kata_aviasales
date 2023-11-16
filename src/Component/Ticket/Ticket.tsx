import React from 'react';
import s from './style.module.scss';
import logo from '../../public/image/avia_logo.png';

const Ticket: React.FC = () => {
  return (
    <div className={s.ticket}>
      <div className={s.ticket_header}>
        <div className={s.ticket_header_price}>13 400 Р</div>
        <div className={s.ticket_header_logo}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={s.ticket_routes}>
        <div className={s.ticket_routes_route}>
          <div className={s.ticket_routes_title}>MOW - HKT</div>
          <div className={s.ticket_routes_route_time}>10:45 - 08:00</div>
        </div>
        <div className={s.ticket_routes_leght}>
          <div className={s.ticket_routes_title}>В пути</div>
          <div className={s.ticket_routes_leght_time}>21ч 15м</div>
        </div>
        <div className={s.ticket_routes_stops}>
          <div className={s.ticket_routes_title}>2 пересадки</div>
          <div className={s.ticket_routes_stops_info}>HKG,JNB</div>
        </div>
      </div>
      <div className={s.ticket_routes}>
        <div className={s.ticket_routes_route}>
          <div className={s.ticket_routes_title}>MOW - HKT</div>
          <div className={s.ticket_routes_route_time}>10:45 - 08:00</div>
        </div>
        <div className={s.ticket_routes_leght}>
          <div className={s.ticket_routes_title}>В пути</div>
          <div className={s.ticket_routes_leght_time}>21ч 15м</div>
        </div>
        <div className={s.ticket_routes_stops}>
          <div className={s.ticket_routes_title}>2 пересадки</div>
          <div className={s.ticket_routes_stops_info}>HKG,JNB</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
