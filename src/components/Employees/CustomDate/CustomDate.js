import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// External dependencies
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDate = ({ label, placeholder, selected, onChange }) => {
  return (
    <Col xs={2} className="me-3">
      <Form.Label>{label}</Form.Label>
      <DatePicker
        className="custom-date"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="MMM dd, yyyy"
        yearListStyle="grid"
        placeholderText="Select a date"
        placeholder={placeholder}
        selected={selected}
        onChange={onChange}
        required
      />
    </Col>
  );
};

export default CustomDate;
