import React, { useState } from 'react';
import s from './style.module.scss';

const Tabs: React.FC = () => {
  const [active, setAactive] = useState(2);
  function activeClass(key: number) {
    if (key === active) return `${s.tabs_tab} ${s.active}`;
    return s.tabs_tab;
  }
  return (
    <div className={s.tabs}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setAactive(1);
        }}
        className={activeClass(1)}
      >
        Самый дешевый
      </div>
      <div
        onClick={() => {
          setAactive(2);
        }}
        className={activeClass(2)}
      >
        Самый быстрый
      </div>
      <div
        onClick={() => {
          setAactive(3);
        }}
        className={activeClass(3)}
      >
        Оптимальный
      </div>
    </div>
  );
};

export default Tabs;
