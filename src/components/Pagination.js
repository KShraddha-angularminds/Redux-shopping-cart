import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActive, setPageCount } from "../redux/Action/ProductAction";
function Pagination({
  currentPage,
  entriesPerPage,
  prevPage,
  nextPage,
  arrLength,
  changeX,
  active,
}) {
  const dispatch = useDispatch();
  let arr = [];
  let property;
  const renderProducts = [];
  for (let i = 1; i <= Math.ceil(arrLength / entriesPerPage); i++) {
    renderProducts.push(i);
  }
  console.log(arrLength);
  const activePage = (no) => {
    // console.log(no);
    dispatch(setActive(no));
    property = document.getElementById(no);
    console.log(property);
    property.classList.add("active-page");
    console.log(document.getElementById(no));
    var all_pages = document.getElementsByClassName("pages");
    console.log(all_pages);
    for (let i = 0; i < all_pages.length; ++i) {
      if (
        all_pages[i].classList.contains("active-page") &&
        all_pages[i] != property
      ) {
        all_pages[i].classList.remove("active-page");
      } //end if
    }
    changeX(no);
  };
  console.log(active);
  useEffect(() => {
    console.log(renderProducts.length);
    dispatch(setPageCount(renderProducts.length));
  });
  //console.log(renderProducts);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {
            <li className="page-item pages">
              <a className="page-link" onClick={prevPage}>
                Previous
              </a>
            </li>
          }
          {renderProducts &&
            renderProducts.map((no, i) => {
              console.log(active);
              return (
                <li className="page-item pages ">
                  <a
                    className={no == active ? "active" : ""}
                    id={no}
                    onClick={() => activePage(no)}
                  >
                    {no}
                  </a>
                </li>
              );
            })}

          {/* <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li> */}

          {
            <li className="page-item">
              <a className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          }
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Pagination;
