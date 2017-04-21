import React from 'react';
import { Link } from 'react-router';
import Search from './search';


const LeftNavbar = () => {
  return (
    <div className = "left-navbar">
      <Link to="/" className="fafbook-small-logo">F</Link>
      <div className = "search"/>
    </div>
  )
}

export default LeftNavbar;
