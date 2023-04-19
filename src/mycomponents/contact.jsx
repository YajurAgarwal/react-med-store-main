import React from "react";
import { useState } from "react";
import axios from 'axios'
import styled from "styled-components";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_BASE_URL+'mail',{
      name,
      email,
      message
    })
    window.location.href = "/product";
  };

  return (
    <Form>
      <div >
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              icon='mail'
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Form>
  );
};

const Form = styled.div`
border 1rem solid black;
border-radius : 1rem;
padding: 2rem;
  margin: 4rem;
  font-size: 0.8em;
  font-family: "Oswald", sans-serif;
  font-size : 20px;
`;

export default ContactForm;
