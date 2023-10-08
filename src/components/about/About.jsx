import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="floating-image">
              <img
                src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="Simeon Victor"
              />
            </div>
            <div className="floating-text">Front-End Developer</div>
          </div>
          <div className="about-text">
            <h3>About Me</h3>
            <h4>
              A Front-End Enthusiast and React Developer based in Lagos,
              Nigeria📍
            </h4>
            <p>
              A passionate Front-End Developer based in Lagos, Nigeria. With a
              strong love for creating elegant and interactive user interfaces,
              I'm dedicated to crafting delightful web experiences that leave a
              lasting impression.
            </p>
            <p>
              I believe in the power of clean code, responsive design, and
              user-centric development. My journey began with a curiosity for
              technology, and I've honed my skills through countless hours of
              learning, coding, and experimenting.
            </p>
            <p>
              When I'm not immersed in code, you can find me exploring new
              libraries and frameworks, sharing knowledge with the community,
              and enjoying quality time with my friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
