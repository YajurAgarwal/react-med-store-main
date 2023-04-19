import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context.js";
import PropTypes from "prop-types";
class Product extends Component {
  render() {
    const { _id,id, title,  price, inCart } = this.props.product;
    return (
      <Productwrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5" 
                onClick={() => 
                  value.handleDetail(id)
                }
              >
                <Link to="/details">
                  <img src={process.env.REACT_APP_BASE_URL+"products/" + _id+ "/avatar"} alt="product" className="card-img-top"></img>
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {/* include the cart icon if already in cart or we will use the gadi wala option */}
                  {inCart ? (
                    <p className="text-capitalize mb-0 p-cart" disabled>
                      {""}
                      in inCart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus trolley"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className=" font-italix mb-0">
              <span className="mr-1">₹</span>
              {price}
            </h5>
          </div>
        </div>
      </Productwrapper>
    );
  }
}

const Productwrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  .card {
    border: transparent;
    border-top : 0.2rem solid black;
    transition: all 1s linear;
  }
  .card-footer {
    font-weight: bolder;
    background-color: black;
    color: white !important;
    border-top: tranparent;
  }
  &:hover {
    border: 0.03rem solid grey;
    box-shadow: 2px 2px 5px 0px grey;
    .card-footer {
      border: 2px solid black;
      h5 {
        color: black;
        font-weight: bold;
      }
      font-size: 20px;
      color: black !important;
      background-color: blanchedalmond;
    }
  }
  .img-container {
    height: 220px;
    width: 220px;
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s linear;
  }
  .img-container:hover .card-img-top {
    position: relative;
    transform: scale(1.2);
  }
  .cart-btn {
    padding : 0.3 rem; 
    position: absolute;
    bottom: 0px;
    right: 2px;
    color : white;
    background-color: black;
    border: none;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.1s linear;
  }
  .cart-btn:hover {
    background-color: gray;
    cursor: pointer;
    font-weight : bolder;
  }
  .trolley {
    // filter: invert();
  }
`;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
