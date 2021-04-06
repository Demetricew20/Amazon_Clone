import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route }
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('USER >>>', authUser);

      if (authUser) {
        //User logged in or previously logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // User logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

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
