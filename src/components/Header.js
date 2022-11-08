import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <h1>Math Magicians</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/calculator"> Calculator </Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);
export default Header;
