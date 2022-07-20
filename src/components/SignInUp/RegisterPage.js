import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Stack, InputGroup, Form, Button } from "react-bootstrap";
import { MdPerson, MdAlternateEmail, MdPassword } from "react-icons/md";

import axios from "axios";
import Landing from "./Landing";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    axios.post(`/auth/register`, { name: name, password: password, email: email }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Landing />
      <Stack gap={2} className="col-md-5 mx-auto stack-group">
        <h2 className="text-muted text-center mb-4">Register</h2>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <MdPerson />
          </InputGroup.Text>
          <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <MdAlternateEmail />
          </InputGroup.Text>
          <Form.Control onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <MdPassword />
          </InputGroup.Text>
          <Form.Control onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
        </InputGroup>

        <Button onClick={handleRegister}>Sign Up</Button>

        <Link to="/" className="text-center my-3 text-decoration-none font-weight-bolder links">
          <h6>Already have an account? Sign In Now...</h6>
        </Link>
      </Stack>
    </>
  );
};

export default RegisterPage;
