import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "./card.css";
const Projects = () => {
  useEffect(() => {
    let sections = document.querySelectorAll("section");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });
    };
  }, []);

  return (
    <>
      <section id="projects" className="my-margin sec-7 show-animate">
        <p className="section__text__p1 sec-3">Browse My Recent</p>
        <h1 className="title sec-3">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {/* first project */}
            <Tilt>
              <div
                className="details-container color-container animate"
                style={{ "--i": 0 }}
              >
                <div className="article-container">
                  <div className="card">
                    <div className="wrapper">
                      <img
                        src="./assets/todo.png"
                        className="cover-image "
                        alt="Image 1"
                      />
                    </div>
                    <img
                      src="./assets/topng.png"
                      className="character"
                      alt="Image 2"
                    />
                  </div>
                </div>
                <h2 className="experience-sub-title project-title">
                  To-Do-List
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </Tilt>
            {/* Second project */}
            <Tilt>
              <div
                className="details-container color-container animate"
                style={{ "--i": 1 }}
              >
                <div className="article-container">
                  <div className="card">
                    <div className="wrapper">
                      <img
                        src="./assets/we.png"
                        className="cover-image "
                        alt="Image 1"
                      />
                    </div>
                    <img
                      src="./assets/clo.png"
                      className="character"
                      alt="Image 2"
                    />
                  </div>
                </div>
                <h2 className="experience-sub-title project-title">Weather</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </Tilt>
            {/* Third project */}
            <Tilt>
              <div
                className="details-container color-container animate"
                style={{ "--i": 2 }}
              >
                <div className="article-container">
                  <div className="card">
                    <div className="wrapper">
                      <img
                        src="./assets/pok.png"
                        className="cover-image "
                        alt="Image 1"
                      />
                    </div>
                    <img
                      src="./assets/howerpok.png"
                      className="character"
                      alt="Image 2"
                    />
                  </div>
                </div>
                <h2 className="experience-sub-title project-title">
                  Pokemon Cards
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
        <div className="details-container color-container animate">
        <Tilt>
          <div className="article-container">
            <div>
              <div className="card">
                <div className="wrapper">
                  <img
                    src="./assets/venom.jpg"
                    className="cover-image "
                    alt="Image 1"
                  />
                </div>
                <img
                  src="./assets/ven.png"
                  className="character"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
          <h2 className="experience-sub-title project-title">Movies Review</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Live Demo
            </button>
          </div>
        </Tilt>
        </div>
      </section>
    </>
  );
};

export default Projects;
