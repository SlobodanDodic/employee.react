import React from "react";
// Bootstrap
import Row from "react-bootstrap/Row";
// Components
import CustomDate from "./CustomDate/CustomDate";

const Tests = ({ employee, setEmployee }) => {
  return (
    <>
      <Row>
        <CustomDate
          label="Eyes check"
          selected={employee.eyes}
          onChange={(newValue) => setEmployee({ ...employee, eyes: newValue })}
        />

        <CustomDate
          label="Safety"
          selected={employee.safety}
          onChange={(newValue) => setEmployee({ ...employee, safety: newValue })}
        />

        <CustomDate
          label="Fire Test"
          selected={employee.fire}
          onChange={(newValue) => setEmployee({ ...employee, fire: newValue })}
        />

        <CustomDate
          label="First AId Test"
          selected={employee.firstAid}
          onChange={(newValue) => setEmployee({ ...employee, firstAid: newValue })}
        />
      </Row>
      <br />
    </>
  );
};

export default Tests;
