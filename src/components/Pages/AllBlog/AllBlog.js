import React from 'react'
import Blog from '../Blog/Blog'
// import { FaArrowAltCircleRight } from 'react-icons/fa';
// import { NavLink } from "react-router-dom";

export const AllBlog = () => {
     document.title="DEV-SHAKIL 💻 ✅ BLOG"
    return (
       <section>
           <Blog/>
        <Blogs/>
        </section>
    )
}

export const BlogsContent=({blog})=> {
                
        return(
            <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
                           
                            <div className="card-body">
                                <h4 className="card-title">{blog.title}</h4>
                                <img className="card-img-top" src={blog.img} alt=""/>
                                <p></p>
                                <p></p>
                                <p className="card-text">{blog.topic}
                    </p>
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                        </div>
        )

}




 
export const Blogs=()=>{
    const blog=[
    {
        id:1,
        title:"Some Important Topic In Javascript.",
        topic:"var Statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.",
        img:"https://miro.medium.com/max/700/1*x1SS0lX1gobstBoq96jkXA.jpeg",
        link:"https://shakil-mit-bd.medium.com/some-important-topic-in-javascript-70e96e6e5695",
    },
    {
        id:1,
        title:"Some Important Topic In Javascript.",
        topic:"var Statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.",
        img:"https://miro.medium.com/max/700/1*x1SS0lX1gobstBoq96jkXA.jpeg",
        link:"https://shakil-mit-bd.medium.com/some-important-topic-in-javascript-70e96e6e5695",
    },
    {
        id:1,
        title:"Some Important Topic In Javascript.",
        topic:"var Statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.",
        img:"https://miro.medium.com/max/700/1*x1SS0lX1gobstBoq96jkXA.jpeg"
    ,
    link:"https://shakil-mit-bd.medium.com/some-important-topic-in-javascript-70e96e6e5695",
    },
    {
        id:1,
        title:"Some Important Topic In Javascript.",
        topic:"var Statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.",
        img:"https://miro.medium.com/max/700/1*x1SS0lX1gobstBoq96jkXA.jpeg",
        link:"https://shakil-mit-bd.medium.com/some-important-topic-in-javascript-70e96e6e5695",
    },
]
    return (
        <section>
            <div className="Blogs">
        <div className="container py-1">
            <div className="row">
                    {
                        blog.map(blogs=><BlogsContent blog={blogs}/>)
                    }
            </div>
        </div>

        </div>
    </section>
    )
}