import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let user = {};
    axios
      .post(process.env.REACT_APP_BASE_URL+`users`, {
        email,
        password,
        name,
      })
      .then((res) => {
        user = res.data;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/product";
        return;
      })
      .catch((e) => {
        console.log(e);
        setError("Already exits or Invalid Credentials");
        window.location.href = "/signup";
      });
  };

  return (
    <>
      <Wrapper>
        <div className="p-4 box">
          <h2 className="mb-3">Med-Store Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="name"
                required
                placeholder="Name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                required
                placeholder="Email address"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  color: white !important;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export default Signup;
