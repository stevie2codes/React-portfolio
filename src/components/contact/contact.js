import React from "react";
import "./contact.css";
import Icons from "../icons";
import FadeIn from "react-fade-in";

function Contact(props) {
  return (
    <React.Fragment>
      <div className="element">
        <h1 className="sectionTag">Contact</h1>
      </div>

      <FadeIn transitionDuration={1200}>
        <div className="contactContainer container">
          <h3 className="contactTextHead">Lets get in touch!</h3>

          <Icons fontSize="40vh" />
        </div>
      </FadeIn>
    </React.Fragment>
  );
}

export default Contact;
