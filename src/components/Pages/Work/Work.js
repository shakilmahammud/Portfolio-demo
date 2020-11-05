import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import {
	FaGithub,
	FaLink
} from 'react-icons/fa'
const EachWork = (props) => {
	const { title, image, description,tools,pageLink,git} = props.work;
	return (

		<motion.div style={{ borderRadius: "5px" }} class="row my-4 bg-dark py-3 project-details d-flex align-items-center work-one"
        variants={boxVariants}
        whileHover="hover"
        >
			<div className="col-md-7 order-md-2">
				<div className="myfilter">
					<img style={{ borderRadius: "3px" }} src={image} alt="" />
				</div>
			</div>
			<div className="col-md-5 order-md-1" style={{ zIndex: 3 }}>
				<div class="task-description  text-white p-3">
					<h5 >Features Project</h5>
					<h3 class="card-title"> {title} </h3>
					<p class="card-text">
						{description}
                        </p>
                        <p>Technology: <br/>{tools}</p>
                        <a href={git} target="_blank" rel="noopener noreferrer"> 
							<FaGithub
								style={{ width: '30px', height: '30px', color: '#64FFDA' }}
							/>
						</a>
                        &ensp;&ensp;
                        <a href={pageLink} target="_blank" rel="noopener noreferrer" >
                            <FaLink
                            style={{ width: '30px', height: '30px', color: '#64FFDA' }}
                            />
                            
                            </a>
                            &ensp;&ensp;

				</div>
			</div>

		</motion.div>

	);
};
const boxVariants = {
    hover: {
      scale: 1.06,
      transition: {
        type: "spring",
      },
    },
  };
const Works = (props) => {
	document.title="DEV-SHAKIL 💻 ✅ PROJECT"
	const works = props.works;
	return (
		<section className="works py-5">
			<div className="container">
				<div className="works-class" >
					{
						works.map(work => <EachWork work={work} />)
					}

				</div>
			</div>
		</section>
	);
};
export const ProjectWorks = [
	{
		id: 0,
		projectId: 0,
		title: "Doctor Portal",
		description:
			" A Full Stack Doctor Portal App . Every patient fix his/her appointment fixed date  and see her doctor avilable on this time",
		image: "https://i.ibb.co/BqzgYvc/doctor-Portal.png",
        tools:["React.js","Node.js", "Express.js", "MongoDB", "Firebase",'Heroku','netlify'],
        pageLink:"https://doctor-portal-shakil.netlify.app/",
		git: "https://github.com/shakilmahammud/Doctor-portal-front-code",
	},
	{
		id: 1,
		projectId: 1,
		title: "Creative Agency",
		description:
			"Fully functional website for a Digital Service Agency, back-end by NodeJS and MongoDB. And the front-end is built with ReactJS. Users can order and track the progress of order. The admins can add new service, update order progress.",
		pageLink: "https://shakil-agency.netlify.app/",
		git: "https://github.com/shakilmahammud/creative-agency-front-end",
		image: "https://i.ibb.co/K7q4hZD/creative-agency.png",
		tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
		featured: "true"

	},
	{
		id: 2,
		projectId: 2,
		title: "Volunteer Network",
		description:
			"Volunteer Network website. Users can register to perform a volunteer task. Admins can add new task, check subscriptions.",
		image: "https://i.ibb.co/Y77V71K/volunteer-network.png",
		pageLink: "https://volunteer-site-shakil.netlify.app/",
		git: "https://github.com/shakilmahammud/volunteer-web",
		tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
		featured: "true"
	},
	{
		id: 3,
		projectId: 3,
		title: "Travel Guru",
		description:
			"Hotel Booking web-application for travellers. After choosing the destination users will get the list of all the hotel options available in that region with google map.",
		image: "https://i.ibb.co/JKGG60g/travel-guru.png",
		pageLink: "https://shakil-travale-site.netlify.app",
		tools: ["React.js", "React-Bootstrap", "React Router", "Google Maps", "Firebase"],
		git: "https://github.com/shakilmahammud/Travale"
	},
	// {
	// 	id: 4,
	// 	projectId: 4,
	// 	title: "E School",
	// 	description: "It's a landing page design. Completely done with HTML, Bootstrap and CSS.",
	// 	image: "https://i.ibb.co/fGDgVcF/e-school.png",
	// 	pageLink: "https://smswajan.github.io/E-School/",
	// 	tools: ["HTML", "CSS", "Bootstrap4", "Owl-Carousel"],
	// 	git: "https://github.com/smswajan/E-School"
	// }
];

export default Works