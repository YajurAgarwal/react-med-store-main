import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Title from "./title";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios
        .post(process.env.REACT_APP_BASE_URL+"users/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.href = "/product";
        });
    } catch (err) {
      setError("invalid credentials");
    }
  };
  return (
    <>
          <Wrapper>
        <Title
          className="special"
          name="welcome"
          title="to med store"
          ></Title>
        <div className="p-4 box">
          <Title name="Login" title=""></Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  color: white !important;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export default Login;
