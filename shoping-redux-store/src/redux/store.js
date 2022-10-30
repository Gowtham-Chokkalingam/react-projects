import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer/index";

import thunk from "redux-thunk";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducers, createComposer(applyMiddleware(thunk)));


export default store;
