import "../App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Cart } from "./Cart";
import { Products } from "./Products";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((prod) => prod.id !== product.id));
  };

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
              <Products onAddToCart={handleAddToCart} />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
