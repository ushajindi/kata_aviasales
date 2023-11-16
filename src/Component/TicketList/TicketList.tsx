import React from 'react';
import Ticket from '../Ticket/Ticket';
import s from './style.module.scss';
import Skeleton from '../Skeleton/Skeleton';

const TicketList: React.FC = () => {
  return (
    <div className={s.ticketlist}>
      <div className={s.ticketlist_inner}>
        <Skeleton />
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return <Ticket key={el} />;
        })}
      </div>
    </div>
  );
};

export default TicketList;
