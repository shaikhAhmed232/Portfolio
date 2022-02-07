import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="sec-heading">contact</p>
          </div>
          <div className="col-12 pt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="row contact-icon">
                  <a href="">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4 text-end">
                          <FontAwesomeIcon
                            className="faIcon w-50 h-50"
                            icon={faMapMarkedAlt}
                          />
                        </div>
                        <div className="col-8">
                          <h2>Location</h2>
                          <p>Address</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div className="col-12">
                      <div className="row contact-icon">
                        <div className="col-4 text-end">
                          <FontAwesomeIcon
                            className="faIcon w-50 h-50"
                            icon={faEnvelope}
                          />
                        </div>
                        <div className="col-8">
                          <h2>Email</h2>
                          <p>test@mail.com</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div className="col-12">
                      <div className="row contact-icon">
                        <div className="col-4 text-end">
                          <FontAwesomeIcon
                            className="faIcon w-50 h-50"
                            icon={faMobile}
                          />
                        </div>
                        <div className="col-8">
                          <h2>Phone</h2>
                          <p>123-456</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <form className="contact-form" action="">
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="col-12 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12 mt-3">
                      <textarea
                        type="textfield"
                        className="form-control"
                        placeholder="Message"
                      />
                    </div>

                    <div className="col-12 text-center mt-3">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
