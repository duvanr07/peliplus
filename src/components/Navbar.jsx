import React from "react";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-2 bg-dark-subtle" aria-label="navbar">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <i className="bi bi-film mx-2"></i>
            Películas Chigüirito
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbars">
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
                En cartelera
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
