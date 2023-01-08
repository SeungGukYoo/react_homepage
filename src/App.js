import { Route, Switch } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Youtube from './components/sub/Youtube';

import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Main from './components/main/Main';
import Contact from './components/sub/Contact';
import './scss/style.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/' render={() => <Header type={'sub'} />} />
      </Switch>
      <Route path='/youtube' component={Youtube} />
      <Route path='/department' component={Department} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />

      <Footer />
    </>
  );
}

export default App;
