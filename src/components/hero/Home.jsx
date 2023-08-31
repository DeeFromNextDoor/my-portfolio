import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const skillsData = [
  {
    name: "HTML",
    icon: "https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg",
  },
  {
    name: "CSS",
    icon: "https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg",
  },
  {
    name: "JavaScript",
    icon: "https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg",
  },
  {
    name: "React",
    icon: "https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg",
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
            <h1>
              Front-End Developer <FontAwesomeIcon icon={faReact} />
            </h1>
            <p>
              Hi there! 👋 I'm Simeon Victor, a Front-End Enthusiast and React
              Developer based in Lagos, Nigeria
              <FaMapMarkerAlt className="info_icon" />.
            </p>
            <span>
              <a href="#" download="resume.pdf" className="download_cv">
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
