import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarTablet() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const menuOpen = () => {
    open ? (navRef.current = '') : (navRef.current = 'on');
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={`mobile_navbar ${navRef.current}`}>
        <h1>vipp</h1>
        <ul ref={navRef}>
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
      <FontAwesomeIcon icon={faBars} className='menu_btn' onClick={menuOpen} />
    </>
  );
}

export default NavbarTablet;
