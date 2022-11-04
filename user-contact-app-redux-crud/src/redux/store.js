import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";

import rootReducer from "./root-reducer";

const thunk = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    thunk.push(logger);
}

const store = legacy_createStore(rootReducer, applyMiddleware(...thunk));

export default store;