import React from "react";
import "./contact.css";
import Icons from "../icons";
import SectionAnimation from "../SectionAnimation";

import ContactAnimation from "../contactAnimation";

function Contact(props) {
  return (
    <React.Fragment>
      <SectionAnimation />
      <h1 className="sectionTag">Contact</h1>

      <div className="contactContainer aboutCardContainer">
        <h3 className="contactTextHead">Lets get in touch!</h3>

        <Icons fontSize="40vh" />
        <ContactAnimation />
      </div>
    </React.Fragment>
  );
}

export default Contact;
