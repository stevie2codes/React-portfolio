import React from "react";
import "./home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const HomeContent = props => {
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
    <React.Fragment>
      <div className="mainContent">
        <div className="nameContainer row">
          <h1 className="webText animated fadeIn slow col-1">STEPHEN WEBB</h1>
          <div className="subText">
            <h1 className="designText animated slideInLeft slow">DESIGNER</h1>
            <h1 className="devText animated slideInRight slow">DEVELOPER</h1>
          </div>
        </div>
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
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
