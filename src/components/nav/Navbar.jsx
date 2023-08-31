import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useAppContext } from "../../context/AppConetxt";
import Contact from "../contact/Contact";
import { Link } from "react-scroll";

const Navbar = () => {
  const { toggleTheme, darkMode, navVisible } = useAppContext();

  const [menuVisible, setLinksVisible] = useState(false);

  const handleMenuToggle = () => {
    setLinksVisible(!menuVisible);
  };

  return (
    <div className={`navbar ${navVisible ? "" : "hide"}`}>
      <div className="nav_content">
        <h3 className="nav_logo">Victor.dev</h3>
        <div className="nav">
          <div className={`navlinks ${menuVisible ? "slide-in" : ""}`}>
            <ul className="nav_links">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <span className="theme_mode" onClick={toggleTheme}>
            <i
              className={`bi ${
                darkMode ? "bi-brightness-high-fill" : "bi-moon"
              }`}
            ></i>
            {darkMode ? "Go Light" : "Go Dark"}
          </span>
          <i
            className={`bi ${menuVisible ? "bi-menu-up" : "bi-menu-down"}`}
            onClick={handleMenuToggle}
          ></i>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
