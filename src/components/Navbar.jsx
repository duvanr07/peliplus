import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning m-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link  ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link  ${isActive ? "active" : ""} `
                }
                to="/now-playing"
              >
                En cartelera hoy
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link  ${isActive ? "active" : ""} `
                }
                to="/upcoming"
              >
                Proximamente
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link  ${isActive ? "active" : ""} `
                }
                to="/peoples"
              >
                Actores populares
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
