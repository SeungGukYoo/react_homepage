import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavbarPc() {
  return (
    <>
      <ul className='gnb'>
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
      <Link className='globalButton' to='/'>
        Make a reservation
      </Link>
    </>
  );
}

export default NavbarPc;
