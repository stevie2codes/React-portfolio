import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./styles.css/Card.css";
function Card({ title, description, image, githubLink, siteLink }) {
  return (
    <div className="cardContainer">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
      <a className="m-auto" href={siteLink}>
        <img src={image} alt="projectImage" className="cardImage" />
      </a>
      <div className="cardIcons">
        <Tooltip
          placement="left"
          TransitionComponent={Zoom}
          title="Github Repo"
          arrow
        >
          <a href={githubLink}>
            <GitHubIcon fontSize="large" className="gitIcon" />
          </a>
        </Tooltip>
        <Tooltip
          placement="right"
          TransitionComponent={Zoom}
          title="Launch application"
        >
          <a href={siteLink}>
            <ExitToAppIcon fontSize="large" className="linkIcon" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Card;
