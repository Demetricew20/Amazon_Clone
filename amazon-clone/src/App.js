import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route }
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    // BEM naming convention
    <Router>
      
    <div className="app">
    <Header />

      <Switch>
      <Route path='/login'>
          <Login />
        </Route>
      <Route path='/checkout'>
          <Checkout />
        </Route>
        {/* Keep Default Route On the Bottom */}
        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
    </div>

    </Router>
  );
}

export default App;
