import React from "react";
import "./home.css";

const HomeContent = props => {
  return (
    <React.Fragment>
      <div className="mainContent ">
        <div className="nameContainer row">
          <h1 className="webText animated fadeIn slow col-1">STEPHEN WEBB</h1>
          <div className="subText">
            <h1 className="designText animated slideInLeft slow">DESIGNER</h1>
            <h1 className="devText animated slideInRight slow">DEVELOPER</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
