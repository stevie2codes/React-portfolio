import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./projects.css";

function Projects(props) {
  return (
    <div>
      <div className="element animated fadeIn">
        <h1 className="sectionTag">Projects</h1>
      </div>
      <div className="container animated fadeIn">
        <div className="card-columns">
          <div className="card">
            <img
              src={require("../projectPics/homePreview.png")}
              className="card-img-top"
              alt="Outer earth preview"
            />
            <div className="card-body">
              <h5 className="card-title">Animade</h5>
              <p className="card-text">
                A Full-Stack React application allowing use of premade CSS
                animations or use the internal IDE to create save and update new
                animations.
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/Animade">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://animade.herokuapp.com/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={require("../projectPics/preview.png")}
              className="card-img"
              alt="employee directory preview"
            />
            <div className="card-body">
              <h5 className="card-title">Employee-Directory</h5>
              <p className="card-text">
                A react application utilizing pagination, filtering and sorting.
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/React-Employee-Directory">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  arrow
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://fast-mesa-07521.herokuapp.com/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../projectPics/nutriPreview.png")}
              className="card-img-top"
              alt="nutri find preview"
            />
            <div className="card-body">
              <h5 className="card-title">Nutri-Find</h5>
              <p className="card-text">
                A recipe keeper saving recipes in a database and searching a 3rd
                party API to find new ones!
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/Nutri-Find">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://calm-woodland-11785.herokuapp.com/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
          <div className="card ">
            <div
              className=" quote p-1"
              style={{
                backgroundColor: "rgb(201, 145, 71)",
                borderRadius: 5
              }}
            >
              <blockquote className="blockquote text-center text-dark">
                <p className="mb-0">
                  “Good design is actually a lot harder to notice than poor
                  design, in part because good designs fit our needs so well
                  that the design is invisible.”
                </p>
                <footer className="blockquote-footer text-dark">
                  Donald A. Norman{" "}
                  <cite title="Source Title">The Design of Everday Things</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="card">
            <img
              src={require("../projectPics/WD-Shot.png")}
              className="card-img-top"
              alt="Outer earth preview"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Weather application calling out to 3rd party API w/ AJAX and
                utilizing jQuery for DOM manipulation.
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/Weather-Dashboard">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://stevie2codes.github.io/Weather-Dashboard/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../projectPics/outerEarth.png")}
              className="card-img-top"
              alt="Outer earth preview"
            />
            <div className="card-body">
              <h5 className="card-title">Outer Earth</h5>
              <p className="card-text">
                A space exploration app utilizing the NASA API. A team project
                where I completed the full design.
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/koganp42/Outer_Earth">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://koganp42.github.io/Outer_Earth/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../projectPics/healthQuiz.png")}
              className="card-img-top"
              alt="Outer earth preview"
            />
            <div className="card-body">
              <h5 className="card-title">What the health?</h5>
              <p className="card-text">
                A timed health quiz utilizing jquery DOM manipulation and local
                storage.
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/health-quiz">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://stevie2codes.github.io/health-quiz/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../projectPics/burger.png")}
              className="card-img-top"
              alt="Outer earth preview"
            />
            <div className="card-body">
              <h5 className="card-title">Burger Log</h5>
              <p className="card-text">
                A burger logger with MySQL, Node, Express, Handlebars and
                Sequelize . Following the MVC design pattern; using Node and
                MySQL to query and route data into the app, and Handlebars to
                generate HTML
              </p>
              <p className="card-text">
                <Tooltip
                  placement="left"
                  TransitionComponent={Zoom}
                  title="Github Repo"
                  arrow
                >
                  <a href="https://github.com/stevie2codes/Burger-Log">
                    <GitHubIcon fontSize="large" className="gitIcon" />
                  </a>
                </Tooltip>
                <Tooltip
                  placement="right"
                  TransitionComponent={Zoom}
                  title="Launch application"
                >
                  <a href="https://warm-brook-07437.herokuapp.com/">
                    <ExitToAppIcon fontSize="large" className="linkIcon" />
                  </a>
                </Tooltip>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
