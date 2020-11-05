import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import './NotFound.css'


export const NotFound = () => {
    document.title="DEV-SHAKIL 💻 ✅ Page Not Available"
    return (
        <section className="notfoundmain">
            <div className="text-center notFund m-auto">
            <h2> Page Not Found</h2>
            <button className="button m-auto">
          <NavLink to="/home" className="btn-cv"> Back To Home <FaArrowAltCircleLeft/></NavLink>
        </button>
        </div>
        </section>
    )
}
