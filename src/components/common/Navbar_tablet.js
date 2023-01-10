import React, { useEffect, useRef, useState } from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarTablet = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      toggle: () => setOpen((prev) => !prev)
    };
  });
  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth > 1179 && setOpen(false));
  }, []);

  return (
    <nav
      className={`mobile_navbar ${open ? 'on' : 'off'}`}
      ref={navRef}
      onClick={() => setOpen(false)}
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
});

export default NavbarTablet;
