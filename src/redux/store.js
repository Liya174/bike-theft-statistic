import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer.js";
import theftMessageReducer from "./theft-message-reducer.js";
import officersReducer from "./officers-reducer.js";

const reducers = combineReducers({
  theftMessage: theftMessageReducer,
  auth: authReducer,
  officers: officersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
