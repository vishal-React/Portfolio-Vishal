import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import "./media.css";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { FaGithub, FaReact } from "react-icons/fa";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { Toaster } from "react-hot-toast";

const Portfolio = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [overlay, setoverlay] = useState(false);
  const circlesRef = useRef([]);
  const eyesRef = useRef([]);

  // scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setoverlay(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
        setoverlay(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // eye follow
  useEffect(() => {
    const eyes = eyesRef.current;

    const handleMouseMove = (event) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const shine = pupil.querySelector(".shine");
        const { width, height } = eye.getBoundingClientRect();
        const eyeX = width / 2;
        const eyeY = height / 2;

        const mouseX = event.clientX - eye.getBoundingClientRect().left - eyeX;
        const mouseY = event.clientY - eye.getBoundingClientRect().top - eyeY;

        const angle = Math.atan2(mouseY, mouseX);
        const distance = Math.min(eyeX * 0.4, Math.hypot(mouseX, mouseY));

        const pupilX = eyeX + distance * Math.cos(angle);
        const pupilY = eyeY + distance * Math.sin(angle);

        pupil.style.transform = `translate(-50%, -50%) translate(${
          pupilX - eyeX
        }px, ${pupilY - eyeY}px)`;

        // Position the shine relative to the pupil
        const shineOffsetX = 5 * Math.cos(angle);
        const shineOffsetY = 5 * Math.sin(angle);
        shine.style.transform = `translate(-50%, -50%) translate(${shineOffsetX}px, ${shineOffsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // cursor logic
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 8 + "px"; // Center the circle
        circle.style.top = y - 8 + "px"; // Center the circle

        // Scale the circles based on their index
        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;
        circle.x = x;
        circle.y = y;

        // Update circle positions
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.1; // Follow the next circle
        y += (nextCircle.y - y) * 0.1; // Follow the next circle
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  // Hide cursor circles on hover
  useEffect(() => {
    const circles = circlesRef.current;

    const handleMouseOver = (e) => {
      const tagNames = ["BUTTON", "A", "INPUT", "TEXTAREA", "SPAN"];
      if (tagNames.includes(e.target.tagName)) {
        circles.forEach((circle) => {
          circle.style.opacity = "0";
        });
      }
    };

    // Show circles after hover
    const handleMouseOut = (e) => {
      circles.forEach((circle) => {
        circle.style.opacity = "1";
      });
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      {/* cursor */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
      <section id="profile">
        <div className="height">
          <div className="section__pic-container fadeLeft">
            {/* eye */}
            <div className="eyes">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="eye"
                  ref={(el) => (eyesRef.current[index] = el)}
                >
                  <div className="pupil">
                    <div className="shine"></div>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="./assets/main.png"
              alt="animated profile picture"
              className="image"
            />
            <FaReact className="con" />
            {/* loader */}
            <div className="container ">
              <div className="loader">
                <span></span>
              </div>
              <div className="loader">
                <span></span>
              </div>
              <div className="loader">
                <i></i>
              </div>
              <div className="loader">
                <i></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section__text fadeRight">
            <p className="section__text__p1">Hello, I'm </p>
            <button className="animate-btn title">
              <span>V</span>
              <span>i</span>
              <span>s</span>
              <span>h</span>
              <span>a</span>
              <span>l</span>
              <span className="blank-space"> </span>
              <span>G</span>
              <span>u</span>
              <span>p</span>
              <span>t</span>
              <span>a</span>
            </button>
            <button className="animate-btn section__text__p2">
              <span>F</span>
              <span>r</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
              <span className="blank-space"> </span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </button>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() => window.open("/assets/Vishal-Gupta-Resume.pdf")}
              >
                Download CV
              </button>
              <a href="#contact">
                <button className="btn btn-color-1">Contact Info</button>
              </a>
            </div>
            <div id="socials-container">
              <a href="https://www.linkedin.com/in/vishalGuptaReact/">
                <PiLinkedinLogoFill className="change" />
              </a>
              <a href="https://github.com/vishal-React">
                <FaGithub className="change" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* toTop */}
      <div className={`overlay ${overlay ? "active" : ""}`}></div>
      <span
        id="backtotop-btn"
        className={showScroll ? "slide-in-bottom" : "slide-out-top"}
        style={{ visibility: showScroll ? "visible" : "hidden" }}
        onClick={scrollToTop}
      >
        <span className="rocket">🚀</span>
      </span>
    </>
  );
};

export default Portfolio;
