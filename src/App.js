import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/main";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav nav-pills d-flex justify-content-end">
          <div className="navigation">
            <h1 className="logo">StephenWebb</h1>
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
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
