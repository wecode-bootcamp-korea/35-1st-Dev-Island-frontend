import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__left">
        <Link to="/">
          <img alt="logo" src="/images/Nav/W_O_Black.svg" />
        </Link>
        <div>
          <Link to="/productlist">
            <span>ALL</span>
          </Link>
          <span>SPEAKERS</span>
          <span>HEADPHONES</span>
          <span>TV</span>
          <span>SUPPORT</span>
        </div>
      </div>
      <div className="nav-container__right">
        <span>
          <Link to="/signin">
            <img alt="logo" src="/images/Nav/user.svg" />
          </Link>
        </span>
        <span>
          <img alt="logo" src="/images/Nav/location.svg" />
        </span>
        <span>
          <Link to="/cart">
            <img alt="logo" src="/images/Nav/cart.svg" />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
