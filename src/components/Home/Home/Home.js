import React, { useState, useEffect } from "react";
import "../../../index.css";
import man from "../../../images/man.svg";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

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

        <button className="button" >
          <a href="https://drive.google.com/u/3/uc?id=1PcdEQ-O7wEOJxK4QwGr1z4IiOraML-Qz&export=download" className="btn-cv"> DownLoad Resume</a>
        </button>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={man} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
