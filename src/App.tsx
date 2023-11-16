import React from 'react';
import Header from './Component/Header/Header';
import Tabs from './Component/Tabs/Tabs';
import Filter from './Component/Filter/Filter';
import TicketList from './Component/TicketList/TicketList';
import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.app_inner}>
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

export default App;
