import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
  combineReducers,
} from "redux";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { logger } from "./middlewares/";

import App from "./App.jsx";

import * as reducers from "./redux/reducers/index.js";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware, promise);
const composedEnhancers = composeAlt(middlewareEnhancer);

const rootReducer = (state, action) => {
  return combineReducers(reducers)(state, action);
};

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
