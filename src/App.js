import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import HomeContent from "./components/home/homeContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav nav-pills d-flex justify-content-end">
          <div className="navigation">
            <Link to="/">
              <h3 className="logo">W</h3>
            </Link>

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
