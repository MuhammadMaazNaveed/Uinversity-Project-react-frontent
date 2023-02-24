import React, { useState, useEffect } from "react";
import Vector10 from "../images/Vector (10).png";
import Vector12 from "../images/Vector (12).png";
import Vector11 from "../images/Vector (10) 11.png";
import "./App.css";
import { getEmployees } from "./services/employeeApi";
import { getProducts } from "./services/productApi";
import Dashboardnavbar from "./partials/Dashboardnavbar";

const Dashboard = () => {
  const [employee, setEmployee] = useState([]);
  const [products, setProducts] = useState([]);
  const getAllEmployees = async () => {
    const response = await getEmployees();
    setEmployee(response.data);
  };
  const getAllProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };
  useEffect(() => {
    getAllEmployees();
    getAllProducts();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Dashboardnavbar />
          <div className="col-md-9">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-md-4 mt-4 text-white h5">
                  Dashboard Overview
                </div>
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
              <div className="row mt-5">
                <div className="col-md-4 box box_1">
                  <div className="row text-white">
                    <div className="col-6 box_inside_1 mt-3 mb-3">
                      <div className="products">Live Products</div>
                      <div className="no-show">12</div>
                      <div className="add_products">
                        <a href="/addProduct">Add products</a>
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <img src={Vector10} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 box box_2">
                  <div className="row  text-white">
                    <div className="col-6 box_inside_2 mt-3">
                      <div className="Current_Employees">Current Employees</div>
                      <div className="no-show">5</div>
                      <div className="Update_Emplyees">
                        <a href="/addemployee">Update Emplyees</a>
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <img src={Vector12} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 box box_3">
                  <div className="row text-white">
                    <div className="col-6 box_inside_3 mt-3">
                      <div className="Total_Sales_Toaday">
                        Total Sales Toaday
                      </div>
                      <div className="no-show">15,000 Rs</div>
                      <div className="perc_show">
                        <i className="fa-solid fa-up-right"></i>
                        <span>9.3%</span> from yesterday
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <img src={Vector11} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 ">
                <div className="col-md-4 box box_4 ">
                  <div className="row text-white">
                    <div className="col-6 box_inside_3 mt-3">
                      <div className="new_messages">New Messages</div>
                      <div className="show_message">12</div>
                    </div>
                    <div className="col-6 mt-3">Today</div>
                  </div>
                </div>

                <div className=" col-lg-8 col-md-8 box box_5">
                  <div className="row text-white mb-2">
                    <div className="col-md-6 mt-3 font-weight-bold">
                      Employee
                    </div>
                    <div className="col-md-6  mt-3 update">Update</div>
                  </div>

                  <div className="row mt-3 employee_list  list-unstyled">
                    <table>
                      <tr>
                        <th className="hello">Name</th>
                        <th className="hello">Gender</th>
                        <th className="hello">Email</th>
                        <th className="hello">Age</th>
                      </tr>
                      {employee.map((curEle) => {
                        return (
                          <tr>
                            <td className="hy">{curEle.name}</td>
                            <td className="hy">{curEle.gender}</td>
                            <td className="hy">{curEle.email}</td>
                            <td className="hy">{curEle.age}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                </div>

                <div className="col-md-12 mt-3 box">
                  <div className="row">
                    <div className=" col-md-8 my-3 sellingproduct">
                      Best Selling Products
                    </div>
                    <div className="col-md-2 my-3 filterby">Filter By</div>
                    <div className="col-md-2 my-3 sortby">SortBy:Relevance</div>
                  </div>
                  <div className="row product_detail list-unstyled">
                    <table>
                      <tr>
                        <th className="helloworld">IMAGE</th>
                        <th className="helloworld">PRODUCT NAME</th>
                        <th className="helloworld">PRICE</th>
                        <th className="helloworld">TOTAL SALES</th>
                        <th className="helloworld">STOCK</th>
                        <th className="helloworld">STATUS</th>
                      </tr>
                      {products.map((curEle) => {
                        return (
                          <tr>
                            <td className="hi">
                              <img src={curEle.image} alt="" width="55px" />
                            </td>
                            <td className="hi">{curEle.name}</td>
                            <td className="hi">{curEle.price}</td>
                            <td className="hi">48</td>
                            <td className="hi">{curEle.items}</td>
                            <td className="hi stock">In Stock</td>
                            <td className="hi">
                              <i className="bi bi-three-dots-vertical"></i>
                            </td>
                          </tr>
                        );
                      })}
                    </table>
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

export default Dashboard;
