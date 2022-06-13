import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";
// import logo from "../images/logo.jpeg";

export class Header extends Component {
  render() {
    return (
      <header className="header" size="large">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        ></link>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            {/* <img src={logo} alt="logo" width="100" height="100"></img> */}
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/about">
                About
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/news">
                News
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
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
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/stafi">
                Stafi
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-outilne-primary"
                to="pages/departamenti"
              >
                Departamenti
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-outilne-primary" to="pages/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
