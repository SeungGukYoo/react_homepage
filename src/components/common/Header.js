import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavbarPc from './Navbar_pc';
import NavbarTablet from './Navbar_tablet';

function Header({ type }) {
  console.log(type);

  return (
    <header>
      <div className='inner'>
        <h1>
          <Link className='logo' to='/'>
            vipp
          </Link>
        </h1>
        <NavbarPc />
        <NavbarTablet />
      </div>
    </header>
  );
}
export default Header;
