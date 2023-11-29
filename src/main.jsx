import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import { logger } from "./middlewares/";

import App from "./App.jsx";
import "./index.css";
import { moviesReducer } from "./redux/reducers/movies.reducer.js";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware, promise);
const composedEnhancers = composeAlt(middlewareEnhancer);

const store = createStore(moviesReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
