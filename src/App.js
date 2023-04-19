import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Navbar from "./mycomponents/navbar.js";
import Details from "./mycomponents/details.js";
import Productlist from "./mycomponents/productlist.js";
import Default from "./mycomponents/default.js";
import Cart from "./mycomponents/cart";
import Modal from "./mycomponents/modal.js";

import ContactForm from "./mycomponents/contact"
import Login from "./mycomponents/login";
import Signup from "./mycomponents/signup";

import Particlesbg from "./ts_components/particlesbg";
import "bootstrap/dist/css/bootstrap.min.css";
import Protectedroute from "./mycomponents/protectedroute";
function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Particlesbg />
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Particlesbg />
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element ={
              <>
              <Protectedroute>
                <Navbar>
                </Navbar>
              </Protectedroute>
              <ContactForm></ContactForm>
              <Protectedroute>

              </Protectedroute>
              </>
            }
          ></Route>
          <Route
            path="/product"
            element={
              <>
                <Protectedroute>
                  <Navbar />
                </Protectedroute>
                <Protectedroute>
                  <Productlist />
                </Protectedroute>
              </>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <>
                <Protectedroute>
                  <Navbar />
                </Protectedroute>
                <Protectedroute>
                  <Cart />
                </Protectedroute>
              </>
            }
          ></Route>
          <Route
            path="/details"
            element={
              <>
                <Protectedroute>
                  <Navbar />
                </Protectedroute>
                <Protectedroute>
                  <Details />
                </Protectedroute>
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Default />
              </>
            }
          ></Route>
        </Routes>
        <Modal></Modal>
    </React.Fragment>
  );
}

const Temp = styled.div`
  width: 100%;
  background-color: white !important;
`;

export default App;
