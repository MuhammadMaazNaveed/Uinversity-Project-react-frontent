import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducer/cartReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});
const intialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware)
);
export default store;
