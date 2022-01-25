import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBack = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container nav-container">
        <a className="navbar-brand" href="#">
          SA Portfolio
        </a>
        <button
          className="navbar-toggler"
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
            <li className="nav-item mx-2 active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
