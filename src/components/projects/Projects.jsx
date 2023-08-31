import React from "react";
import "./Projects.css";
import { ProjectsData } from "../../data/Data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-content">
          <h3 className="title">portfolio</h3>
          <h4>Each project is a unique piece of development</h4>
          <div className="projects_grid">
            {ProjectsData.map((proj) => (
              <Project
                key={proj.title}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                technologies={proj.technologies}
                liveDemo={proj.liveDemo}
                sourceCode={proj.sourceCode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
