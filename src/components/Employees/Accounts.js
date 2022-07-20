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
              required
            />
            <InputGroup.Text>Second</InputGroup.Text>
            <FormControl
              aria-label="bankTwo"
              placeholder="Account number"
              value={employee.bankAccountTwo}
              onChange={(e) => setEmployee({ ...employee, bankAccountTwo: e.target.value })}
            />
          </InputGroup>
          {employee.bankAccountOne.length !== 0 && employee.bankAccountOne.length !== 18 ? (
            <Form.Control.Feedback className="d-inline me-3" type="invalid">
              First account number must have exactly 18 digits. You are missing {18 - employee.bankAccountOne.length}
              <br />
            </Form.Control.Feedback>
          ) : (
            " "
          )}
          {employee.bankAccountTwo.length !== 0 && employee.bankAccountTwo.length !== 18 ? (
            <Form.Control.Feedback className="d-inline me-3" type="invalid">
              Second account number must have exactly 18 digits. You are missing {18 - employee.bankAccountTwo.length}
            </Form.Control.Feedback>
          ) : (
            " "
          )}
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
              required
            />
            <InputGroup.Text>.00 €</InputGroup.Text>
            <FormControl
              aria-label="account"
              placeholder="On account"
              value={employee.payAccount}
              onChange={(e) => setEmployee({ ...employee, payAccount: e.target.value })}
              required
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
