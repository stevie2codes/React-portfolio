import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import About from "./about/about";
import HomeContent from "./home/homeContent";
import "./styles.css/navigation.css";
const onOpen = () => {
  const navLinks = document.querySelector(".navigation");
  navLinks.classList.toggle("open");
};
function Navigation(props) {
  return (
    <div>
      <div onClick={() => onOpen()} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <BrowserRouter>
        <Link to="/">
          <h3 className="logo">W</h3>
        </Link>

        <div className="nav nav-pills d-flex">
          <div className="navigation">
            <div className="nav-items d-flex">
              <Link onClick={() => onOpen()} to="/" className="nav-link ">
                Home
              </Link>
              <Link onClick={() => onOpen()} to="/About" className="nav-link ">
                About
              </Link>
              <Link
                onClick={() => onOpen()}
                to="/Projects"
                className="nav-link "
              >
                Projects
              </Link>
              <Link
                onClick={() => onOpen()}
                to="/Contact"
                className="nav-link "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <Route exact path="/" component={HomeContent} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
