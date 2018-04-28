import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import Nihao from "./Nihao";
import { watchClick } from "./sagas";
import Dogg from "./Dogg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const initialState = {
  text1: "text1",
  text2: "text2"
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchClick);

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Nihao />
    <Dogg />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
