import "../App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Cart } from "./Cart";
import { Products } from "./Products";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
