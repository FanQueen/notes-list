import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import noteApp from "./reducers";
import App from "./components/App";

const store = createStore(noteApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
