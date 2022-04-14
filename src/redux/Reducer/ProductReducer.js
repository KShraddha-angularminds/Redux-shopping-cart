import { ActionTypes } from "../Constants/ActionTypes";
const initialState = {
  products: [],
};

export const setProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
