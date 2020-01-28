import React from 'react';
import person from "../img/person.svg";

import "../person.css"

export default class About extends React.Component{
    constructor(){
	super();
	this.state = {
	    skills:[
		{id:"HTML5_skill", content: "HTML5",porcentage: "80%", value: "80"},
		{id:"CSS3_skill", content: "CSS3",porcentage: "75%", value: "75"},
		{id:"JavaScript_skill", content: "JavaScript",porcentage: "90%", value: "90"},
		{id:"ReactJS_skill", content: "ReactJS",porcentage: "80%", value: "80"},
		{id:"Python_skill", content: "Python",porcentage: "75%", value: "75"},
		{id:"VanillaJS_skill", content: "VanillaJS",porcentage: "85%", value: "85"},
		{id:"Django_skill", content: "Django",porcentage: "80%", value: "80"},
		{id:"Flask_skill", content: "Flask",porcentage: "80%", value: "80"}
	    ],
	    about_me:[
		{id: "first-p-about",content: "I'm a Software Engineer and technology enthusiast."},
		{id: "second-p-about", content: "I have a formal education in computer science from Columbia University and have experience with cryptocurrencies, web development, and several other technologies."},
		{id: "third-p-about", content: "I have a strong computer science foundation and am always trying to learn something new. I have strong collaboration skills and proven history of development success."}
	    ]
	}
    }

    render(){
	return (
	    <section id="about" className="about-mf sect-pt4 route">
		<div className="container">
		    <div className="row">
			<div className="col-sm-12">
			    <div className="box-shadow-full">
				<div className="row">
				    <div className="col-md-6">
					<div className="row">
					    <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
						<img src={person} className="" alt=""  />
					    </div> 
						</div>
						    <div className="skill-mf">
												</div>
												    </div>
													<div className="col-md-6">
													    <div className="about-me pt-4 pt-md-0">
														<div className="title-box-2">
														    <h5 className="title-left">
															About Me
															</h5>
													    </div>
																{
																    this.state.about_me.map((content) => {
																	return <p className="lead" key={content.id}>{content.content}</p>;
																    })
																}
													    </div>
														</div>
														    </div>
															</div>
												    </div>
												</div>
										    </div>
							</section>
);
    }
}


//class Person extends React.Components {}
