import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container nav-container">
        <Link className="navbar-brand" to="/">
          SA Portfolio
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "2rem" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
