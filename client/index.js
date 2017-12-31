import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import { createStore } from "redux";
import App from "./components/App";

const store = createStore(todoApp);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
