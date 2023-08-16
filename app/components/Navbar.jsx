import  '../styles/navbar.css'

import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2><b>naira</b><span style={{color: 'orange'}}>refill</span></h2>
      <div>
        <button className='btn1'>Register</button>
        <button className='btn2'>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
