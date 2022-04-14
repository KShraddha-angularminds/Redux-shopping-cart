import { combineReducers } from "redux";
import { setProductReducer } from "./ProductReducer";
export const reducer = combineReducers({
  AllProducts: setProductReducer,
});
