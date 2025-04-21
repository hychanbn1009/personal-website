import React from "react";
import './Homepage.css';
import my_image from '../../assets/images/my_image.jpg';

const Homepage =()=>{
    return(
        <div className="homepage-container" id="Home">
            <div className="self-intro-block">
                <h1>Hei Yuen Chan</h1>
                <h3>Software Engineer</h3>
                <h4>AWS Certified Developer & Solution Architect</h4>
                <div class="contact-block">
                    <a href="https://github.com/hychanbn1009" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="mailto:hychanbn1009@gmail.com"><i class="far fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/hychanbn/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="image-holder">
                <img src={my_image} id="my-image" alt="My Face"/>
            </div>
        </div>
    )
}

export default Homepage