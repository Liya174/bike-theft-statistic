import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import theftMessageReducer from "./theft-message-reducer";
import workersReducer from "./workers-reducer";

const reducers = combineReducers({
  theftMessage: theftMessageReducer,
  auth: authReducer,
  workers: workersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
