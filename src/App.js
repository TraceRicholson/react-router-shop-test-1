import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './Components/home'
// import AllProducts from './Components/all-products'
// import IndividualProduct from './Components/individual-product'
// import ViewCart from './Components/view-cart'
// import Checkout from './Components/Checkout'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <p>HOME</p>
          </li>
        </ul>
        <Switch>
          <Route path = "/">HOME</Route>
          <Route path = "/AllProducts">AllProducts</Route>
          <Route path = "/IndividualProduct">IndividualProduct</Route>
          <Route path = "/ViewCart">View Your Cart</Route>
          <Route path = "/Checkout">Checkout</Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;


