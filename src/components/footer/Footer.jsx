import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>&copy; 2023. All rights reserved.</h3>
      <div className="socials">
        <a href="#" className="social-icon">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/DeeFromNextDoor" className="social-icon">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
