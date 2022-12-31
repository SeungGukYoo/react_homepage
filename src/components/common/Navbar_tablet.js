import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarTablet() {
  return (
    <>
      <nav className='mobile_navbar'>
        <h1>vipp</h1>
        <ul>
          <li>
            <NavLink to='/department'>Our Hotels</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/stories'>Stories</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon icon={faBars} className='menu_btn' />
    </>
  );
}

export default NavbarTablet;
