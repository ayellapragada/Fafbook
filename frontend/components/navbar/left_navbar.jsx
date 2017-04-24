import React from 'react';
import { Link } from 'react-router';
import Search from './search';


const LeftNavbar = () => {
  return (
    <div className = "left-navbar">
      <div className="fafbook-small-logo">
        <Link to="/" className="fafbook-small-logo-link">f
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default LeftNavbar;
