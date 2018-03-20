import React from "react";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";

import Login from "./containers/Login";
import rootReducer from "./redux";

const store = compose()(createStore)(rootReducer);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
