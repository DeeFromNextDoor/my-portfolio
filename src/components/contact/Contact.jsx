import React, { useRef } from "react";
import "./Contact.css";
import { FaEnvelope, FaHandPointDown, FaMapMarkerAlt } from "react-icons/fa";
import { useFormContext } from "../../context/FormContext";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const { form, sendEmail, buttonText } = useFormContext();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact_title">
          <h3>Contact</h3>
          <h4>
            Get in touch, hit me up <FaHandPointDown className="info_icon" />
          </h4>
        </div>
        <div className="contact_content">
          <div className="contact_form">
            <h4>Send me a Message</h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form_group">
                <label>Name</label>
                <input type="text" name="user_name" placeholder="Your Name" />
              </div>

              <div className="form_group">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form_group">
                <label>Message</label>
                <textarea name="message" placeholder="Your Message" />
              </div>

              <input type="submit" value={buttonText} className="button" />
            </form>
            <ToastContainer />
          </div>
          <div className="contact_info">
            <div className="info_item">
              <FaEnvelope className="info_icon" />
              <p>Email: simeonvictordayo@gmail.com</p>
            </div>
            <div className="info_item">
              <FaMapMarkerAlt className="info_icon" />
              <p>Location: Lagos, Nigeria</p>
            </div>
            <div className="social_links">
              <a
                href="https://twitter.com/simeonvictorda1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="www.linkedin.com/in/simeon-victor-b72942288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/deewhy01?igshid=MjEwN2IyYWYwYw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
