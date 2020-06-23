import React from "react";
import "./home.css";
// import HomeCube from "../home_cube";
import Card from "../Card";
const HomeContent = props => {
  return (
    <React.Fragment>
      {/* <HomeCube className="cube" /> */}
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
