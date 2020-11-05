import React from 'react';
// import Navbar from '../Navbar/Navbar';
import './About.css';
import { NavLink } from 'react-router-dom';
import profile from '../../../images/shakil1.png'
import { FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
    document.title="DEV-SHAKIL 💻 ✅ ABOUT"
    return (
        <div className="About">
            {/* <Navbar/> */}
            <div className="container py-5">
                <div className="header text-center">
                    <h2>ABOUT ME</h2>
                    <div className="wrapper">
                        
                    </div>
                </div>
                <div className="row">
                
                    <div className="col-md-7 skills py-4">
                        <h2 className="mb-4">SKILLS</h2>
                        <h4 className="mt-4 mb-3">OS Platform</h4>
                        <p> <span>&#9679;</span>Windows<span>&#9679;</span>Linux<span>&#9679;</span> MacOS</p>
                        <h4 className="mb-3">Feel free to work with</h4>
                        <p> <span>&#9679;</span>React JS<span>&#9679;</span> React Router <span>&#9679;</span> JavaScript <span>&#9679;</span> ES6 <span>&#9679;</span> Node.js <span>&#9679;</span> Express.js <span>&#9679;</span> MongoDB <span>&#9679;</span> Gastby <span>&#9679;</span> Material-Ui <span>&#9679;</span> React Bootstrap <span>&#9679;</span> <span>&#9679;</span> HTML <span>&#9679;</span> CSS <span>&#9679;</span> SCSS <span>&#9679;</span> Bootstrap </p>
                        <h4 className="mt-4 mb-3">I'm Comfortable to</h4>
                        <p> <span>&#9679;</span>React. <span>&#9679;</span> ES6 <span>&#9679;</span> Gastby <span>&#9679;</span> SASS <span>&#9679;</span> Node.js <span>&#9679;</span> Express.js <span>&#9679;</span> MongoDB <span>&#9679;</span> jQuery <span>&#9679;</span> Material-UI <span>&#9679;</span> Heroku <span>&#9679;</span> Netlify <span>&#9679;</span> Firebase</p>
                        <h4 className="mt-4 mb-3">Familiar</h4>
                        <p> <span>&#9679;</span>TypeScript <span>&#9679;</span> Graphql <span>&#9679;</span>Redux.js <span>&#9679;</span> D3.js<span>&#9679;</span> Chart.js<span>&#9679;</span> Express.js <span>&#9679;</span> Devops <span>&#9679;</span> AWS <span>&#9679;</span> MongoDB <span>&#9679;</span> jQuery <span>&#9679;</span> PHP <span>&#9679;</span>Wordpress<span>&#9679;</span> C/C++ <span>&#9679;</span> Firebase</p>
                        <h4 className="mt-4 mb-3">Tools</h4>
                        <p> <span>&#9679;</span>Git <span>&#9679;</span> GitHub<span>&#9679;</span>XD <span>&#9679;</span>Adobe PhotoShop <span>&#9679;</span>Xcode  <span>&#9679;</span> Visual Studio Code <span>&#9679;</span> Atom <span>&#9679;</span> npm <span>&#9679;</span> Chrome Dev Tools <span>&#9679;</span> cPanel <span>&#9679;</span> Adobe XD <span>&#9679;</span> Figma</p>
                    </div>
                    <div className="col-md-5 text-center py-4">
                        <img className="img-fluid profile-image" src={profile} alt=""/>
                        <p className="description mt-4"> I count myself as a hardworking person. To pursue a challenging
career in a competitive world. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies .</p>
                        <a href="https://drive.google.com/file/d/1PcdEQ-O7wEOJxK4QwGr1z4IiOraML-Qz/view?usp=sharing" className="btn mr-1">Resume <FaArrowCircleRight/></a>
                        <NavLink to="/blog" className="btn ml-1"> See Blogs <FaArrowCircleRight/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;