import React from 'react';
import LeftNavbar from './left_navbar';
import RightNavbar from './right_navbar';

const Navbar = () =>(
  <div className='navbar-container'>
    <div className='navbar-both'>
      <LeftNavbar/>
      <RightNavbar/>
    </div>
  </div>
);


export default Navbar;
