import React from 'react';
import './Header.css';
import logo from './magnetis.svg';

const header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={ logo } alt="Magnetis Transactions" />
    </header>
  );
};

export default header;
