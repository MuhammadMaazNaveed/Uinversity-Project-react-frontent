import React from "react";
import Dashboardnavbar from "./partials/Dashboardnavbar";

const DashboardOrder = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <Dashboardnavbar />
          <div class="col-md-9">
            <div class="container-fluid mt-4">
              <div class="row">
                <div class="col-md-4 mt-4 text-white h5">Orders</div>
                <div class="col-md-6">
                  <div class="input-group rounded">
                    <a class="bi bi-search ml-5 mt-4" href="#"></a>
                    <input
                      type="search"
                      class="form-control mt-3 rounded pl-5 pb-2"
                      placeholder="Search for anything"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <div class="bell ml-3 text-center">
                      <i class="bi bi-bell"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-4 all-update">
                <div class="col-md-2 update">
                  <a href="">Pending Orders</a>
                </div>
              </div>

              <div class="col-md-12 mt-3 list">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Order Id</th>
                    <th>Product</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Areeb Ahmed</td>
                    <td>001</td>
                    <td>Mens Denim Jacket</td>
                    <td>Pak Colony</td>
                    <td>areebshapater@gmail.com</td>
                    <td>Rs 450.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                  <tr>
                    <td>Ali Ausajaa</td>
                    <td>002</td>
                    <td>Mens Boomer</td>
                    <td>Nazimabad</td>
                    <td>ausaja110@gmail.com</td>
                    <td>Rs 3250.00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOrder;
