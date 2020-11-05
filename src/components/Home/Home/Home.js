import React, { useState, useEffect } from "react";
import "../../../index.css";
// import man from "../../../images/man.svg";
import { motion, AnimatePresence } from "framer-motion";
import resume from '../../../images/Shaki-Resume .pdf'
import './Home.css'
import profile from '../../../images/shakil1.png'
import { FaCodepen, FaGithubSquare,  FaLinkedinIn, FaMediumM } from "react-icons/fa";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);
  document.title="DEV-SHAKIL 💻 ✅ "
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">WELCOME TO MY WORLD</h4>
        <br />
        <h1 className="main-content">
          Hi, I’m SHAKIL
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
            </span>
          </motion.span>{" "}
        </h1>
        {/* Animate Skill Content */}

        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Web Developer | Software Enginner | Programmer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                 Quick Learner | Open Source Contributor ..
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        {/* // */}

        <h1>
          {" "}
          from BANGLADESH{" "}
          <span role="img" aria-label="Pakistan Flag">
             🇧🇩
          </span>
        </h1>
        <div className="social-links my-2">
                        <a href="https://github.com/shakilmahammud" target="_blank" rel="noopener noreferrer"> <FaGithubSquare/></a>
                        <a href="https://www.linkedin.com/in/md-shakil-829802169/" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn/></a>
                        <a href="https://medium.com/@shakil.mit.bd" target="_blank" rel="noopener noreferrer"><FaMediumM/></a>
                        <a href="https://codepen.io/shakilmahammud" target="_blank" rel="noopener noreferrer"> <FaCodepen/></a>
                    </div>
        <button className="button" >
          <a href={resume} download="resume.pdf" className="btn-cv"> DownLoad Resume</a>
        </button>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={profile} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
