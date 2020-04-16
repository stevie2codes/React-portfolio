import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import "../components/projectPics/Stephen-Webb.pdf";

const Icons = props => {
  const styles = {
    fontSize: "8vh",
    display: "block",
    margin: 20,
    // color: "rgb(201, 145, 71)",
    backgroundColor: "rgb(15, 15, 15)",
    boxShadow: `-4px -4px 14px rgb(30, 30, 30), 4px 4px 14px rgb(0, 0, 0)`,
    padding: "10",
    borderRadius: `50%`
  };
  return (
    <div className="homeIconList d-flex flex-wrap ">
      <a href="https://github.com/stevie2codes">
        <GitHubIcon style={styles} className="GitHubIcon" />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/js-webb/">
        <LinkedInIcon style={styles} className="linkInIcon" />
        LinkedIn
      </a>
      <a
        href="mailto:j.stephenwebb@gmail.com.com?Subject=Job%20inquiry"
        target="_top"
      >
        <MailOutlineIcon style={styles} className="mailIcon" />
        E-Mail
      </a>
      <a href="tel:+615943-8252">
        <PhoneIphoneIcon style={styles} className="phoneIcon" />
        615-943-8252
      </a>

      <a
        href="https://docs.google.com/document/d/19fHV-h4JHY16FdCrexx8Ou1h2uPBvczC6WD7RyL_dVI/edit?usp=sharing"
        // download={"Stephen-Webb.pdf"}
      >
        <AttachFileIcon style={styles} className="resumeIcon" />
        Resume
      </a>
    </div>
  );
};

export default Icons;
