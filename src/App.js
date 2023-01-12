import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as types from './redux/actionType';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Youtube from './components/sub/Youtube';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Main from './components/main/Main';
import Contact from './components/sub/Contact';
import NavbarTablet from './components/common/Navbar_tablet';
import './scss/style.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.YOUTUBE.start, Info: { type: 'interest', count: 6 } });
    dispatch({ type: types.FLICKR.start });
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Main type={'main'} />} />
        <Route path='/' render={() => <Header type={'sub'} />} />
      </Switch>
      <Route path='/youtube' component={Youtube} />
      <Route path='/department' component={Department} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />
      <Footer />
      <NavbarTablet />
    </>
  );
}

export default App;
