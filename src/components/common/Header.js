
import NavbarPc from './Navbar_pc';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/actionType';
function Header({ type }) {
  const dispatch = useDispatch();
  const oepnState = useSelector((store) => store.menuReducer.open);
  console.log(oepnState);
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
          className={`menu_btn ${oepnState ? 'on' : 'off'}`}
          onClick={() => dispatch({ type: types.MENU.toggle })}
        />
      </div>
    </header>
  );
}
export default Header;
