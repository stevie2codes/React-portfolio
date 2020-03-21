import React from "react";
import "./App.css";
import NavBar from "./components/nav";
import Home from "./components/main";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
