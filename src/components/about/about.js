import React from "react";
import "./about.css";

function About(props) {
  return (
    <div className="animated fadeIn">
      <div className="element"></div>
      <img
        src={require("../projectPics/FullSizeRender.png")}
        className="portPic"
        alt="pic"
      />
      <div className="container">
        <div className="aboutText row ">
          <p className="brand-state col-md-6 ">
            <span className="aboutSpan d-flex justify-content-center">
              <span>About Me</span>
            </span>
            Full-stack Web Developer with a background in business ownership.
            While attaining a certificate for full-stack development at
            Vanderbilt University, I've discovered an obsession for creative
            design diving deep into this field of development. Excited for life
            long journey into learning new technologies daily!
          </p>
          <div className="list col-md-6">
            <p className="skillList">
              <span className="aboutSpan d-flex justify-content-center">
                <span>Studied Skills</span>
              </span>
              MERN STACK- Mongo, Express,React, Node, CSS, SASS, bootstrap,
              JavaScript animaition libraries, JavaScript, jQuery, MySQL,
              Mongoose, git, github, MVC Agile,SCRUM and team projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
