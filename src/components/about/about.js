import React from "react";
import "./about.css";
import FadeIn from "react-fade-in";
function About(props) {
  return (
    <React.Fragment>
      <div className="element"></div>
      <img
        src={require("../projectPics/FullSizeRender.png")}
        className="portPic"
        alt="pic"
      />
      <FadeIn transitionDuration={1000}>
        <div className="container">
          <div className="aboutText row ">
            <p className="brand-state col-md-6 ">
              <span className="aboutSpan d-flex justify-content-center">
                <span>About Me</span>
              </span>
              Full-stack Web Developer with a background in business ownership.
              While attaining a certificate for full-stack development at
              Vanderbilt University, I've discovered an obsession for creative
              design diving deep into this field of development. Excited for
              life long journey into learning new technologies daily!
            </p>
            <div className="list col-md-6">
              <p className="skillList">
                <span className="aboutSpan d-flex justify-content-center">
                  <span>Studied Skills</span>
                </span>
                MERN STACK- Mongo, Express,React,React Native, Node, CSS, SASS,
                bootstrap, JavaScript animaition libraries, JavaScript, jQuery,
                MySQL, Mongoose,AWS, git, github, MVC Agile,SCRUM and team
                projects. Figma Design Sytems . Ui/Ux Design principles.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </React.Fragment>
  );
}

export default About;
