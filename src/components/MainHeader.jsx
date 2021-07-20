import React from 'react';
import { Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
//TO PREVNET LOADING OF PAGE EVERYTIME WE CLICK ON LINKS
//NavLink - TO SHOW ACTIVE COMPONENTS WE CAN ADD CLASS
import '../style.css';

const MainHeader = () => {
  return (
    <>
      <ul>
        <li>
          {/* <a href="/welcome"> Welcome </a> */}
          {/* <Link to="/welcome"> Welcome </Link> */}
          <NavLink activeClassName="active" to="/welcome">
            {' '}
            Welcome{' '}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            {' '}
            Prodcuts{' '}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainHeader;
