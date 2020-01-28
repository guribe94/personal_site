import React from 'react';
import imageOverlay from "../img/northern_light.jpg";

class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
                <div className="overlay-mf"></div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="title-box-2">
                                <h5 className="title-left">
                                Send me an email.
                                </h5>
                            </div>

                            <div className="more-info text-center">
                                <a className="lead" href="mailto:guribe94@gmail.com">
                                    <span class="ion-email"></span> <strong>guribe94@gmail.com</strong>
                                </a>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                Find me online.
                                </h5>
                            </div>

                            <div className="socials text-center">
                                <ul>
                                <li><a href="https://github.com/guribe94" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                                <li><a href="https://www.linkedin.com/in/gabriel-uribe-69788515b/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                        <p className="copyright">Site built with ReactJS</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        );
    }
}

export default Contact;