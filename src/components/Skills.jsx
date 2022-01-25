import React from "react";

const Skills = () => {
  return (
    <div className="skills-section section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="sec-heading">skills</p>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              ipsam sed cum dicta sapiente obcaecati aspernatur, maiores
              voluptatem debitis molestias, quis modi quisquam est at eius ex
              officiis necessitatibus ipsum!
            </div>
            <div className="row mt-2">
              <div className="col-md-6 mt-4 skills-bar">
                <div className="bar">
                  <div className="info">
                    <span className="skill">HTML</span>
                    <span className="amount">100%</span>
                  </div>
                  <div className="progress-line">
                    <div className="html-chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 skills-bar">
                <div className="bar">
                  <div className="info">
                    <span className="skill">css</span>
                    <span className="amount">60%</span>
                  </div>
                  <div className="progress-line">
                    <div className="css-chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 skills-bar">
                <div className="bar">
                  <div className="info">
                    <span className="skill">Js</span>
                    <span className="amount">70%</span>
                  </div>
                  <div className="progress-line">
                    <div className="js-chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 skills-bar">
                <div className="bar">
                  <div className="info">
                    <span className="skill">React Js</span>
                    <span className="amount">70%</span>
                  </div>
                  <div className="progress-line">
                    <div className="react-chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 skills-bar">
                <div className="bar">
                  <div className="info">
                    <span className="skill">Bootstrap</span>
                    <span className="amount">30%</span>
                  </div>
                  <div className="progress-line">
                    <div className="bootstrap-chart"></div>
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

export default Skills;
