import React from "react";
import "./contact.css";
import Icons from "../icons";

function Contact(props) {
  return (
    <React.Fragment>
      <div className="element">
        <h1 className="sectionTag">Contact</h1>
      </div>
      <div className="contactContainer container">
        <h3 className="contactTextHead">Lets get in touch!</h3>

        <Icons />
      </div>
    </React.Fragment>
  );
}

export default Contact;
