import React from 'react';
import NavbarPc from './Navbar_pc';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';
function Header({ type }) {
  const dispatch = useDispatch();

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
          onClick={() => dispatch({ type: types.MENU.toggle })}
        />
      </div>
    </header>
  );
}
export default Header;
