import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Bars/Navbar";
import Sidebar from "./components/Bars/Sidebar";
import Landing from "./components/Landing/Landing";
import Employees from "./components/Employees/Employees";
import { RiMenu4Fill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      {user ? (
        <div>
          <Navbar />
          <Sidebar />
          <div id="outer-container">
            <RiMenu4Fill id="outer-icon" />
            <main id="page-wrap">
              <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/employees"} element={<Employees />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <div id="outer-container">
          <main id="page-wrap">
            <Landing />
          </main>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
