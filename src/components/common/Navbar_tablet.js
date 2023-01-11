import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as types from '../../redux/actionType';

function NavbarTablet() {
  const navRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth > 1179 && dispatch({ type: types.MENU.close })
    );
  }, [dispatch]);
  const { open } = useSelector((store) => store.menuReducer);

  return (
    <nav
      className={`mobile_navbar ${open ? 'on' : 'off'}`}
      ref={navRef}
      onClick={() => dispatch({ type: types.MENU.close })}
    >
      <h1>
        <NavLink to='/'>vipp</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/department'>Our Hotels</NavLink>
        </li>
        <li>
          <NavLink to='/youtube'>Youtube</NavLink>
        </li>
        <li>
          <NavLink to='/gallery'>Gallery</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarTablet;
