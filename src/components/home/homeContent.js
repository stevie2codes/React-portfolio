import React from "react";
import "./home.css";
import HomeCube from "../home_cube";

const HomeContent = props => {
  return (
    <React.Fragment>
      <HomeCube className="cube" />
      <div className="mainContent ">
        <div className="nameContainer row">
          <h1 className="webText animated fadeIn slow col-1">STEPHEN WEBB</h1>
          <div className="subText">
            <h1 className="designText animated slideInLeft slow">CREATIVE</h1>
            <h1 className="devText animated slideInRight slow">DEVELOPER</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
