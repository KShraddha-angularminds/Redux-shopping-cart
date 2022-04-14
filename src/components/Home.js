import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../redux/Action/ProductAction";

function Home() {
  const dispatch = useDispatch();
  const baseURL = "http://interviewapi.ngminds.com";
  const products = useSelector((state) => state.AllProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);
  return (
    <div>
      <div class="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span class="pull-right">
            <button>Cart </button>
          </span>
        </h1>
        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div style={{ margin: "25px 0;" }}>
              <label for="" class="control-label">
                Sort by:
              </label>
              <select name="" id="">
                <option value="default">Default</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div class="row">
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

                      <button class="btn btn-warning">Add to Cart</button>
                    </div>
                    <hr /> 

         </div>
                </>
              );
            })}
        </div> */}
        <hr />
        <div class="row">
          <div class="col-sm-8">
            {/* <Pagination
              currentPage={initialX}
              entriesPerPage={perPage}
              prevPage={prevPage}
              nextPage={nextPage}
              setPageCount={setPageCount}
              handlePageClick={handlePageClick}
              arrLength={arrLength}
              changeX={changeX}
              active={active}
              setActive={setActive}
            /> */}
          </div>
          <div class="col-sm-4 text-right">
            <div style={{ margin: "25px 0" }}>
              <label for="" class="control-label">
                Items Per Page:
              </label>
              <select name="" id="">
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
