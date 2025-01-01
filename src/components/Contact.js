import React, { useEffect } from "react";

const Contact = () => {
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

  // const handlesub = ()=>{

  // }

  return (
    <>
      <p className="section__text__p1 margin " id="contact">
        Get in Touch
      </p>
      <h1 className="title">Contact Me</h1>
      <div className="box-wrapper contact">
        <div className="form-wrap">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              Value="e947004b-eca5-484d-a2eb-7a5914cb4f90"
            />
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields">
              <div className="oneLine">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Mail"
                    required
                  />
                </div>
              </div>
              <div className="form-groups">
                <textarea
                  name="message"
                  id=""
                  placeholder="Write your message"
                  required
                />
              </div>
            </div>
            {/* <button type="submit" className="submit-button" onClick={handlesub}>Submit</button> */}
            <input type="submit" className="submit-button" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
