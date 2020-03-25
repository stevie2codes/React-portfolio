import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Icons = props => {
  const styles = {
    fontSize: "8vh",
    display: "block",
    margin: 10,
    backgroundColor: "rgb(15, 15, 15)",
    boxShadow: `-4px -4px 14px rgb(33, 33, 33), 4px 4px 14px rgb(0, 0, 0)`,
    padding: "10",
    borderRadius: `50%`
  };
  return (
    <div className="homeIconList d-flex  ">
      <a href="https://github.com/stevie2codes">
        <GitHubIcon style={styles} className="GitHubIcon" />
      </a>
      <a href="https://www.linkedin.com/in/js-webb/">
        <LinkedInIcon style={styles} className="linkInIcon" />
      </a>
      <a
        href="mailto:j.stephenwebb@gmail.com.com?Subject=Job%20inquiry"
        target="_top"
      >
        <MailOutlineIcon style={styles} className="mailIcon" />
      </a>
    </div>
  );
};

export default Icons;
