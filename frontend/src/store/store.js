import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import reservationReducer from "./reducers/reservation";
import profileReducer from "./reducers/profile";

const rootReducer = combineReducers({
  auth: authReducer,
  reservation: reservationReducer,
  profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
