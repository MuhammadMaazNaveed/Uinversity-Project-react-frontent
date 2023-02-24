import React, { useEffect, useState } from "react";
import edit from "../images/edit pen.png";
import bin from "../images/bin.png";
import deletebox from "../images/deletebox.png";
// import "./App.css";
import "../component/css/Deletebox.css";
import { deleteProduct, getProducts } from "./services/productApi";
import { Link } from "react-router-dom";
import Dashboardnavbar from "./partials/Dashboardnavbar";

const Dashboardproduct = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProducthandler = async (id) => {
    await deleteProduct(id);
    getAllProducts();
  };
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

              <div className="row mb-4 all-update">
                <div className="col-md-1 all">All</div>
                <div className="col-md-2 update">Update</div>
              </div>

              <div className="col-md-12 mt-3 list">
                <table>
                  <tr>
                    <th></th>
                    <th></th>
                    <th colSpan={1}>Image</th>
                    <th>Product Name</th>
                    <th>Items</th>
                    <th>Price</th>
                  </tr>
                  {products.map((curEle) => {
                    return (
                      <tr key={curEle._id}>
                        <td>
                          <Link to={`/edit/${curEle._id}`}>
                            <img src={edit} alt="" width="12px" />
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteProducthandler(curEle._id)}
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <img src={bin} alt="" width="12px" />
                          </button>
                        </td>
                        <td>{curEle.img}</td>
                        <td>{curEle.name}</td>
                        <td>{curEle.items}</td>
                        <td>Rs: {curEle.price}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <section>
            <div class="pop-up_section_delete">
              <div class=" container-delete">
                <div class="row">
                  <div class="col-md-6 img">
                    <img src={deletebox} alt="" />
                  </div>
                  <div class="col-md-6 text_area">
                    <div class="mt-5 confirm_delete">
                      Are you Sure you want to delete this Product
                    </div>
                    <div class="mt-5 text-center">
                      <a href="/">
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-secondary-delete text-white px-4 py-2"
                        >
                          DELETE
                        </button>
                      </a>
                      <a href="#">
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-outline-secondary-delete ml-1 px-4 py-2"
                        >
                          Cancel
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboardproduct;
