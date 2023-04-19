import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./navbar_styles.js";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { _id, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md col-lg-4 text-center text-capitalize p-5">
                      <h5>Item Added to the card</h5>
                      {/* {console.log("asdsad")} */}
                      <img src={process.env.REACT_APP_BASE_URL+"products/" + _id+ "/avatar"} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ₹{price}</h5>
                      <Link to='/product'>
                          <StyledButtonContainer onClick={()=>closeModal()}>
                              Home
                          </StyledButtonContainer>
                      </Link>
                      <Link to='/cart'>
                          <StyledButtonContainer onClick={()=>closeModal()}>
                              go to cart
                          </StyledButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position : fixed;
top:0;
left:0;
right:0;
bottom:0;
background : none;
display : flex;
align-items: center;
background: rgba(0,0,0,0.3);
justify-content:center;
#modal{
    background : white;
    img{
        width : 15rem;
        height: 15rem;
    }
}
`;
const StyledButtonContainer = styled(ButtonContainer)`
padding : 0.3rem !important;

color : black;
border : 2px solid black;
margin: 5px;
background : black;
color: white;
font-weight : bold;
&:hover {
    color : white;
    background : grey;
}
`
export default Modal;
