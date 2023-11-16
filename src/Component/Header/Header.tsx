import React from 'react';
import style from './style.module.scss';
import logo from '../../public/image/logo.svg';

const Header: React.FC = () => {
  return (
    <div className={style.logo}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
