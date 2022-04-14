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
