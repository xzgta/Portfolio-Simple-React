import React from 'react';
import PropTypes from 'prop-types';

import './style/Header.css';

function Header({ changePage }) {
  return (
    <div className="Header">
      <div className="header-container">
        <h1>Helmy Agta Al Fatah</h1>
        <h2>Beginner Developer</h2>
        <div id="border-text" />
        <ul>
          <li onClick={() => changePage('home')}>Home</li>
          <li onClick={() => changePage('about')}>About</li>
          <li onClick={() => changePage('portofolio')}>Portofolio</li>
        </ul>
      </div>
    </div>
  );
}

Header.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Header;
