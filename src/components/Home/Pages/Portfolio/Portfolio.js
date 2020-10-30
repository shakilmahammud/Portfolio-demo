import React from "react";
import "../../../index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, } from "@fortawesome/free-solid-svg-icons";
import './Portfolio.css'

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://doctor-portal-shakil.netlify.app/"
          >
            <div className="project-images" id="doctorPortal"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>A Full Stack Doctor Portal App</h3>
              <p>• Technology: HTML, CSS, Bootstrap, React.js, Node.js and express.js,
MongoDb,Firebase,Heroku</p>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shakilmahammud/doctor-portal-front-end"
              >
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; &nbsp; 
              </a>
              <a
                rel="noopener noreferrer"
                href="https://doctor-portal-shakil.netlify.app/"
                target="_blank"
              >
                &nbsp; &nbsp; 
                
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://shakil-agency.netlify.app/"
          >
            <div className="project-images" id="CreativeAgency"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3> A Full Stack Agency Service App</h3>
              <p>• Technology: HTML, CSS, Bootstrap, React.js, Node.js and express.js,
MongoDb,Firebase,Heroku</p>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shakilmahammud/creative-agency-front-end"
              >
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; &nbsp;
              </a>
              <a
                rel="noopener noreferrer"
                href="https://shakil-agency.netlify.app/"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                &nbsp; &nbsp;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://volunteer-site-shakil.netlify.app/"
          >
            <div className="project-images" id="Volunteer"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>A Full Stack Volunteer App</h3>
              <p>• Technology: HTML, CSS, Bootstrap, React.js, Node.js and express.js,
MongoDb,Firebase,Heroku</p>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shakilmahammud/volunteer-web"
              >
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; &nbsp;
              </a>
              <a
                rel="noopener noreferrer"
                href="https://volunteer-site-shakil.netlify.app/"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                &nbsp; &nbsp;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Explore matiari */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://shakil-travale-site.netlify.app/"
          >
            <div className="project-images" id="Travel"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3> A Travel App</h3>
              <p>• Technology: HTML, CSS, Bootstrap, React.js,React Router, React Hooks, Context api, Firebase</p>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shakilmahammud/Travale"
              >
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; &nbsp;
              </a>
              <a
                rel="noopener noreferrer"
                href="https://shakil-travale-site.netlify.app/"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                &nbsp; &nbsp;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 5 - Expense Tracker */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook-clone-shakil.netlify.app/login"
          >
            <div className="project-images" id="facebookClone"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Facebook Clone</h3>
              <p>• Technology: HTML, CSS, Bootstrap, React.js</p>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shakilmahammud/fb"
              >
               <FontAwesomeIcon icon={faGithub} />
                &nbsp; &nbsp;
              </a>
              <a
                rel="noopener noreferrer"
                href="https://facebook-clone-shakil.netlify.app/login"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                &nbsp; &nbsp;
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/shakilmahammud"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
