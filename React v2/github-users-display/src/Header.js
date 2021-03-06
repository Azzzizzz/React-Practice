import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LOGO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link " to="/">
                Home
              </Link>
              <Link class="nav-link" to="/About">
                About
              </Link>
              <Link class="nav-link" to="/Users">
                Users
              </Link>
              <Link class="nav-link" to="/Books">
                Books
              </Link>
              <Link class="nav-link" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
