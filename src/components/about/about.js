import React from "react";
import "./about.css";

import SectionAnimation from "../SectionAnimation";
function About(props) {
  return (
    <div className="aboutContainer">
      <SectionAnimation />
      <img
        src={require("../projectPics/FullSizeRender.png")}
        className="portPic"
        alt="pic"
      />

      <div className="aboutCardContainer">
        <div className="aboutText row ">
          <p className="brand-state col-md-6 ">
            <span className="aboutSpan d-flex justify-content-center">
              <span>About Me</span>
            </span>
            Front-End Web Developer, husband, father and runner. A background in
            business ownership and a passion for creative endeavors. Studied
            full-stack web development at Vanderbilt University where I excelled
            in UI Design. Diving deep into this field of development, I'm
            excited for a life long journey into learning new technologies
            daily!
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
    </div>
  );
}

export default About;
