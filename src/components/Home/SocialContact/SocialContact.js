import React from "react";
import "../../../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3,faSass,faBootstrap,faNodeJs,faReact, faJs, faGithubAlt, faMedium, faLinkedin, faMediumM, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'

const SocialContact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="profile-image">

      </div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>shakil.mit.bd@gmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/shakilmahammud"
            >
             <FontAwesomeIcon icon={faGithubAlt} className="icon"/>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@shakil.mit.bd"
            >
             <FontAwesomeIcon icon={faMediumM} className="icon"/>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/md-shakil-829802169/"
            >
             <FontAwesomeIcon icon={faLinkedinIn}  className="icon"/>
            </a>

            {/* Twitter */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/Junaid084869/"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a> */}

            {/* Instagram */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/developerjunaid/"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a> */}
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>(+880) 1637623345 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContact;
