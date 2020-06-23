import React from "react";
import "./home.css";
const HomeContent = props => {
  return (
    <React.Fragment>
      <div className="mainContent ">
        <div className="nameContainer ">
          <p className="designText animated slideInLeft slow">
            Creative Developer
          </p>
          <h1 className="webText animated fadeIn slow col-1">STEPHEN WEBB</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
