import { combineReducers } from "redux";
import { createStore } from "redux";
// ? Reducers
import CartReducer from "./reducers/CartReducer/CartReducer";
import AuthReducer from "./reducers/AuthReducer/AuthReducer";
const rootReducer = combineReducers({
  CartReducer,
  AuthReducer,
});

const store = createStore(rootReducer);

export { store };
