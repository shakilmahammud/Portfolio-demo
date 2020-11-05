import React from "react";
import "../../../index.css";
import uiImage from "../../../images/ui.svg";
import webImage from "../../../images/web.svg";

const Service = () => {
  document.title="DEV-SHAKIL 💻 ✅ SERVICE"
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Web Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p>React Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Web Design</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p>Wordpress Customization</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Vue Js Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p> Front End Development</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Service;
