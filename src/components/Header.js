import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <div className="header-container">
    <nav>
      <h1>Math Magicians</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        |
        <Link to="/calculator"> Calculator</Link>
        |
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  </div>

);
export default Header;
