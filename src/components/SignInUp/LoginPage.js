import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Stack, InputGroup, Form, Button } from "react-bootstrap";
import { MdAlternateEmail, MdPassword } from "react-icons/md";

import axios from "axios";
import Landing from "./Landing";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios.post(`/auth/login`, { password: password, email: email }).then((response) => {
      const myUser = {
        email,
        token: response.data.token,
      };
      setUser(myUser);
    });
  };

  return (
    <>
      <Landing />
      <Stack gap={2} className="col-md-5 mx-auto  stack-group">
        <h2 className="text-muted text-center mb-4">Sign In</h2>

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

        <Button onClick={login}>Sign In</Button>

        <Link to="/register" className="text-center my-3 text-decoration-none font-weight-bolder links">
          <h6>Don't have an account? Sign Up Now...</h6>
        </Link>
      </Stack>
    </>
  );
};

export default LoginPage;
