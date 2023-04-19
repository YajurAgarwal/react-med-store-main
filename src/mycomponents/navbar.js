import React from "react";
import { Link } from "react-router-dom";
import Logo from "./cal.png";
import "./navbar.css";
import axios from 'axios';
import styled from "styled-components";
import { ButtonContainer, Span, Nav } from "./navbar_styles";

const Navbar = () => {
  const handleLogOut = () => {
    const obj = JSON.parse(localStorage.getItem('user'));
    axios.post(process.env.REACT_APP_BASE_URL+`users/logoutall` ,{},{
      headers :{
        Authorization :  `Bearer ${obj.token}`,
      }
    }).then( (res) =>{
    }).catch( (e)=>{
      // alert('chor bhai');
    })
    alert('Sure want to logout?');
    window.location.href = "/";
    localStorage.removeItem('user');
  };
  return (
    <>
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/contact">
          <img src={Logo} alt="store" className="navbar-brand"  />
        </Link>
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5 nav-product">
            <Link to="/product" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <Span>
              <i className="fas fa-cart-plus px-2" />
              my cart
            </Span>
          </ButtonContainer>
        </Link>
        <Wrapper>
          <button className="navigation" onClick={handleLogOut} >
            <a href="" className="button">
              <i className="fas fa-sign-out-alt"></i>
              <div className="logout">LOGOUT</div>
            </a>
          </button>
        </Wrapper>
      </Nav>
    </>
  );
};
const Wrapper = styled.div`
  .navigation {
    // border : 1px solid white;
    width: 100%;
    border: none;
    background-color: black;
  }
  .logout {
    font-size: 0.8em;
    font-family: "Oswald", sans-serif;
    position: relative;
    right: -18px;
    bottom: -4px;
    overflow: hidden;
    letter-spacing: 3px;
    opacity: 0;
    transition: opacity 0.45s;
    -webkit-transition: opacity 0.35s;
  }

  .button {
    text-decoration: none;
    float: right;
    margin-left: 1rem;
    color: white;
    width: 25px;
    background-color: black;
    transition: width 0.35s;
    -webkit-transition: width 0.35s;
    overflow: hidden;
  }

  a:hover {
    width: 100px;
  }

  a:hover .logout {
    opacity: 0.9;
  }

  a {
    text-decoration: none;
  }
`;

export default Navbar;
