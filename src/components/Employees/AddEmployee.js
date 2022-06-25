import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Accounts from "./Accounts";
import Tests from "./Tests";
import BasicInfo from "./BasicInfo";
import Benefits from "./Benefits";

import { initialState } from "./initialState";

const AddModal = ({ getData, show, setShow }) => {
  const [employee, setEmployee] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employees", employee)
      .then(() => {
        getData();
        setEmployee(initialState);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.request);
        console.log(error.message);
      });
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">Add new employee datas:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <BasicInfo employee={employee} setEmployee={setEmployee} />
          <Accounts employee={employee} setEmployee={setEmployee} />
          <Tests employee={employee} setEmployee={setEmployee} />
          <Benefits employee={employee} setEmployee={setEmployee} />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
