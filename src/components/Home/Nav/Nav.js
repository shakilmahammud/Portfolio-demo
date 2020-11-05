import React, { useState } from "react";
import "../../../index.css";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <motion.div
      className={navbar ? "nav-container active" : "nav-container"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <NavLink to="/">
      <span className="logo" onClick={() => scroll.scrollToTop()}>
        &lt; DEV-SHAKIL /&gt;
      </span>
      </NavLink>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleClick}>
        {navClicked ?  <FontAwesomeIcon icon={faTimes} /> :  <FontAwesomeIcon icon={faBars} />}
      </div>
      {/* // */}
      <ul className={ navClicked ? "nav-links active" : "nav-links" }>
        <li className="link">
          <NavLink
            className={navbar ? "anchor is-active" : "anchor"}
            activeClass="active"
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li className="link">
          <NavLink
            className="anchor"
            activeClass="active"
            to="/about"
          >
            About Me
          </NavLink>
        </li>

        {/* <li className="link">
          <NavLink
            className="anchor"
            activeClass="active"
            to="/service"
          >
           Service
          </NavLink>
        </li> */}

        <li className="link">
          <NavLink
            className="anchor"
            activeClass="active"
            to="/portfolio"
          >
            Project
          </NavLink>
        </li>

        <li className="link">
          <NavLink
          className="anchor"
          activeClass="active"
            to="/blog"
          >
            Blog
          </NavLink>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Nav;
// import React from 'react';
// import {Button, Nav, Navbar} from 'react-bootstrap';
// import './HeaderNavbar.css'
// // import resume from '../resume.pdf'
// const HeaderNavbar = () => {

//     return (
//         <div>
//             <Navbar fixed="top" b expand="lg" className="navbar-bg">
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" style={{fontSize:"15px"}} />
//                 <Navbar.Collapse id="basic-navbar-nav" >
//                     <Nav className="ml-auto nav-bg" >
//                     <Nav.Link  className="my-nav-link home-link" style={{color:"#c2c1c1e7"}} href="#home">
//                         Home
//                     </Nav.Link>
//                     <Nav.Link  className="my-nav-link about-link" style={{color:"#c2c1c1e7"}} href="#about">
//                         About
//                     </Nav.Link>
//                     <Nav.Link  className="my-nav-link projects-link" style={{color:"#c2c1c1e7"}} href="#projects">
//                         Projects
//                     </Nav.Link>
//                     <Nav.Link  className="my-nav-link blog-link" style={{color:"#c2c1c1e7"}} href="#blog">
//                         Blog
//                     </Nav.Link>
//                     {/* <Nav.Link   className="my-nav-link resume-link" style={{color:"#c2c1c1e7"}} href="#resume">
//                         Resume
//                     </Nav.Link> */}
//                     <Nav.Link  className="my-nav-link contact-link" style={{color:"#c2c1c1e7"}} href="#contact">
//                         Contact
//                     </Nav.Link>
//                     <Nav.Link  className="my-nav-link resume-download-link" style={{color:"#c2c1c1e7"}} href="#contact">
//                         {/* <a href={resume} download="resume.pdf">
//                             <Button className="btn btn-sm" style={{background:"#e31b6d", outline:"none", border:"none"
//                         , borderRadius:"40px"}}>Resume</Button>
//                         </a> */}
//                     </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
//     );
// };

// export default HeaderNavbar;