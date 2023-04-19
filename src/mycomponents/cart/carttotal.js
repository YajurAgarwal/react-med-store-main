import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Carttotal = ({ value }) => {
  const { cartsubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <>
    <Hr></Hr>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
            <Link to="/product">
              <Button
                className="btn text-uppercase my-3 mx-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart 
              </Button>
            </Link>
            <h5>
                <span className="text-title">
                    subtotal : 
                </span>
                <strong>₹{cartsubTotal}</strong>
            </h5>

            <h5>
                <span className="text-title">
                    tax : 
                </span>
                <strong>₹{cartTax}</strong>
            </h5>

            <h5>
                <span className="text-title">
                    subtotal : 
                </span>
                <strong>₹{cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
const Hr = styled.hr`
border : 1px solid black;`

const Button = styled.button`
  color: red;
  border: 0.2rem solid red;
`;

export default Carttotal;
