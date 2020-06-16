import "../App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Cart } from "./Cart";
import { Products } from "./Products";
import React from "react";

const App = inject("store")(
  observer((props) => {
    return (
      <>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart ({props.store.cart.length})</Link>
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
  })
);

export default App;
