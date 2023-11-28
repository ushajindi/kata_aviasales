import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './store/store';
import Header from './Component/Header/Header';
import Tabs from './Component/Tabs/Tabs';
import Filter from './Component/Filter/Filter';
import TicketList from './Component/TicketList/TicketList';
import Loader from './Component/Loader/Loader';
import { TicketStateType } from './store/Reducers/ticketsReducer';
import s from './app.module.scss';

type PropsType = {
  ticketStore: TicketStateType;
};

const App: React.FC<PropsType> = ({ ticketStore: { isStopLoadingData } }) => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.app_inner}>
        {!isStopLoadingData && (
          <div className={s.app_inner_loader}>
            <Loader />
          </div>
        )}
        <div className={s.app_inner_elem}>
          <Filter />
        </div>
        <div className={s.app_inner_elem}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (store: RootState) => {
  return {
    ticketStore: store.ticketStore,
  };
};
export default connect(mapStateToProps)(App);
