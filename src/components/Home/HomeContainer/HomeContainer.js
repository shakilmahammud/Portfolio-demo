import React, { useEffect } from "react";
import "../../../index.css";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Skills from "../Skill/Skills";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Achievements from "../../Pages/Certification/Achievements";
import Contact from "../SocialContact/SocialContact";
import Services from "../../Pages/Services/Services";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function HomeContainer() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeContainer;
