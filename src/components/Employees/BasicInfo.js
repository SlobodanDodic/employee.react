import React from "react";
// Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoIosBarcode } from "react-icons/io";
import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineLocalLibrary } from "react-icons/md";
// Components
import CustomDate from "./CustomDate/CustomDate";
// Date-fns
// import { formatISO } from "date-fns";

const BasicInfo = ({ employee, setEmployee }) => {
  return (
    <>
      <Row className="justify-content-start">
        <Col xs="auto">
          <Form.Label htmlFor="name">Full name</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <BsFillPersonLinesFill />
            </InputGroup.Text>
            <FormControl
              id="name"
              placeholder="Full name"
              value={employee.name}
              onChange={(e) => {
                setEmployee({ ...employee, name: e.target.value });
              }}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="jmbg">Jmbg</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <IoIosBarcode />
            </InputGroup.Text>
            <FormControl
              id="jmbg"
              placeholder="Jmbg"
              value={employee.jmbg}
              onChange={(e) => {
                setEmployee({ ...employee, jmbg: e.target.value });
              }}
            />
          </InputGroup>
        </Col>

        <CustomDate
          label="Birthday"
          selected={employee.birthday}
          onChange={(newValue) => {
            setEmployee({ ...employee, birthday: newValue });
          }}
        />

        <CustomDate
          label="Contract"
          selected={employee.contract}
          onChange={(newValue) => {
            setEmployee({ ...employee, contract: newValue });
          }}
        />
      </Row>

      <Row>
        <Col xs="auto">
          <Form.Label htmlFor="jobRole">Job role</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <HiOutlineCode />
            </InputGroup.Text>
            <FormControl
              id="jobRole"
              placeholder="Job role"
              value={employee.jobRole}
              onChange={(e) => {
                setEmployee({ ...employee, jobRole: e.target.value });
              }}
            />
          </InputGroup>
        </Col>

        <Col xs={6}>
          <Form.Label htmlFor="skills">Skills</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <MdOutlineLocalLibrary />
            </InputGroup.Text>
            <FormControl
              id="skills"
              placeholder="Skills"
              value={employee.skills}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  skills: e.target.value.split(","),
                })
              }
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export default BasicInfo;
