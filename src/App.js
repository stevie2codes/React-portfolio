import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import HomeContent from "./components/home/homeContent";
import HomeCube from "./components/home_cube";

function App() {
  return (
    <div>
      <HomeCube />
      <BrowserRouter>
        <div className="nav nav-pills d-flex justify-content-end">
          <div className="navigation">
            <img
              src={require("./components/projectPics/element.png")}
              alt="newlogo"
              className="logo"
            />

            <div className="nav-items d-flex">
              <Link to="/" className="nav-link ">
                Home
              </Link>
              <Link to="/About" className="nav-link ">
                About
              </Link>
              <Link to="/Projects" className="nav-link ">
                Projects
              </Link>
              <Link to="/Contact" className="nav-link ">
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

export default App;
