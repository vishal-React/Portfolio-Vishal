import React, { useEffect } from "react";
import toast from "react-hot-toast";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form), // Automatically sets the correct Content-Type
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Message sent successfully!");
          form.reset(); // Clear the form inputs after successful submission
        } else {
          toast.error("Failed to send message. Please try again.");
          console.error("Web3Forms Error:", data.message);
        }
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section id="contact" className="sec-1 show-animate">
        <p className="section__text__p1 sec-3">Get in Touch</p>
        <h1 className="title sec-3">Contact Me</h1>
        <div className="box-wrapper contact animate">
          <div className="form-wrap">
            <form onSubmit={handleFormSubmit} method="POST">
              <input
                type="hidden"
                name="access_key"
                value="e947004b-eca5-484d-a2eb-7a5914cb4f90"
              />
              <h2 className="form-title">Send us a message</h2>
              <div className="form-fields">
                <div className="oneLine">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="fname"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="email"
                      placeholder="Mail"
                      required
                    />
                  </div>
                </div>
                <div className="form-groups">
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    required
                  />
                </div>
              </div>
              <input type="submit" className="submit-button" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
