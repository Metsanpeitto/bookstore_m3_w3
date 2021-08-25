import React from 'react';
import { Link } from 'react-router-dom';
import user from '../imgs/user.svg';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="menuNav">
      <li key={1}>
        <Link to="/" active="true" exact="true">
          BOOKS
        </Link>
      </li>
      <li key={2}>
        <Link to="/categories" exact="true">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <div className="user">
      <img src={user} className="user-icon" alt="logo" />
    </div>
  </nav>
);
export default Navbar;
