import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { FilterStateType } from '../../store/Reducers/filterReducer';
import s from './style.module.scss';
import {
  FilterActions as filterActions,
  FilterActionType,
} from '../../store/Actions/FilterActions';

interface FilterProps extends PropsFromRedux {
  filterActions: (type: FilterActionType['type']) => FilterActionType;
}

const Filter: React.FC<FilterProps> = ({
  filterStore: { all, notTransfers, oneTransfer, twoTransfer, threeTransfer },
  filterActions,
}) => {
  return (
    <div className={s.filter}>
      <div className={s.filter_title}>Количество пересадок</div>
      <div className={s.filter_cheks}>
        <input
          onChange={() => {
            filterActions('all'); // Используйте теперь filterActions
          }}
          checked={all}
          type="checkbox"
        />
        Все
      </div>
      <div className={s.filter_cheks}>
        <input
          onChange={() => {
            filterActions('notTransfers'); // Используйте теперь filterActions
          }}
          checked={notTransfers}
          type="checkbox"
        />
        Без пересадок
      </div>
      <div className={s.filter_cheks}>
        <input
          onChange={() => {
            filterActions('oneTransfer'); // Используйте теперь filterActions
          }}
          checked={oneTransfer}
          type="checkbox"
        />
        1 пересадка
      </div>
      <div className={s.filter_cheks}>
        <input
          onChange={() => {
            filterActions('twoTransfer'); // Используйте теперь filterActions
          }}
          checked={twoTransfer}
          type="checkbox"
        />
        2 пересадки
      </div>
      <div className={s.filter_cheks}>
        <input
          onChange={() => {
            filterActions('threeTransfer'); // Используйте теперь filterActions
          }}
          checked={threeTransfer}
          type="checkbox"
        />
        3 пересадок
      </div>
    </div>
  );
};

interface PropsFromRedux {
  filterStore: FilterStateType;
}

const mapStateToProps = (state: RootState): PropsFromRedux => {
  return {
    filterStore: state.filterStore,
  };
};

export default connect(mapStateToProps, { filterActions })(Filter); // Переименуйте здесь тоже
