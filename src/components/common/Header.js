import React from 'react';
import { Link } from 'react-router-dom';
import NavbarPc from './Navbar_pc';
import NavbarTablet from './Navbar_tablet';

function Header({ type }) {
  return (
    <header className={type}>
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
