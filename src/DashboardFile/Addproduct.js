import React, { useState, useEffect } from "react";
import { getCategorys } from "../api/category";
const Addproduct = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState();
  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDesc: "",
    productPrice: "",
    productCategory: "",
    productQty: "",
  });
  const {
    productImage,
    productName,
    productDesc,
    productPrice,
    productCategory,
    productQty,
  } = productData;
  useEffect(() => {
    loadCategory();
  }, [loading]);
  const handleProductChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.values,
    });
  };
  const handleProductImage = (e) => {
    console.log(e.target.file[0]);
    setProductData({
      ...productData,
      [e.target.name]: e.target.file[0],
    });
  };
  const loadCategory = async () => {
    await getCategorys()
      .then((response) => {
        setcategories(response.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* {JSON.stringify(productData)} */}
      <div className="container-fluid mt-2">
        <div className="custom-file mb-2">
          <input
            type="file"
            className="custom-file-input"
            name="productImage"
            value={productImage}
            onChange={handleProductImage}
          />
          <label className="custom-file-label">Choose File</label>
        </div>
        <div className="form-group">
          <label className="text-secondary">Name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            value={productName}
            onChange={handleProductChange}
          />
        </div>
        <div className="form-group">
          <label className="text-secondary">Description</label>
          <textarea
            className="form-control"
            name="productDesc"
            value={productDesc}
            rows="3"
            onChange={handleProductChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-secondary">Price</label>
          <input
            type="text"
            className="form-control"
            name="productPrice"
            value={productPrice}
            onChange={handleProductChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="text-secondary">Category</label>
            <select
              className="custom-select mr-sm-2"
              name="productCategory"
              onChange={handleProductChange}
              value={productCategory}
            >
              <option value="">Choose one...</option>
              {/* {categories.map((c) => { */}
              {/* return ( */}
              {/* <option key={c._id} value={c._id}> */}
              {/* {c.category} */}
              {/* </option> */}
              {/* ); */}
              {/* })} */}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="text-secondary">Quantity</label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="1000"
              name="productQty"
              value={productQty}
              onChange={handleProductChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
