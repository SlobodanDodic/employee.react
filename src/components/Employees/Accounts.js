import React from "react";
// Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Accounts = ({ employee, setEmployee }) => {
  return (
    <>
      <br />
      <Row>
        <Col xs={8}>
          <Form.Label>Accounts</Form.Label>
          <InputGroup className="mb-3 account-input">
            <InputGroup.Text>Prime</InputGroup.Text>
            <FormControl
              aria-label="bankOne"
              placeholder="Account number"
              value={employee.bankAccountOne}
              onChange={(e) => setEmployee({ ...employee, bankAccountOne: e.target.value })}
            />
            <InputGroup.Text>Second</InputGroup.Text>
            <FormControl
              aria-label="bankTwo"
              placeholder="Account number"
              value={employee.bankAccountTwo}
              onChange={(e) => setEmployee({ ...employee, bankAccountTwo: e.target.value })}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Form.Label>Paycheck calculation</Form.Label>
          <InputGroup className="mb-3 paycheck-input">
            <InputGroup.Text>Paycheck</InputGroup.Text>
            <FormControl
              aria-label="total"
              placeholder="Total"
              value={employee.payTotal}
              onChange={(e) => setEmployee({ ...employee, payTotal: e.target.value })}
            />
            <InputGroup.Text>.00 €</InputGroup.Text>
            <FormControl
              aria-label="account"
              placeholder="On account"
              value={employee.payAccount}
              onChange={(e) => setEmployee({ ...employee, payAccount: e.target.value })}
            />
            <InputGroup.Text>.00 €</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default Accounts;
