import { ActionTypes } from "../Constants/ActionTypes";

const x = JSON.parse(localStorage.getItem("cartItem"));
const cartCount = JSON.parse(localStorage.getItem("cartCount"));

const initialState = {
  products: [],
  initial_x: 1,
  per_page: 5,
  page_sort: "Default",
  active: 1,
  page_count: 0,
  arr_length: 0,
  data: x ? x : [],
  isSet: false,
  cartICount: cartCount || 0,
  isUpdate: false,
  noOfProd: [],
  tot: 0,
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
    case ActionTypes.INITIAL_X:
      return {
        ...state,
        initial_x: action.payload,
      };
    case ActionTypes.PER_PAGE:
      return {
        ...state,
        per_page: action.payload,
      };
    case ActionTypes.SET_SORT:
      return {
        ...state,
        page_sort: action.payload,
      };
    case ActionTypes.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case ActionTypes.SET_PAGE_COUNT:
      return {
        ...state,
        page_count: action.payload,
      };
    case ActionTypes.ARRAY_LENGTH:
      return {
        ...state,
        arr_length: action.payload,
      };
    case ActionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.SET_CART_ITEM:
      return {
        ...state,
        cartItemCnt: action.payload,
      };
    case ActionTypes.SET_CART_COUNT:
      return {
        ...state,
        cartICount: action.payload,
      };
    case ActionTypes.SET_IS_UPDATE:
      return {
        ...state,
        isUpdate: action.payload,
      };
    case ActionTypes.SET_NO_OF_PRODUCT:
      return {
        ...state,
        noOfProd: action.payload,
      };
    case ActionTypes.SET_TOTAL:
      return {
        ...state,
        tot: action.payload,
      };
    default:
      return state;
  }
};
