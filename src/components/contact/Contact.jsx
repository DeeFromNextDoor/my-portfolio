import React from "react";
import "./Contact.css";
import { FaEnvelope, FaHandPointDown, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
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
            <form>
              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button className="button" type="submit">
                Send Message
              </button>
            </form>
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
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
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
