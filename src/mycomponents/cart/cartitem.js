import React from "react";

const Cartitem = ({ item, value }) => {
  const { id,_id, title, price, total, count } = item;
  const { increament, decreament, removeItem } = value;
  return (
    <>
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={process.env.REACT_APP_BASE_URL+"products/" + _id+ "/avatar"}
            className="img-fluid"
            style={{ width: "5rem", height: "5rem" }}
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product :</span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price :</span>
          {price}
        </div>
        {/* creating inc and dec buttons */}
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decreament(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increament(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">
          <strong>Item total : ₹</strong></span>{total}
        </div>
      </div>
    </>
  );
};

export default Cartitem;
