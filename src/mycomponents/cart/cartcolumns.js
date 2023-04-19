import React from "react";
import styled from "styled-components";

const Cartcolumns = () => {
  return (
    <>
      <TextWrapper>
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Products</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">name of product</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Price</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">quantity</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">remove</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">total</p>
            </div>
          </div>
          <Hr></Hr>
        </div>
      </TextWrapper>
    </>
  );
};

const TextWrapper = styled.div`
p{
  font-weight : bold;
  font-size : 1.2rem !important;
  font-style : 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`;

const Hr = styled.hr`
border : 1px solid black;`

export default Cartcolumns;
