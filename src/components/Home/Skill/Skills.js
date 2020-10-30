import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3,faSass,faBootstrap,faNodeJs,faReact, faJs,} from '@fortawesome/free-brands-svg-icons'
import "../../../index.css";
import './Skil.css'

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>
      <div className="techs">
        <li>
        <FontAwesomeIcon icon={faHtml5} /> <p>HTML5</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faCss3} />
          <p>CSS3</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faSass} />
          <p>Sass</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faBootstrap} />
          <p>Bootstrap</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faJs} />
          <p>Javascript</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faNodeJs} />
          <p>Node js</p>
        </li>
      </div>
    </section>
  );
};

export default Skills;
