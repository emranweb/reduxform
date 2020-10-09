import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/index";
import reduxThunk from "redux-thunk";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={createStore(reducer, applyMiddleware(reduxThunk))}>
      <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
