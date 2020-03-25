import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Projects(props) {
  return (
    <div className="cardContainer animated fadeIn slow">
      <div className="card-columns m-5 ">
        <div className="card">
          <img
            src={require("./projectPics/preview.png")}
            className="card-img-top"
            alt="employee directory preview"
          />
          <div className="card-body">
            <h5 className="card-title">Employee-Directory</h5>
            <p className="card-text">
              A react application utilizing pagination, filtering and sorting.
            </p>
            <p className="card-text">
              <a href="https://github.com/stevie2codes/React-Employee-Directory">
                <GitHubIcon className="gitIcon" />
              </a>

              <ExitToAppIcon className="linkIcon" />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("./projectPics/nutriPreview.png")}
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
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("./projectPics/outerEarth.png")}
            className="card-img-top"
            alt="Outer earth preview"
          />
          <div className="card-body">
            <h5 className="card-title">Outer Earth</h5>
            <p className="card-text">
              A space exploration app utilizing the NASA API
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card ">
          <div
            className="card-body"
            id="quoteDiv"
            style={{ backgroundColor: "brown", color: "black" }}
          >
            <p className="card-text">"Dream, Design , Create"</p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("./projectPics/WD-Shot.png")}
            className="card-img-top"
            alt="Outer earth preview"
          />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
              Weather application calling out to 3rd party API w/ AJAX
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("./projectPics/healthQuiz.png")}
            className="card-img-top"
            alt="Outer earth preview"
          />
          <div className="card-body">
            <h5 className="card-title">What the health?</h5>
            <p className="card-text">
              A space exploration app utilizing the NASA API
            </p>
            <p className="card-text">
              <a href="https://github.com/stevie2codes/React-Employee-Directory">
                <GitHubIcon className="gitIcon" />
              </a>

              <ExitToAppIcon className="linkIcon" />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("./projectPics/burger.png")}
            className="card-img-top"
            alt="Outer earth preview"
          />
          <div className="card-body">
            <h5 className="card-title">Burger Log</h5>
            <p className="card-text">
              A space exploration app utilizing the NASA API
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
