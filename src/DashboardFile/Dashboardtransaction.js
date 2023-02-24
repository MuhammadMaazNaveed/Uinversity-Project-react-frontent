import React from "react";
import Dashboardnavbar from "./partials/Dashboardnavbar";

const Dashboardtransaction = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Dashboardnavbar />
          <div className="col-md-9">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-md-4 mt-4 text-white h5">Transaction</div>
                <div className="col-md-6">
                  <div className="input-group rounded">
                    <a className="bi bi-search ml-5 mt-4" href="/">
                      {" "}
                    </a>
                    <input
                      type="search"
                      className="form-control mt-3 rounded pl-5 pb-2"
                      placeholder="Search for anything"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <div className="bell ml-3 text-center">
                      <i className="bi bi-bell"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-4 all-update">
                <div className="col-md-2 all ">
                  <a className="text-dark" href="/">
                    <u>Order Detail</u>
                  </a>
                </div>
              </div>

              <div className="col-md-12 mt-3 list">
                <div className="h1 text-center pt-4 pb-2">Order Details</div>
                <hr />
                <div className="row mt-4">
                  <div className="col-md-4 h3 ml-5">Customer</div>
                  <div className="col-md-6 ml-5">
                    <form action="" method="post">
                      <div className="col_3 pb-4 second-input">
                        <input
                          className="form-control"
                          type="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col_3 pb-4 second-input">
                        <input
                          className="form-control"
                          type="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col_3 second-input">
                        <input
                          className="form-control"
                          type="name"
                          id="address"
                          placeholder="Address"
                        />
                      </div>
                    </form>
                  </div>

                  <hr />

                  <div className="col-md-4 h3 ml-5">Product</div>
                  <div className="col-md-6 ml-5">
                    <form action="" method="post">
                      <div className="col_3 pb-4 second-input">
                        <input
                          className="form-control"
                          type="name"
                          id="productname"
                          placeholder="Product Name"
                        />
                      </div>
                      <div className="col_3 pb-4 second-input">
                        <input
                          className="form-control"
                          type="number"
                          id="price"
                          placeholder="Price"
                        />
                      </div>
                      <div className="col_3 second-input">
                        <input
                          className="form-control"
                          type="number"
                          id="address"
                          placeholder="No of Items"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12 text-center mb-5 mt-3 mt-5">
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardtransaction;
