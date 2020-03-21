import React from "react";
// import Logo from "";

const NavBar = props => {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a
                href="images/Front-end Developer Resume Sample.pdf"
                download="stephenWebb Portfolio"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};
export default NavBar;
