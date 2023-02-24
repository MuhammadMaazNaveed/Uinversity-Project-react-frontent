import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import jacket from "../images/jacket mens.jpg";
import mensjacket from "../images/mens jacket 2.jpg";
import menswere from "../images/mens were.jpg";
import greentshirt from "../images/green t shirt men.jpg";
import womenswere from "../images/womens were.jpg";
import mensshirt from "../images/mens shirt 2.jpg";
import baggytshirt from "../images/baggytshirtmen.jpg";
import blueshirt from "../images/blue shirt womens.jpg";
import "./Product.css";
const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="container bg-dark">
        <div className="row">
          <div className="col-md-12 text-white h4 mt-4 ml-3">Winter Sale</div>
          <div className="col-md-12 mt-3 mb-4 wintersaletext">
            Slash winter Sales begins . Get up to 80% Discount on all products{" "}
            <span className="text-white">
              <b>Read More</b>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-10">
            <b>Showing 1 - 20</b> out of 100 Products
          </div>
          <div className="col-md-2">
            Sort by: <b>New Arrival</b>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 productbackground1">
            <div className="price_column mb-5 mt-5 list-unstyled">
              <div className="menu mb-3">
                <b>PRICES</b>
              </div>
              <div className="row">
                <div className="col-md-6 range">Range</div>
                <div className="col-md-6">
                  <b>1200 - 1300</b>
                </div>
                <div className="col-md-12">
                  <label for="customRange1" className="form-label"></label>
                  <input
                    type="range"
                    className="form-range mt-4"
                    id="customRange1"
                  />
                </div>
              </div>
            </div>

            <div className="check_list mb-3">
              <b>MENS</b>
              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Shirt
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Jeans
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Jacket
                </label>
              </div>
            </div>

            <div className="check_list mt-5 mb-3">
              <b> WOMENS</b>
              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Dresses
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Tops
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Stiched
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Vintage
                </label>
              </div>
            </div>
            <div className="check_list mt-5">
              <b>SIZE</b>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Large
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="album">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={menswere} alt="" />

                        <div className="card-body">
                          <p className="card-text">Mens Grey Sweatshirt </p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6 product_button">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={jacket} alt="" />

                        <div className="card-body">
                          <p className="card-text">Mens Bomber Jacket</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={mensjacket} alt="" />
                        <div className="card-body">
                          <p className="card-text">Mens Denim Jacket</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={menswere} alt="" />
                        <div className="card-body">
                          <p className="card-text">Mens classNameic Tee</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={blueshirt} alt="" />
                        <div className="card-body">
                          <p className="card-text">Mens Check Shirts</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={womenswere} alt="" />
                        <div className="card-body">
                          <p className="card-text">
                            Womens Premium Stiched Kurta
                          </p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={blueshirt} alt="" />
                        <div className="card-body">
                          <p className="card-text">
                            Womens Unstiched premium kurta
                          </p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img
                          className="card-img-top"
                          src={greentshirt}
                          alt=""
                        />
                        <div className="card-body">
                          <p className="card-text">Mens Long Sleeves Shirts</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img
                          className="card-img-top"
                          src={baggytshirt}
                          alt=""
                        />
                        <div className="card-body">
                          <p className="card-text">Mens Black Shirts</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={womenswere} alt="" />
                        <div className="card-body">
                          <p className="card-text">Unisex Denim Jacket</p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src={mensshirt} alt="" />
                        <div className="card-body">
                          <p className="card-text"></p>
                          <div className="row mt-4">
                            <div className="col-md-6">
                              <div className="original-price">PKR 1200</div>
                              <div className="discount-price">
                                <del>1500</del>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="no-orders">24 orders</div>
                              <a
                                href="/"
                                className="btn btn-primary bg-dark mt-4"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
