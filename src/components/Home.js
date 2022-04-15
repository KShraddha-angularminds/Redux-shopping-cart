import React, { useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import {
  fetchProducts,
  setActive,
  setArrLength,
  setCartItemCnt,
  setData,
  setInitialX,
  setPerPage,
  setProducts,
  setSort,
} from "../redux/Action/ProductAction";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const baseURL = "http://interviewapi.ngminds.com";
  const x = JSON.parse(localStorage.getItem("cartItem"));
  const products = useSelector((state) => state.AllProducts.products);
  const initial_x = useSelector((state) => state.AllProducts.initial_x);
  const per_page = useSelector((state) => state.AllProducts.per_page);
  const page_sort = useSelector((state) => state.AllProducts.page_sort);
  const active = useSelector((state) => state.AllProducts.active);
  const page_count = useSelector((state) => state.AllProducts.page_count);
  const arr_length = useSelector((state) => state.AllProducts.arr_length);
  const data = useSelector((state) => state.AllProducts.data);
  const cartItemCnt = useSelector((state) => state.AllProducts.cartItemCnt);
  // const [data, setData] = useState(x ? x : []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(data);
  let endIndex = initial_x * per_page;
  const startIndex = endIndex - per_page;

  const arr = [x];
  console.log(data);
  const add2Cart = (id) => {
    dispatch(setData([...data, id]));
  };

  const changePerPage = (e) => {
    dispatch(setPerPage(parseInt(e.target.value)));
  };

  const changeSort = (e) => {
    dispatch(setSort(e.target.value));
  };
  useEffect(() => {
    console.log(page_sort);
    if (page_sort == "default") {
      dispatch(fetchProducts());
      console.log(products.length);
      dispatch(setArrLength(products.length));
      // setInitialX(1);
    } else if (page_sort == "Low to High") {
      const updatedProd =
        products &&
        products.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price) ? 1 : -1
        );
      dispatch(setProducts([...updatedProd]));
      //  setInitialX(1);
    } else if (page_sort == "High to Low") {
      const updatedProd =
        products &&
        products.sort((a, b) =>
          parseInt(a.price) < parseInt(b.price) ? 1 : -1
        );
      dispatch(setProducts([...updatedProd]));
      //setInitialX(1);
    }
  }, [page_sort]);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(data));
    const temp = JSON.parse(localStorage.getItem("cartItem"));
    // console.log(temp);

    const newArray = [
      ...new Set(
        temp &&
          temp.filter((value, index, self) => self.indexOf(value) !== index)
      ),
    ];
    var newArr = data.filter(function (elem, pos) {
      return temp.indexOf(elem) == pos;
    });
    console.log(temp);
    console.log(newArr);
    dispatch(setCartItemCnt(newArr.length));
  }, [data]);
  localStorage.setItem("cartCount", cartItemCnt);

  const changeX = (no) => {
    dispatch(setInitialX(no));
  };
  const prevPage = () => {
    if (initial_x > 1) {
      dispatch(setInitialX(initial_x - 1));
      dispatch(setActive(initial_x - 1));
    }
  };
  const nextPage = () => {
    // console.log(initialX);
    // console.log(pageCount);
    if (initial_x < page_count) {
      dispatch(setInitialX(initial_x + 1));
      dispatch(setActive(initial_x + 1));
    }
  };
  return (
    <div>
      <div class="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span class="pull-right">
            <Link to={"/cart"}>
              <button>Cart {`(${cartItemCnt})`}</button>
            </Link>
          </span>
        </h1>
        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div style={{ margin: "25px 0;" }}>
              <label for="" class="control-label">
                Sort by:
              </label>
              <select name="" id="" onClick={(e) => changeSort(e)}>
                <option value="default">Default</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          {products &&
            products.slice(startIndex, endIndex).map((index, val) => {
              return (
                <>
                  <div class="col-md-3">
                    <div
                      class="bg-info"
                      style={{
                        backgroundColor:
                          val == 0
                            ? "#d9edf7"
                            : val % 4 === 0
                            ? "#d9edf7"
                            : val % 2 === 0
                            ? "#fcf8e3"
                            : val - 1 == 0
                            ? "#dff0d8"
                            : (val - 1) % 4 == 0
                            ? "#dff0d8"
                            : (val - 1) % 2 === 0
                            ? "#f2dede"
                            : "",
                      }}
                    >
                      <img
                        src={`${baseURL}/${index.image}`}
                        width="100"
                        height="200"
                      />
                      <br />
                      <br />
                      <p>{index.name}</p>
                      <p>
                        <i class="fa fa-inr"></i>
                        {index.price}
                      </p>

                      <button
                        class="btn btn-warning"
                        onClick={() => add2Cart(index._id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <hr />
                  </div>
                </>
              );
            })}
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-8">
            <Pagination
              currentPage={initial_x}
              entriesPerPage={per_page}
              prevPage={prevPage}
              nextPage={nextPage}
              changeX={changeX}
              arrLength={arr_length}
              active={active}
            />
          </div>
          <div class="col-sm-4 text-right">
            <div style={{ margin: "25px 0" }}>
              <label for="" class="control-label">
                Items Per Page:
              </label>
              <select name="" id="" onClick={(e) => changePerPage(e)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
