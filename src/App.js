import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Payment from './components/Payment'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';
import { useStateValue } from './context/stateContext';
import LogIn from './components/LogIn';
import { auth } from './firebase'
import { actionTypes } from './reducer';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51HQOGWBc0UiLaQI98Zr7LNZNR8D5kr6IwMbyQB7qMMseAoyw0AsCmLj6TDZ3mqKqSyd53pqZFcwELg4Hz320v6xo00ccQib2le')

function App() {

 const [state, dispatch] = useStateValue()

 useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: actionTypes.SET_USER,
        user
      })
    })
 }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/checkout">
             <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/payment">
             <Header />
             <Elements stripe={promise} >
               <Payment/>
             </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
