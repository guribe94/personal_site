import React, {Component} from 'react';

import res from '../Resume.pdf'


export default class Resume extends Component{
	
	render(){
		return(
		<section id="resume" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">

                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Resume
                    </h3>
                    <a href={res} className="subtitle-a">
                      Get the printable version.
                    </a>
                    <div className="line-mf"></div>
                      


		          <ul class="timeline">
		            <li class="event" data-date="2018">
		              <h3>Multiverse Labs - Co-Founder, Software Engineer</h3>
						<ul id='description'>
							<li>Co-founded a company to simplify the maintenance and deployment of cryptocurrency blockchain infrastructure running on Amazon Web Services.</li>
							<li>Designed and developed a blockchain infrastructur emanagement system using Go, Terraform, and Docker.</li>
							<li>Conducted outreach interviews with potential clients and pitched investors for seed funding.</li>
						</ul>
		            </li>
		            <li class="event" data-date="2017-2018">
		              <h3>Korbit USA - Software Engineer</h3>
						<ul id='description'>
							<li>Developed tools to deploy secure production grade blockchain infrastructure onto Amazon Web Services using Terraform, Packer, and Python.</li>
							<li>Launched custody system for Qtum and Ethereum Classic cryptocurrencies on Korbit exchange in Q4 of 2018.</li>
							<li>Provided 24/7 support to the Korbit exchange operations team in Korea.</li>
							<li>Conducted interviews and participated in hiring panels for engineers and C-level candidates.</li>
						</ul>
		            </li>
		            <li class="event" data-date="2017">
		              <h3>Olive Finance - Co-Founder, Co-Managing Partner</h3>
						<ul id='description'>
							<li>Identified the market inefficiency that led to our fundamental trading strategy and organized the initial investment/recruited partners.</li>
							<li>Implemented algorithmic trading strategies in Python focused on triangular arbitrage between the cryptocurrency markets in the United States and South Korea.</li>
							<li>Achieved a 257% return on the principal investment.</li>
						</ul>
		            </li>
		             <li class="event" data-date="2013-2017">
		              <h3>Columbia University - B.A. Computer Science</h3>
		            </li>
		            <li class="event" data-date="2016-2017">
		              <h3>Internet Real Time(IRT) Lab at Columbia University - Android Researcher</h3>
						<ul id='description'>	
							<li>Research for the Internet Real Time Lab (IRT) at Columbia University focused on improving the networking experience on a standard Android mobile device.</li>
							<li>Designed and implemented a network management system to provide a consistent IP address, granular control of network interfaces, and collection of usage data to optimize battery life.</li>
							<li>Collaborated with others to produce an academic report detailing our methodology and findings -- Report available upon request.</li>
						</ul>
		            </li>
		            <li class="event" data-date="2016">
		              <h3>8Sphere - Full Stack Web Developer</h3>
						<ul id='description'>	
							<li>Developed web applications using JavaScript (ReactJS), CSS and Python (Flask).</li>
							<li>Worked with designers to achieve the client’s vision.</li>
							<li>This was a remote position: collaborated with a distributed team using Slack, Skype and Git.</li>
						</ul>
		            </li>
		            <li class="event" data-date="2014-2016">
		              <h3>Columbia Medical Center - System Administrator's Assistant, Pathology</h3>
						<ul id='description'>	
							<li>Built and maintained internal tools using Python, Bash, and Microsoft Powershell. </li>
							<li>Created a system for automated backups and maintained in-house servers for department use. </li>
							<li>Performed hardware repairs on computers, laptops, and projectors. </li>
							<li>Facilitated tasks performed by the system administrator.  </li>
						</ul>
		            </li>
		          </ul>
	        </div>
	        </div></div>
          </section>
			);
	}
}