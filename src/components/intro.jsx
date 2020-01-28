import React, {Component} from 'react';
import './stars.scss';
import Typed from 'react-typed';

class Intro extends Component {
    render(){
        return (
          // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
            <div id="home" className="intro route bg-image background">
              <div id="stars" />
              <div id="stars2" />
              <div id="stars3" />
            {/* <div className="overlay-intro"></div> */}
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">I am Gabriel Uribe</h1>
                  <p className="intro-subtitle"><span className="text-slider-items">
                    </span><strong className="text-slider"><Typed strings={['Software Engineer', 'Cryptocurrency Enthusiast', 'Entrepreneur', 
                    'Front End Developer', 'Back End Developer']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong></p>
                </div>
              </div>
            </div>
            </div>
        
        );
    }
}

export default Intro;

class Scroll extends Component{
    constructor(props){
	super(props);
    }
    render(){
	return(
	    <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button"> My Work</a></p>
	);
    }
}

