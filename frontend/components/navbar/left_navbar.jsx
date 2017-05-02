import React from 'react';
import { Link } from 'react-router';
import Search from './search';


const LeftNavbar = () => {
  return (
    <div className = "left-navbar">
      <Link to="/" className="fafbook-small-logo-link">
        <div className="fafbook-small-logo"> 
          <div className="fafbook-small-logo-f"> f </div>
        </div>
      </Link>
      <Search />
    </div>
  );
};

export default LeftNavbar;
