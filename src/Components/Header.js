import React, { useState } from "react";
import logo from "../Assests/logo.svg";
import "../Styles/Header.css";
import { Dropdown } from "react-bootstrap";
import Flag from "react-world-flags";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} className="logo-image" alt="Logo" />
          </a>
          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  My tones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Manage RBT
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center gap-2">
              <li className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="custom-dropdown-toggle"
                  >
                    <Flag code="US" style={{ width: 20, height: 15 }} /> EN{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      className="custom-dropdown-item"
                    >
                      <Flag code="US" style={{ width: 20, height: 15 }} /> EN
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="custom-dropdown-item"
                    >
                      <Flag code="IN" style={{ width: 20, height: 15 }} /> Hindi
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="custom-dropdown-item"
                    >
                      <Flag code="ES" style={{ width: 20, height: 15 }} />{" "}
                      Español
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      className="custom-dropdown-item"
                    >
                      <Flag code="FR" style={{ width: 20, height: 15 }} />{" "}
                      Français
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item d-flex align-middle">
                <button type="button" className="btn">
                  Login
                </button>
                <button type="button" className="login-button">
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="m-0 p-0" />
      <div className="row">
        <div className="col-md-4 col-12 container mt-3">
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-5 search-input"
              placeholder="Search ringtone"
            />
            <CiSearch
              className="position-absolute"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
