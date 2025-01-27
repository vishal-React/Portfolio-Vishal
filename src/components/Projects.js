import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import "./card.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // in phone or tabs off tilt effect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Check initial screen size
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // card structure dynamic
  const ProjectCard = ({
    imgSrc,
    characterSrc,
    title,
    githubLink,
    demoLink,
  }) => {
    const CardContent = (
      <div
        className="details-container color-container animate"
        style={{ "--i": 0 }}
      >
        <div className="article-container">
          <div className="card">
            <div className="wrapper">
              <img src={imgSrc} className="cover-image" alt="Project Cover" />
            </div>
            <img src={characterSrc} className="character" alt="Character" />
          </div>
        </div>
        <h2 className="experience-sub-title project-title">{title}</h2>
        <div className="btn-container">
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => (window.location.href = githubLink)}
          >
            Github
          </button>
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => (window.location.href = demoLink)}
          >
            Live Demo
          </button>
        </div>
      </div>
    );

    // Conditionally wrap with Tilt
    return isMobile ? CardContent : <Tilt>{CardContent}</Tilt>;
  };

  return (
    <>
      <section id="projects" className="my-margin sec-7 show-animate">
        <p className="section__text__p1 sec-3">Browse My Recent</p>
        <h1 className="title sec-3">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers vishal-colum">
            <ProjectCard
              imgSrc="./assets/venom.jpg"
              characterSrc="./assets/ven.png"
              title="Movies Review"
              githubLink="https://github.com/vishal-React?tab=repositories"
              demoLink="https://github.com/"
            />
            <ProjectCard
              imgSrc="./assets/noodlesBack.png"
              characterSrc="./assets/noodle.png"
              title="Food Delivery"
              githubLink="https://github.com/vishal-React?tab=repositories"
              demoLink="https://github.com/"
            />
            <ProjectCard
              imgSrc="./assets/pok.png"
              characterSrc="./assets/howerpok.png"
              title="Pokemon Cards"
              githubLink="https://github.com/vishal-React?tab=repositories"
              demoLink="https://github.com/"
            />
            <ProjectCard
              imgSrc="./assets/todo.png"
              characterSrc="./assets/topng.png"
              title="To-Do-List"
              githubLink="https://github.com/vishal-React?tab=repositories"
              demoLink="https://github.com/"
            />
            <ProjectCard
              imgSrc="./assets/we.png"
              characterSrc="./assets/clo.png"
              title="Weather"
              githubLink="https://github.com/vishal-React?tab=repositories"
              demoLink="https://github.com/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
