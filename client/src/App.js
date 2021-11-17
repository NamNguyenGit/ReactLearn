import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

import About from './pages/About';
import Service from './pages/Service';
import Single from './pages/Single';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Hint from './pages/Hint';
function App() {
  return (
    <div>
      <Router>

      <Header></Header>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route  path='/service' component={Service} />
        <Route  path='/single' component={Single} />
        <Route  path='/hint' component={Hint} />
        <Route  path='/gallery' component={Gallery} />
        <Route  path='/contact' component={Contact} />
        </Switch>
      <Footer></Footer>

      </Router>
      
    </div>
  );
}

export default App;
