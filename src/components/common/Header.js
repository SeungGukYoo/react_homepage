import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
  console.log(type);

  return (
    <header>
      <div className='inner'>
        <h1>
          <Link className='logo' to='/'>
            Vipp
          </Link>
        </h1>

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
        <Link className='header_btn' to='/'>
          Make a reservation
        </Link>
      </div>
    </header>
  );
}
export default Header;
