import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route }
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IgzkhK8nAlCnZ75pqyKnbH0ulOrmzhEeIG752yhlNeZlufR90exSngNvbqIZTiNxgzQaFax77FcXLwNbEC3H3fz00PukLIbfM');


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
        <Route path='/payment'>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path='/orders'>
          <Orders/>
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
