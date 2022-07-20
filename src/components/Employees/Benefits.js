import React from "react";
// Bootstrap
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// External dependencies
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Benefits = ({ employee, setEmployee }) => {
  return (
    <>
      <br />
      <h6>Benefits</h6>
      <Table responsive="md">
        <caption>
          <Button variant="outline-warning">+ Add another user</Button>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Health care</th>
            <th>Fitpass</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <FormControl
                id="benefitUser"
                className="benefit-input"
                placeholder="User name"
                value={employee.benefitUser}
                onChange={(e) => {
                  setEmployee({ ...employee, benefitUser: e.target.value });
                }}
                required
              />
            </td>
            <td>
              <DatePicker
                className="benefit-input"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="MMM dd, yyyy"
                yearListStyle="grid"
                placeholderText="Select a date"
                selected={employee.healthDate}
                onChange={(newValue) => setEmployee({ ...employee, healthDate: newValue })}
                required
              />
            </td>
            <td>
              <DatePicker
                className="benefit-input"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="MMM dd, yyyy"
                yearListStyle="grid"
                placeholderText="Select a date"
                selected={employee.fitpassDate}
                onChange={(newValue) => setEmployee({ ...employee, fitpassDate: newValue })}
                required
              />
            </td>
            <td>Edit / Delete</td>
          </tr>
        </tbody>
      </Table>

      <Form.Group className="mb-3">
        <Form.Label>Additional comments</Form.Label>
        <Form.Control
          as="textarea"
          className="comments"
          rows={3}
          value={employee.comment}
          onChange={(e) => setEmployee({ ...employee, comment: e.target.value })}
        />
      </Form.Group>

      <br />
    </>
  );
};

export default Benefits;
