import "../App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Cart } from "./Cart";
import { Products } from "./Products";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
