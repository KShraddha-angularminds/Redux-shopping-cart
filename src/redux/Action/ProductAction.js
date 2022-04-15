import axios from "axios";
import { ActionTypes } from "../Constants/ActionTypes";

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("http://interviewapi.ngminds.com/api/getAllProducts")
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS,
          payload: res.data.products,
        });
        dispatch(setArrLength(res.data.products.length));
        dispatch(setIsSet(true));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setInitialX = (x) => {
  return {
    type: ActionTypes.INITIAL_X,
    payload: x,
  };
};

export const setPerPage = (page) => {
  return {
    type: ActionTypes.PER_PAGE,
    payload: page,
  };
};

export const setSort = (option) => {
  return {
    type: ActionTypes.SET_SORT,
    payload: option,
  };
};

export const setActive = (active) => {
  return {
    type: ActionTypes.SET_ACTIVE,
    payload: active,
  };
};

export const setPageCount = (cnt) => {
  return {
    type: ActionTypes.PAGE_COUNT,
    payload: cnt,
  };
};

export const setArrLength = (len) => {
  return {
    type: ActionTypes.ARRAY_LENGTH,
    payload: len,
  };
};

export const setData = (data) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: data,
  };
};
export const setCartItemCnt = (cnt) => {
  return {
    type: ActionTypes.SET_CART_ITEM,
    payload: cnt,
  };
};
export const setIsSet = (flag) => {
  return {
    type: ActionTypes.SET_IS_SET,
    payload: flag,
  };
};
