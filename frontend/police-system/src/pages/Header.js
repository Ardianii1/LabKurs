// import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";
// import logo from "../images/logo.jpeg";

const Header = () => {
  // let menu;
  // const logout = async () => {
  //   await fetch("http://localhost:5101/api/logout", {
  //     // mode: "no-cors",
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "include",
  //   });
  //   props.setName("");
  // };

  // if (props.name === "") {
  //   menu = (

  //   );
  // } else {
  //   menu = (
  //     <div className="text-end">
  //       <button type="button" className="btn btn-outline-light me-2">
  //         <NavLink
  //           className="nav-link px- text-white"
  //           to="pages/login"
  //           onClick={logout}
  //         >
  //           Logout
  //         </NavLink>
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none btn btn-outilne-primary"
            to="pages/home"
          >
            {/* <img src={logo} alt="logo" width="40" height="32"></img> */}
          </NavLink>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink className="nav-link px-2 text-white" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link px-2 text-white" to="pages/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link px-2 text-white" to="pages/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link px-2 text-white" to="pages/news">
                News
              </NavLink>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className=" nav-link px-2 text-white btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  E-serviset
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink
                      className="dropdown-item btn btn-outilne-primary"
                      to="pages/policesite"
                    >
                      Policesite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item btn btn-outilne-primary"
                      to="pages/oraretepunes"
                    >
                      Oraretepunes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item btn btn-outilne-primary"
                      to="pages/qytetaret"
                    >
                      Qytetaret
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink className="nav-link px-2 text-white" to="pages/stafi">
                Stafi
              </NavLink>
            </li>
            {/* <li>
                <NavLink className="nav-link px-2 text-white" to="pages/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link px-2 text-white" to="pages/about">
                  About
                </NavLink>
              </li> */}
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-white bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="dropdown text-end">
            {/* <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a> */}
            <ul
              className="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                {/* <a className="dropdown-item" href="#">
                    New project...
                  </a> */}
              </li>
              <li>
                {/* <a className="dropdown-item" href="#">
                    Settings
                  </a> */}
              </li>
              <li>
                {/* <a className="dropdown-item" href="#">
                    Profile
                  </a> */}
              </li>
              <li>{/* <a className="dropdown-divider" /> */}</li>
              <li>
                {/* <a className="dropdown-item" href="#">
                    Sign out
                  </a> */}
              </li>
            </ul>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <NavLink className="nav-link px-2 text-white" to="pages/login">
                  Login
                </NavLink>
              </button>
              <button type="button" className="btn btn-primary">
                <NavLink
                  className="nav-link px-2 text-black"
                  to="pages/register"
                >
                  Sign up
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
