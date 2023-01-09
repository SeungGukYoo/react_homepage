import { Route, Switch } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Youtube from './components/sub/Youtube';

import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Main from './components/main/Main';
import Contact from './components/sub/Contact';
import './scss/style.scss';
import NavbarTablet from './components/common/Navbar_tablet';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as types from './redux/actionType';

function App() {
  const openState = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.YOUTUBE.start, Info: { type: 'interest', count: 6 } });
    dispatch({ type: types.FLICKR.start });
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Main type={'main'} openState={openState} />} />
        <Route path='/' render={() => <Header type={'sub'} openState={openState} />} />
      </Switch>
      <Route path='/youtube' component={Youtube} />
      <Route path='/department' component={Department} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />

      <Footer />
      <NavbarTablet ref={openState} />
    </>
  );
}

export default App;
