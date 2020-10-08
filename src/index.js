import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/index";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={createStore(reducer)}>
      <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
