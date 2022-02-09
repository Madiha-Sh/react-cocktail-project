import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src='https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/15-cocktails/final/src/logo.svg' alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;