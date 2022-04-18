import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "react-redux";
import {
  fetchProducts,
  setcartICount,
  setIsUpdate,
  setNoOfProd,
  setTotal,
} from "../redux/Action/ProductAction";
function Cart() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const baseURL = "http://interviewapi.ngminds.com";

  const [Storage, setstorage] = useState([]);
  const products = useSelector((state) => state.AllProducts.products);
  const data = useSelector((state) => state.AllProducts.data);
  const isSet = useSelector((state) => state.AllProducts.isSet);
  const cartICount = useSelector((state) => state.AllProducts.cartICount);
  const isupdate = useSelector((state) => state.AllProducts.isUpdate);
  const tot = useSelector((state) => state.AllProducts.tot);
  const noOfProd = useSelector((state) => state.AllProducts.noOfProd);
  console.log(cartICount);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //console.log(data);

  var newData = data.filter(function (elem, pos) {
    return data.indexOf(elem) == pos;
  });
  const counts = {};
  data.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const ar = Object.values(counts);
  // const [noOfProd, setNoOfProd] = useState(ar);
  //console.log(ar);
  useEffect(() => {
    dispatch(setNoOfProd(ar));
  }, []);
  //console.log(products);
  let sum = 0;
  products &&
    products.map((val, index) => {
      newData.map((v, i) => {
        return newData[i] === val._id
          ? (sum = sum + val.price * noOfProd[i])
          : "";
      });
    });
  console.log(sum);
  console.log(tot);
  //const [tot, setTotal] = useState(sum);
  // useEffect(() => {
  //   dispatch(setTotal(sum));
  // }, [tot]);
  console.log(tot);
  const removeProduct = (i) => {
    // console.log(i);
    data &&
      data.map((index) => {
        console.log(data.indexOf(i));
        return index == i ? data.splice(data.indexOf(i), 1) : "";
      });

    localStorage.setItem("cartItem", JSON.stringify(data));
    const a = newData.length - 1;
    localStorage.setItem("cartCount", a);
    dispatch(setcartICount(cartICount - 1));
    dispatch(setIsUpdate(!isupdate));
  };
  const incrementCnt = (i, price) => {
    // dispatch(
    //   setNoOfProd((prev) => prev.map((val, j) => (i === j ? prev[i] + 1 : val)))
    // );
    const x = noOfProd?.map((val, j) => (i === j ? noOfProd[i] + 1 : val));
    dispatch(setNoOfProd(x));
    console.log(price);
    console.log(noOfProd[i]);
    dispatch(setTotal((noOfProd[i] + 1) * price));
  };

  const decrementCnt = (i, price) => {
    // dispatch(
    //   setNoOfProd((prev) => prev.map((val, j) => (i === j ? prev[i] - 1 : val)))
    // );
    const x = noOfProd?.map((val, j) => (i === j ? noOfProd[i] - 1 : val));
    dispatch(setNoOfProd(x));
    console.log(noOfProd[i]);
    dispatch(setTotal((noOfProd[i] + 1) * price));
  };

  useEffect(() => {
    console.log(isSet);
    if (isSet) {
      products.products &&
        products.products.map((val, index) => {
          newData.map((v, i) => {
            return newData[i] === val._id
              ? dispatch(setTotal((prev) => prev + val.price * noOfProd[i]))
              : "";
          });
        });
    }
  }, []);
  console.log(tot);
  console.log(noOfProd);
  localStorage.setItem("products", JSON.stringify(newData));
  localStorage.setItem("quantity", JSON.stringify(noOfProd));
  //console.log(products);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span className="pull-right">
              <a href="cart.html">Cart {`(${cartICount})`}</a>
            </span>
          </h1>
          <hr />
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">MY CART (1)</div>
              <div className="panel-body">
                <form>
                  {newData &&
                    newData.map((index, val) => {
                      return (
                        <div className="row">
                          {products &&
                            products.map((i, v) => {
                              return (
                                <>
                                  {i._id == index ? (
                                    <>
                                      <div className="col-md-3">
                                        <img
                                          src={`${baseURL}/${i.image}`}
                                          width="100px"
                                          height="200px"
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        {i.name}
                                        <br />
                                        <i className="fa fa-inr"></i>
                                        {i.price}
                                      </div>

                                      <div className="col-md-3">
                                        quantity
                                        <br />
                                        <button
                                          type="button"
                                          onClick={() =>
                                            decrementCnt(val, i.price)
                                          }
                                          class="qtyminus"
                                          ng-disabled="qty<=0"
                                        >
                                          -
                                        </button>
                                        <input
                                          type="number"
                                          name="quantity"
                                          value={noOfProd[val]}
                                          // onClick={(e) => setValues(e, i.price)}
                                          className="qty"
                                          id={val}
                                          size="5px"
                                        />
                                        <button
                                          type="button"
                                          onClick={() =>
                                            incrementCnt(val, i.price)
                                          }
                                        >
                                          +
                                        </button>
                                      </div>
                                      {/* {setTotal(tot + quantity * i.price)} */}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </>
                              );
                            })}

                          <div className="col-md-3">
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => removeProduct(index)}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </form>
                <hr />
                <div className="row">
                  <div className="col-md-9">
                    <label className="pull-right">Amount Payable</label>
                  </div>
                  <div className="col-md-3 ">{tot == 0 ? sum : tot}</div>
                </div>
              </div>

              <div className="panel-footer">
                <Link to="/home">
                  <a href="index.html" className="btn btn-success">
                    Continue Shopping
                  </a>
                </Link>
                <Link to="/place-order">
                  <a
                    href="placeOrder.html"
                    className="pull-right btn btn-danger"
                  >
                    Place Order
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
