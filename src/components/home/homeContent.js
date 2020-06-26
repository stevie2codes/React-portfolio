import React from "react";
import "./home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../projectPics/Stephen-Webb.pdf";

const HomeContent = props => {
  return (
    <React.Fragment>
      <div className="mainContent ">
        <div className="nameContainer ">
          <p className="preHeadText animated slideInUp slow">Stephen</p>
          <h1 className="webText animated fadeIn slow ">WEBB</h1>
          <p className="subHeadText animated slideInDown slow">
            Front-End Developer
          </p>
          <p className="subHeadText animated slideInDown slow">UI Designer</p>
        </div>
        <div className="iconList ">
          <a href="https://github.com/stevie2codes">
            <GitHubIcon fontSize="small" className="GitHubIcon" />
          </a>
          <a href="https://www.linkedin.com/in/js-webb/">
            <LinkedInIcon fontSize="small" className="linkInIcon" />
          </a>

          <a href="https://www.instagram.com/js.webb/">
            <InstagramIcon fontSize="small" className="phoneIcon" />
          </a>

          <a
            href="https://docs.google.com/document/d/19fHV-h4JHY16FdCrexx8Ou1h2uPBvczC6WD7RyL_dVI/edit?usp=sharing"
            // download={"Stephen-Webb.pdf"}
          >
            <AttachFileIcon className="resumeIcon" fontSize="small" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
