import React from 'react';
import NavbarPc from './Navbar_pc';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header({ type, openState }) {
  return (
    <header className={type}>
      <div className='inner'>
        <h1>
          <Link className='logo' to='/'>
            vipp
          </Link>
        </h1>
        <NavbarPc />
        <FontAwesomeIcon
          icon={faBars}
          className='menu_btn'
          onClick={() => openState.current.toggle()}
        />
      </div>
    </header>
  );
}
export default Header;
