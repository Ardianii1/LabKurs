import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";
// import logo from "../images/logo.jpeg";

export class Header extends Component {
  render() {
    return (
      <header className="header" size="large">
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
          </ul>
        </nav>
      </header>
    );
  }
}
