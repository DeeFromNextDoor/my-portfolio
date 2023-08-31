import React, { useState } from "react";

const Project = ({
  title,
  description,
  image,
  technologies,
  liveDemo,
  sourceCode,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={`project ${hovered ? "hovered" : ""}`}>
      <div className="project_image">
        <div
          className={`image_wrapper ${hovered ? "scrolling_image" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image} alt="" />
        </div>
      </div>
      <div className="project_texts">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="skills">
          {technologies.map((technology, index) => (
            <p key={index}>{technology}</p>
          ))}
        </div>
        <div className="links">
          <ul>
            <li>
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                Source Code
                <i className="bi bi-github"></i>
              </a>
            </li>

            <li>
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
