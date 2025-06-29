import React, { useEffect } from "react";

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
        <h1 className="title sec-3 ">Experience</h1>
        <div>
          <div className="section-container ">
            <div className="section__pic-container animate new-padding">
              <img
                alt=""
                src="./assets/person stand.png"
                className="about-pic"
              />
            </div>
            <div className="about-details-container sec-2 width-mobile">
              <div className="text-container animate l-zoom new-padding">
                <p>
                  <strong>
                    Full-Stack Developer Intern — Code B Solutions Pvt Ltd
                  </strong>
                  <br />
                  <em>Mulund, Maharashtra | Feb 2025 – June 2025</em>
                  <br />
                  <br />
                  Developed and deployed full-stack web applications using
                  React, Node.js, MongoDB, and Next.js. Built and deployed a
                  “Chat with Data” system on AWS EC2 that accepts natural
                  language prompts, generates AI-based queries, and displays
                  database results with role-based actions. Developed a Python
                  API that creates embeddings of uploaded PDFs using OpenAI,
                  stores them in Pinecone, and extracts answers by retrieving
                  the most relevant text chunks based on question embeddings.
                  Contributed to full-stack development in an agile team using
                  React/Svelte (frontend) and Node.js/Python (backend).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
