import React from "react";
import "../../../index.css";
import { SeeMoreBtn } from "../Blog/Blog";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faGithub} from '@fortawesome/free-brands-svg-icons'
// import { faExternalLinkAlt, } from "@fortawesome/free-solid-svg-icons";
// import './Portfolio.css'
import Works, { ProjectWorks } from "../Work/Work";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  document.title="DEV-SHAKIL 💻 ✅ Portfolio"
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        <Works works={ProjectWorks}/>
     </div>
     <SeeMoreBtn name="portfolio" seeMore="See More Project"/>
     </section>
  );
};

export default Portfolio;
