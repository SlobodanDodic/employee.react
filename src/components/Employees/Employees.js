import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import axios from "axios";
// import { format } from 'date-fns'

import headers from "./headers.json";
import AddModal from "./AddEmployee";

const Employees = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:8000/employees", { headers: { accept: "*/*" } })
      .then((response) => setData(response.data.employees))
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AddModal getData={getData} show={show} setShow={setShow} />

      <DatatableWrapper
        body={data}
        headers={headers}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 10,
            options: [5, 10, 15, 20],
          },
        }}
      >
        <Row className="mb-4 p-2">
          <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
            <Filter />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <PaginationOptions />
          </Col>
          <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end">
            <Pagination />
          </Col>
        </Row>
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </DatatableWrapper>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add new employee
      </Button>
    </>
  );
};

export default Employees;
