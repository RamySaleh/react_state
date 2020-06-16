import "../App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useContext } from "react";

import { Cart } from "./Cart";
import { Products } from "./Products";
import { ProductsContext } from "./Store";

function App() {
  const [cart] = useContext(ProductsContext);

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
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
