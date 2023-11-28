import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import * as ticketActions from '../../store/Actions/TicketActions';
import Ticket from '../Ticket/Ticket';
import Skeleton from '../Skeleton/Skeleton';
import { TicketStateType } from '../../store/Reducers/ticketsReducer';
import { FilterStateType } from '../../store/Reducers/filterReducer';
import {
  areAllFiltersFalse,
  filterTicket,
  sortTickets,
} from './helpers/helpers';
import { SortStateType } from '../../store/Reducers/sortReducer';
import s from './style.module.scss';

interface PropsType extends PropsToRedux {
  onLoadTicketsAction: () => Promise<void>;
  getTicketsAction: (searchId: string) => Promise<void>;
}
const TicketList: React.FC<PropsType> = ({
  ticketStore: { isError, isStopLoadingData, isLoad, tickets, searchId },
  filterStore,
  onLoadTicketsAction,
  getTicketsAction,
  sortStore: { activeSort },
}) => {
  const [stillTickets, setStillTickets] = useState(5);
  useEffect(() => {
    onLoadTicketsAction();
  }, []);
  useEffect(() => {
    if (searchId && !isStopLoadingData) {
      getTicketsAction(searchId);
    }
  }, [tickets, searchId, isError]);
  useEffect(() => {
    setStillTickets(5);
  }, [activeSort]);
  function isRender() {
    const notFound = areAllFiltersFalse(filterStore);
    if (notFound) {
      return <div>К сожелению билетов не найдено</div>;
    }
    if (isLoad && tickets) {
      return sortTickets(activeSort, filterTicket(tickets || [], filterStore))
        .slice(0, stillTickets)
        .map((el) => {
          return <Ticket key={Math.random() * 100} tickets={el} />;
        });
    }
    return [1, 2, 3].map((el) => <Skeleton key={el} />);
  }
  const onClickStillBtn = () => {
    setStillTickets((prevState) => {
      return prevState + prevState;
    });
  };
  return (
    <div className={s.ticketlist}>
      <div className={s.ticketlist_inner}>
        {isRender()}
        {!areAllFiltersFalse(filterStore) && (
          <div onClick={onClickStillBtn} className={s.ticketlist_inner_btn}>
            Показать еще 5 билетов!
          </div>
        )}
      </div>
    </div>
  );
};

interface PropsToRedux {
  ticketStore: TicketStateType;
  filterStore: FilterStateType;
  sortStore: SortStateType;
}
const mapStateToProps = (store: RootState): PropsToRedux => {
  return {
    ticketStore: store.ticketStore,
    filterStore: store.filterStore,
    sortStore: store.sortStore,
  };
};

export default connect(mapStateToProps, ticketActions)(TicketList);
