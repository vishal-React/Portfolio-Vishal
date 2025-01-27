import React, { useEffect } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Experience = () => {
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
      <section id="experience" className="my-margin sec-1 show-animate">
        <p className="section__text__p1 sec-3">Explore My</p>
        <h1 className="title sec-3">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers mera">
            <div className="details-container animate">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article className="sec-5 animates">
                  <TbRosetteDiscountCheckFilled className="change sec-5 animates" />
                  <div>
                    <h3>HTML5</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article className="sec-6 animates">
                  <TbRosetteDiscountCheckFilled className="change  sec-6 animates" />
                  <div>
                    <h3>CSS3</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article className="sec-6 animates">
                  <TbRosetteDiscountCheckFilled className="change sec-6 animates" />
                  <div>
                    <h3>SASS</h3>
                    <pre className="f-Size">
                      Basic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </pre>
                  </div>
                </article>
                <article className="sec-5 animates">
                  <TbRosetteDiscountCheckFilled className="change sec-5 animates" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className="sec-5 animates">
                  <TbRosetteDiscountCheckFilled className="change sec-5 animates" />
                  <div>
                    <h3>Material UI</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article className="sec-6 animates">
                  <TbRosetteDiscountCheckFilled className="change sec-6 animates" />
                  <div>
                    <h3>React.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container sec-4 animate">
              <h2 className="experience-sub-title ">Frontend Development</h2>
              <div className="article-container">
                <article className="sec-5 animates">
                  <TbRosetteDiscountCheckFilled className="change" />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article className="sec-6 animates">
                  <TbRosetteDiscountCheckFilled className="change" />
                  <div>
                    <h3> UI/UX</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className="sec-6 animates">
                  <TbRosetteDiscountCheckFilled className="change" />
                  <div>
                    <h3>Tailwind</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className="sec-5 animates">
                  <TbRosetteDiscountCheckFilled className="change" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <a href="#contact">
          <RiArrowDownDoubleLine className="icon arrow " />
        </a>
      </section>
      <section className="parallax-2 ">
        <p className="sec-3 works">let's work together !</p>
      </section>
    </>
  );
};

export default Experience;
