import React, { useEffect } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const About = () => {
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
      <section id="about" className="my-margin sec-1 show-animate">
        <p className="section__text__p1 sec-3">Get To Know More</p>
        <h1 className="title sec-3 ">About Me</h1>
        <div>
          <div className="section-container ">
            <div className="section__pic-container animate">
              <img
                src="./assets/person stand.png"
                className="about-pic"
              />
            </div>
            <div className="about-details-container sec-2 ">
              <div className="about-containers animate">
                <div className="details-container">
                  <GiRibbonMedal className="change" />
                  <h3>Experience</h3>
                  <p>
                    5 Months in<br />
                    Full-Stack Development
                  </p>
                </div>
                <div className="details-container">
                  <BsFillPersonLinesFill className="change" />
                  <h3>Education</h3>
                  <p>
                    B.Sc. Bachelors Degree
                    <br />
                    University Of Mumbai
                  </p>
                </div>
              </div>
              <div className="text-container animate l-zoom">
                <p>
                  Passionate and detail-oriented Full-Stack Developer with
                  hands-on experience building scalable web applications using
                  the MERN stack (MongoDB, Express.js, React.js, Node.js).
                  Completed a full-stack internship at Code B Solutions, where I
                  built and deployed an AI-powered dashboard using technologies
                  like Next.js, OpenAI, AWS EC2, etc. Skilled in developing
                  RESTful APIs, secure authentication, and dynamic user
                  interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#projects " className="sec-2">
          <RiArrowDownDoubleLine className="icon arrow animate" />
        </a>
      </section>
      <section className="parallax-1 ">
        <p className="work sec-3">"Debugging through every challenge"</p>
      </section>
    </>
  );
};

export default About;
