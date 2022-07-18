import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__left">
        <Link to="/">
          <img alt="logo" src="images/W_O_Black.svg" />
        </Link>
        <div>
          <Link to="/productlist">
            <span>스피커</span>
          </Link>
          <span>헤드폰</span>
          <span>TV</span>
          <span>자세히 알아보기</span>
          <span>지원</span>
        </div>
      </div>
      <div className="nav-container__right">
        <span>
          <Link to="/signin">
            <img alt="logo" src="images/user_icon.svg" />
          </Link>
        </span>
        <span>
          <img alt="logo" src="images/location_icon.svg" />
        </span>
        <span>
          <Link to="/cart">
            <img alt="logo" src="images/cart_icon.svg" />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
