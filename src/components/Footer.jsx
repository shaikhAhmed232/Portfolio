import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 py-2 display-5 text-center">Shaikh Ahmed</div>
          <div className="col-12 py-2 text-center">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, facere?
            </p>
          </div>
          <div className="col-12 py-2 text-center social-icon">
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="col-12 py-2 text-center">
            <p>
              © Copyright MyResume <span>{new Date().getFullYear()}</span>. All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
