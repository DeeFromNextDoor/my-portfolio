import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const skillsData = [
  {
    name: "HTML",
    icon: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/51703b85-ef3f-4d45-fae0-c39d4c733900/preview",
  },
  {
    name: "CSS",
    icon: "https://icon-library.com/images/css-icon/css-icon-1.jpg",
  },
  {
    name: "JavaScript",
    icon: "https://static.vecteezy.com/system/resources/thumbnails/012/697/298/small_2x/3d-javascript-logo-design-free-png.png",
  },
  {
    name: "React",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "Figma",
    icon: "https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png",
  },
];

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero_main">
          <div className="hero_text">
            <h2>
              Hi there! 👋, my name is Simeon Victor a Front-End Enthusiast and
              React Developer
              <FontAwesomeIcon
                icon={faReact}
                className="rotating-logo"
                style={{
                  marginLeft: "10px",
                  color: "#61DAFB",
                  fontSize: "28px",
                }}
              />
            </h2>
            <span>
              <a
                href="/victor-resume.pdf"
                download="victor-resume.pdf"
                className="download_cv"
              >
                <i
                  className="bi bi-download"
                  style={{ marginRight: "6px" }}
                ></i>
                Download CV
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-github"></i>
              </a>
            </span>
          </div>
          <div className="hero_image">
            <img
              src="https://img.freepik.com/free-icon/user_318-159711.jpg"
              alt="hero"
            />
          </div>
        </div>
        <div className="skill-container">
          <p>My Skills </p>
          <ul className="skill-icons">
            {skillsData.map((skill) => (
              <li key={skill.name} data-tooltip={skill.name}>
                <img src={skill.icon} alt="skill_icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
