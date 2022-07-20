import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Accounts from "./Accounts";
import Tests from "./Tests";
import BasicInfo from "./BasicInfo";
import Benefits from "./Benefits";

const EditEmployee = ({ myEmployee, getData, setShow, user }) => {
  const [employee, setEmployee] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/employees/" + employee._id, employee, {
        headers: { authorization: "Bearer " + user.token },
      })
      .then(() => {
        getData();
        setShow(false);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.request);
        console.log(error.message);
      });
  };

  useEffect(() => {
    setEmployee(myEmployee);
  }, [myEmployee]);

  return (
    <Modal
      show={employee}
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

export default EditEmployee;
