import React from 'react';
import LeftNavbar from './left_navbar';
import RightNavbar from './right_navbar';

const Navbar = (props) => {

  const special = props.location === '/' ? "special-navbar" : "";

  return (
    <div className={'navbar-container ' + special }>
      <div className='navbar-both'>
        <LeftNavbar/>
        <RightNavbar/>
      </div>
    </div>
  );

};


export default Navbar;
