import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import * as sortActions from '../../store/Actions/SortActions';
import { SortActionsType } from '../../store/Actions/SortActions';
import s from './style.module.scss';

type PropsType = {
  sortAction: (type: SortActionsType['type']) => void;
};

const Tabs: React.FC<PropsType> = ({ sortAction }) => {
  const [active, setActive] = useState(2);
  useEffect(() => {
    switch (active) {
      case 1: {
        sortAction('isLowPrice');
        break;
      }
      case 2: {
        sortAction('isFast');
        break;
      }
      default:
        break;
    }
  }, [active]);
  function activeClass(key: number) {
    if (key === active) return `${s.tabs_tab} ${s.active}`;
    return s.tabs_tab;
  }
  return (
    <div className={s.tabs_loading}>
      <div className={s.tabs}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            setActive(1);
          }}
          className={activeClass(1)}
        >
          Самый дешевый
        </div>
        <div
          onClick={() => {
            setActive(2);
          }}
          className={activeClass(2)}
        >
          Самый быстрый
        </div>
        <div
          onClick={() => {
            setActive(3);
          }}
          className={activeClass(3)}
        >
          Оптимальный
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  return {
    sortStore: store.sortStore,
  };
};
export default connect(mapStateToProps, sortActions)(Tabs);
