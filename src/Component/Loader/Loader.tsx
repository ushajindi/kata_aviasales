import React from 'react';
import s from './style.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <div className={s.loader_bar}>
        <div className={s.loader_bar_progress} />
      </div>
    </div>
  );
};

export default Loader;
