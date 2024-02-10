import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "./middlewares/logger";
import test from "./middlewares/test";

const store = createStore(reducer, applyMiddleware(logger, test));

export default store;
