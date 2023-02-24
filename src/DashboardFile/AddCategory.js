import React from "react";

const AddCategory = () => {
  return (
    <>
      <div className="container-fluid mt-2">
        <div className="form-group">
          <label className="text-secondary">Add Category</label>
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
      </div>
    </>
  );
};

export default AddCategory;
