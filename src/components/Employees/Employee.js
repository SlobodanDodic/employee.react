import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import axios from "axios";
// import { format } from 'date-fns'

// import headers from "./headers.json";
import AddEmployee from "./AddEmployee";

const Employee = ({ user, clearStorage }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const getData = useCallback(() => {
    axios
      .get("http://localhost:8000/employees", { headers: { authorization: "Bearer " + user.token } })
      .then((response) => setData(response.data.employees))
      .catch((error) => {
        console.log(error.response);
        clearStorage();
        navigate("/");
      });
  }, [user, clearStorage, navigate]);

  useEffect(() => {
    getData();
  }, [getData]);

  const edit = (id) => {
    console.log("edit");
  };

  const headers = [
    {
      prop: "name",
      title: "Name",
      isFilterable: true,
      isSortable: true,
    },
    {
      prop: "contract",
      title: "Contract until",
      isSortable: true,
    },
    {
      prop: "eyes",
      title: "Eyes check",
      isSortable: true,
    },
    {
      prop: "safety",
      title: "Safety test",
      isSortable: true,
    },
    {
      prop: "fire",
      title: "Fire test",
      isSortable: true,
    },
    {
      prop: "firstAid",
      title: "First aid test",
      isSortable: true,
    },
    {
      prop: "_id",
      title: "Options",
      cell: (row) => (
        <div>
          <button name={"edit"} onClick={() => edit(row)} />
        </div>
      ),
    },
  ];

  return (
    <>
      <AddEmployee getData={getData} show={show} setShow={setShow} user={user} />

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

export default Employee;
