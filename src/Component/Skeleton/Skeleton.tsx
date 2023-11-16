import React from 'react';
import s from './style.module.scss';

const Skeleton: React.FC = () => {
  return (
    <div className={s.ticket}>
      <div className={s.ticket_header}>
        <div className={s.ticket_header_price} />
        <div className={s.ticket_header_logo} />
      </div>
      <div className={s.ticket_routes}>
        <div className={s.ticket_routes_items} />
        <div className={s.ticket_routes_items} />
        <div className={s.ticket_routes_items} />
      </div>
      <div className={s.ticket_routes}>
        <div className={s.ticket_routes_items} />
        <div className={s.ticket_routes_items} />
        <div className={s.ticket_routes_items} />
      </div>
    </div>
  );
};

export default Skeleton;
