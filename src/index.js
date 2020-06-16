import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./components/Store";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
