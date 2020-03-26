import React from "react";
import "./contact.css";

function Contact(props) {
  return (
    <div>
      <div className="element">
        <h1 className="sectionTag">Contact</h1>
      </div>
      <div className="container contactContainer">
        <img
          className="contactImg"
          src={require("../projectPics/meetup.jpg")}
          alt="meetup"
        />
        <div className="textContainer ">
          <h3 className="contactTextHead">Lets Get In Touch</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
