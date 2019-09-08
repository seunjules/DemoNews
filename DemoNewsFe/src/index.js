import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./Containers/App";
import { Provider } from "react-redux";
import { searchNews, getHeadlines, openNewsPage } from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();

const rootReducer = combineReducers({ searchNews, getHeadlines, openNewsPage });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
