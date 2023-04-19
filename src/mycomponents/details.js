import styled from "styled-components";
import React from "react";
import { ProductConsumer } from "./context.js";
import { Link} from "react-router-dom";
import { ButtonContainer } from "./navbar_styles.js";
const Details = () => {
  return (
    <DetailsWrapper>
      <ProductConsumer>
        {(value) => {
          let temp = value.detailProduct;
          if(value.detailProduct._id === undefined){
            temp = JSON.parse(localStorage.getItem('detail'));
          }
          else{
            localStorage.setItem('detail',JSON.stringify( value.detailProduct));
          }
          // console.log(value.detailProduct._id,"Asd");
          const { id, _id, title, price, composition, company, info, inCart } = temp;
          return (
            <div className="container py-5 text-capitalize">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5 title">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 textcapitalize my-3">
                  <img
                    src={process.env.REACT_APP_BASE_URL+"products/" + _id + "/avatar"}
                    className="img-fluid"
                    alt="product"
                  />
                </div>
              </div>
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                  <h3>{composition}</h3>
                  <h2>
                    <strong>₹ {price}</strong>
                  </h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Desciption :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/product">
                      <StyledButtonContainer>
                        back to products
                      </StyledButtonContainer>
                    </Link>
                    <StyledButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </StyledButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  display: flex !important;
  justify-items: left;
  background: white;
  .title {
    display: block;
    margin: auto !important;
    font-weight: bolder !important;
    text-decoration: underline;
    color: black !important;
  }
  & row {
    width: 200px;
  }
  img {
    width: 40vh;
    height: 40vh;
    border: solid 4px Black;
  }
  img:hover {
    position: relative;
    transform: scale(1.05);
  }
  background-size: cover;
`;

const StyledButtonContainer = styled(ButtonContainer)`
  color: black;
  border: 2px solid black;
  margin: 1px;
  padding: 0.3rem !important;
  margin-right: 3rem;
  background: black;
  color: white;
  font-weight: bold;
  &:hover {
    color: white;
    background: grey;
  }
`;
export default Details;
