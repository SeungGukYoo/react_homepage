import { Route, Switch } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import About from './components/sub/About';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Stories from './components/sub/Stories';
import './scss/style.scss';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/' render={() => <Header type={'sub'} />} />
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
