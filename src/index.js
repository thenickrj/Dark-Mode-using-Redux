import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import { createStore } from "redux";
import { darkMode } from "./reducer";
import { Provider } from "react-redux";

let store = createStore(darkMode);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
