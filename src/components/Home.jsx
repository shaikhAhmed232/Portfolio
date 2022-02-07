import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="info">
        <h1 className="mx-3">web developement portfolio project</h1>
        <Typed
          className="typed-text mx-3"
          strings={["web developement", "web design", "front end developer"]}
          speed={40}
          backSpeed={60}
          loop
        />
        <a className="contact-btn">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
