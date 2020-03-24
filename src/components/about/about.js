import React from "react";
import "./about.css";

function About(props) {
  return (
    <div>
      <div className="element"></div>
      <img
        src={require("../projectPics/FullSizeRender.png")}
        className="portPic"
        alt="pic"
      />
      <p class="brand-state">
        Full-stack Web Developer with a background in business ownership.
        Currently attaining a certificate for full-stack web development at
        Vanderbilt University, structuring skills in CSS, JavaScript, Node,
        express, MySQL,React, MVC Agile,SCRUM and git. Passions for creative
        design and interactive user-experience. Eager to join a team to provide
        a unique perspective leveraging acquired skills and best practices.
      </p>
    </div>
  );
}

export default About;
