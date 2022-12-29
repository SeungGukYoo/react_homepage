import { Route, Switch } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutMain from './components/main/About_main';
import BannelMain from './components/main/Bannel_main';
import GalleryMain from './components/main/Gallery_main';
import Figure from './components/main/Figure';
import InfoMain from './components/main/Info_main';
import About from './components/sub/About';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Stories from './components/sub/Stories';
import './scss/style.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header type='main' />
          <Figure />
          <AboutMain />
          <BannelMain />
          <InfoMain />
          <GalleryMain />
        </Route>
        <Route path='/'>
          <Header type='sub' />
        </Route>
      </Switch>

      <Route path='/about' component={About} />
      <Route path='/department' component={Department} />
      <Route path='/contact' component={Contact} />
      <Route path='/stories' component={Stories} />

      <Footer />
    </>
  );
}

export default App;
