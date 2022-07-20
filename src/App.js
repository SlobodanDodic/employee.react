import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Bars/Navbar";
import Sidebar from "./components/Bars/Sidebar";
import LoginPage from "./components/SignInUp/LoginPage";
import RegisterPage from "./components/SignInUp/RegisterPage";
import Employees from "./components/Employees/Employees";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { RiMenu4Fill } from "react-icons/ri";

const App = () => {
  const [user, setUser] = useState(() => {
    const persistedUser = localStorage.getItem("user");
    return persistedUser !== null ? JSON.parse(persistedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const clearStorage = () => {
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      {user ? (
        <div>
          <Navbar user={user} />
          <Sidebar />
          <div id="outer-container">
            <RiMenu4Fill id="outer-icon" />
            <main id="page-wrap">
              <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/employees"} element={<Employees user={user} clearStorage={clearStorage} />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <div id="outer-container">
          <main id="page-wrap">
            <Routes>
              <Route path={"/"} element={<LoginPage user={user} setUser={setUser} />} />
              <Route path={"/register"} element={<RegisterPage user={user} setUser={setUser} />} />
              <Route path={"/employees"} element={<LoginPage user={user} setUser={setUser} />} />
            </Routes>
          </main>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
