import React from "react";
import "./home.css";

const HomeContent = props => {
  return (
    <React.Fragment>
      <div className="nameContainer">
        <h1 className="firstName animated slideInRight slow">Stephen</h1>
        <h1 className="lastName animated slideInLeft slow">Webb</h1>
      </div>
      <div className="element"></div>
    </React.Fragment>
  );
};

export default HomeContent;
