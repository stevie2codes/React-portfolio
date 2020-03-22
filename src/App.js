import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/main";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav nav-pills my-3 d-flex justify-content-center">
          <div className="navigation">
            {/* <img src={logo} className="logo" alt="Logo Image" /> */}
            <div className="nav-items d-flex">
              <Link to="/" className="nav-link  m-2">
                Home
              </Link>
              <Link to="/About" className="nav-link  m-2">
                About
              </Link>
              <Link to="/Projects" className="nav-link  m-2">
                Projects
              </Link>
              <Link to="/Contact" className="nav-link  m-2">
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
