import { applyMiddleware, createStore } from "redux";
import { reducer } from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(reducer, applyMiddleware(thunk));
