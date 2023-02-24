import React, { useState } from "react";
import logo from "../../images/logo (1).png";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getProductByfilter } from "../../redux/actions/filterActions.js";
const Navbar = () => {
  // const dispatch = useDispatch();
  // const cartState = useSelector((state) => state.cartReducer);
  // const [text, setText] = useState("");
  // const handleSearch = (e) => {
  //   setText(e.target.value);
  //   dispatch(getProductByfilter({ type: "text", query: e.target.value }));
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="#">
          <img src={logo} alt="" width="50%" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/product">
                Mens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Womens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Kids
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Winter
              </NavLink>
            </li>
          </ul>
          <ul className="list-unstyled d-flex">
            <li className="ms-3 mr-3 mt-1">
              <a className="bi bi-person" href="/">
                {" "}
              </a>
            </li>
            <li className="ms-3 mr-3 mt-1">
              <a className="bi bi-bag" href="/">
                {" "}
              </a>
            </li>
            <li>
              <div className="input-group rounded">
                <a className="bi bi-search mr-1 mt-4" href="/">
                  {" "}
                </a>
                <input
                  type="search"
                  className="form-control mt-3 rounded"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
