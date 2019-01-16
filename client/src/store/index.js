import { createBrowserHistory } from "history";

import { createStore, applyMiddleware, compose } from "redux";

import { routerMiddleware } from "connected-react-router";

import logger from "redux-logger";

import thunk from "redux-thunk";

import createRootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const middleware = [thunk, logger];

export default createStore(
  createRootReducer(history), // root reducer with router state
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ...middleware
    )
  )
);
