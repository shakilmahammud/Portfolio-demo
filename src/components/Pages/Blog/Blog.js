import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link} from "react-router-dom";
import './Blog.css';


const Blog = () => {
    document.title="DEV-SHAKIL 💻 ✅ BLOG"
    return (
        <section
        data-aos="fade-up"
        className="achievements-container"
        name="achievements"
        id="achievements"
      >
     {/* <Nav/> */}
        <div className="Blogs">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>BLOG</span></h2>
                </div>
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            {/* <img className="card-img-top" src="" alt=""/> */}
                            <div className="card-body">
                            
                            <h4 className="card-title">Concepts to become an advanced React developer <span aria-label="" role="img">🔯</span></h4>
                                <img src="https://miro.medium.com/fit/c/376/282/1*hNRK_zr3qrTORJXD3pwuZA.png" alt="" className="card-img-top"/>
                                <p className="card-text">We all love ReactJS. It is one of the best and popular way to create.. </p>
                              <a href="https://shakil-mit-bd.medium.com/" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            {/* <img className="card-img-top" src="" alt=""/> */}
                            <div className="card-body">
                            
                            <h4 className="card-title">Concepts to become an advanced React developer <span aria-label="" role="img">🔯</span></h4>
                                <img src="https://miro.medium.com/fit/c/376/282/1*hNRK_zr3qrTORJXD3pwuZA.png" alt="" className="card-img-top"/>
                                <p className="card-text">We all love ReactJS. It is one of the best and popular way to create.. </p>
                              <a href="https://medium.com/wineofbits/concepts-to-become-an-advanced-react-developer-684d90c086c2" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                           
                            <div className="card-body">
                                <h4 className="card-title">React-Router Installation </h4>
                                <img className="card-img-top" src="https://miro.medium.com/max/698/1*ynDZaiVTiylx5asXPi6enQ.png" alt=""/>
                                <p></p>
                                <p></p>
                                <p className="card-text">AYou can Install React-Router Easily .
                    Step-1: A simple way to install React Router . 1st open code snippet in Commend windows or Terminal on MacoS. then create a react App . after create react app . write this in command prompt react-app . then install 
                npm i react-router-dom
                    </p>
                                <a href="https://shakil-mit-bd.medium.com/" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
        
        </section>
    );
};

export default Blog;

export const SeeMoreBtn=(props)=>{
    return(
        
        <section
        data-aos="fade-right"
        name="achievements" 
        >
            <Link to={`/${props.name}`}className="btn-cv button btn-posion-align"
        >
        
         {props.seeMore} <FaArrowAltCircleRight/>
      
        </Link>
        </section>
    )
}