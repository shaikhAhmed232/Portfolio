import React from "react";
import person from "../images/person-img.jpg";

const About = () => {
  return (
    <div className="about-section section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="sec-heading">about</p>
          </div>
          <div className="col-md-4 img-container">
            <img className="" src={person} alt="image" />
          </div>
          <div className="about-me col-md-8 col-12 text-md-start text-center">
            <div className="row">
              <div className="col-12 ">
                <h4>Front End Developer</h4>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias ipsa ratione, dolores sapiente error tempore
                    dolor. Sint expedita distinctio, quibusdam adipisci sit,
                    doloribus odit atque error, sapiente numquam possimus
                    aspernatur! Ipsum, nulla. Cumque, possimus quae ullam
                    eveniet fugit aut quisquam in voluptatum incidunt quam,
                    dolorum ratione similique vero sint maiores tempore dicta
                    rerum. Distinctio ratione temporibus deserunt maiores modi
                    nulla!
                  </div>
                  <div className="col-12">
                    <div className="row pt-3 personal-info">
                      <div className="col-sm-6 text-start email">
                        <h5>Name :</h5>
                        <p>Mohammed Ahmed Sagir Ahmed Shaikh</p>
                      </div>
                      <div className="col-sm-6 text-start email">
                        <h5>Email :</h5>
                        <p>skmdahmed995@gmail.com</p>
                      </div>
                      <div className="col-sm-6 text-start email">
                        <h5>Phone :</h5>
                        <p>
                          <strong>+91</strong> 8454867818
                        </p>
                      </div>
                      <div className="col-sm-6 text-start email">
                        <h5>City :</h5>
                        <p>Mumbai, Maharashtra</p>
                      </div>

                      <div className="col-sm-6 text-start email">
                        <h5>Age :</h5>
                        <p>23</p>
                      </div>
                      <div className="col-sm-6 text-start email">
                        <h5>Degree :</h5>
                        <p>Bachelor of Engineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
