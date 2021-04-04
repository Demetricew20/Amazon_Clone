import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route }
from 'react-router-dom';

function App() {
  return (
    // BEM naming convention
    <Router>
    <div className="app">
      <Switch>
      <Route path='/checkout'>
          <Header />
            <h1>Checkout</h1>
        </Route>
        {/* Keep Default Route On the Bottom */}
        <Route path='/'>
          <Header />
          <Home/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
